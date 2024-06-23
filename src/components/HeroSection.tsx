import {css} from "@emotion/react"
import {Button} from "./Button"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"

export const HeroSection = () => {
  return (
    <section css={styles}>
      <h1 className="hero-text">
        Hi, I’m Tanto. <br /> Full Stack Software Engineer <br />
        Based in Amsterdam.
      </h1>

      <Button text="work in progress" />
    </section>
  )
}

const styles = css`
  height: calc(80vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--spacing--24);

  .hero-text {
    font-size: var(--mobile--heading---h1);
    line-height: 1.2;
    letter-spacing: -0.03em;
    text-align: center;
    user-select: none;

    background-clip: text;
    -webkit-text-fill-color: rgba(0, 0, 0, 0);
    background-image: linear-gradient(
      to bottom right,
      var(--neutral--00),
      var(--primary--100)
    );

    @media (min-width: 768px) {
      font-size: 7.2rem;
    }
  }
`
