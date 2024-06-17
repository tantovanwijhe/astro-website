import {css} from "@emotion/react"
import {Button} from "./Button"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"

export const HeroSection = () => {
  return (
    <section css={styles}>
      <h1>
        Hi, I’m Tanto. <br /> Full Stack Software Engineer <br />
        Based in Amsterdam.
      </h1>

      <Button text="duis magna" icon={faAngleDown} />
    </section>
  )
}

const styles = css`
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing--24);

  h1 {
    font-size: 7.2rem;
    line-height: 1.2;
    letter-spacing: -0.05em;
    text-align: center;
    user-select: none;

    background-clip: text;
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(
      to bottom right,
      var(--primary--500),
      var(--neutral--700)
    );
  }
`
