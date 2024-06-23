import {css} from "@emotion/react"
import type {IconDefinition} from "@fortawesome/fontawesome-svg-core"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

interface ButtonProps {
  icon?: IconDefinition
  text: string
}

export const Button = ({icon, text}: ButtonProps) => {
  return (
    <button css={styles}>
      <span>{text}</span>
      {icon && (
        <i>
          <FontAwesomeIcon icon={icon} />
        </i>
      )}
    </button>
  )
}

const styles = css`
  position: relative;
  border-radius: 100px;
  box-sizing: border-box;
  flex-shrink: 0;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  gap: var(--spacing--5);
  padding: var(--spacing--8) var(--spacing--10);

  background: linear-gradient(
    to bottom right,
    rgba(128, 128, 128, 0.1),
    rgba(128, 128, 128, 0.35),
    rgba(128, 128, 128, 0.55) 55%
  );
  background-blend-mode: luminosity;
  backdrop-filter: blur(
    50px
  ); // Note: backdrop-filter has minimal browser support

  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  transition-duration: 0.3s;

  :hover {
    cursor: pointer;
    scale: 1.05;
    transition-property: scale;
  }

  :active {
    transition-duration: 0.1s;
    scale: 0.95;
    transition-property: scale;
  }

  &::before {
    content: "";
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    padding: 0.1rem;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.75),
      rgba(255, 255, 255, 0),
      rgba(255, 255, 255, 0),
      transparent
    );
    mask:
      linear-gradient(#000, #000) content-box,
      linear-gradient(#000, #000);
    mask-composite: exclude;
  }

  span {
    color: #fff;
    font-size: var(--mobile--heading---h5);
  }

  i {
    position: relative;
    top: 0.25rem;

    color: #fff;

    > svg {
      height: 2.5rem;
      width: 2.5rem;
    }
  }
`
