import {css} from "@emotion/react"
import {faBars, faHouse} from "@fortawesome/free-solid-svg-icons"
import {Icon} from "./Icon"
import {useState} from "react"

export const Navigation = () => {
  const [menuHeader, setMenuHeader] = useState<string | null>(null)
  const [expand, setExpand] = useState<boolean>(false)

  const handleTextChange = (text: string) => {
    setMenuHeader(text)
  }

  const handleNavClick = () => {
    setExpand(prevExpand => !prevExpand)
  }

  return (
    <div css={styles}>
      <nav>
        <div
          onClick={handleNavClick}
          onBlur={() => setExpand(false)}
          tabIndex={0}
        >
          <Icon icon={faHouse} />
          <span>{menuHeader || "Home"}</span>
          <Icon icon={faBars} />
        </div>
        {expand && (
          <ul
            className={expand ? "open" : ""}
            onMouseLeave={() => handleTextChange("Home")}
          >
            <li onMouseEnter={() => handleTextChange("ONE")}>
              <Icon icon={faHouse} />
            </li>
            <li onMouseEnter={() => handleTextChange("TWO")}>
              <Icon icon={faHouse} />
            </li>
            <li onMouseEnter={() => handleTextChange("THREE")}>
              <Icon icon={faHouse} />
            </li>
          </ul>
        )}
      </nav>
    </div>
  )
}

const styles = css`
  min-height: 70px;
  position: fixed;
  left: 0;
  right: 0;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  user-select: none;

  nav {
    display: flex;
    flex-direction: column;
    gap: var(--spacing--5);

    width: 460px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 36px;

    color: #fff;
    background-color: rgba(1, 1, 1, 0.8);
    /* background-color: rgba(1, 1, 1, 1); */

    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    overflow: hidden;

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

    > div {
      width: 100%;
      border-radius: inherit;
      display: flex;
      gap: var(--spacing--5);
      background-color: var(--neutral--800);

      i {
        width: 70px;
        height: 70px;
        flex: 0 0 70px;
        border-radius: 100px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--neutral--800);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      }

      span {
        min-height: 70px;
        width: 100%;
        border-radius: inherit;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--neutral--800);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

        font-size: var(--desktop--heading---h3);
        font-weight: 700;
      }
    }

    ul {
      display: flex;
      justify-content: center;
      gap: 2rem;

      padding: 8px;
      border-radius: inherit;

      /* background-color: var(--neutral--800); */
      /* background-color: rgba(1, 1, 1, 1); */

      font-size: var(--desktop--heading---h4);
      font-weight: 600;

      li {
        display: flex;
        align-items: center;
        gap: 2rem;

        padding: 2rem 2rem;

        /* border: 1px dotted red; */
        border-radius: inherit;

        background-color: var(--neutral--800);

        :hover {
          transition-duration: 0.1s;
          background-color: var(--neutral--500);
        }

        i {
          width: 25px;
          height: 25px;

          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
`
