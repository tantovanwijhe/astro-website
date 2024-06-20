import {css} from "@emotion/react"
import {faHouse} from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import {useEffect, useRef, useState} from "react"
import {Icon} from "./Icon"
import type {NavLink} from "../nav-map"

export const Navigation = ({
  options,
  title,
}: {
  options: NavLink[]
  title: string
}) => {
  const [menuHeader, setMenuHeader] = useState<string | null>(null)
  const [expand, setExpand] = useState<boolean>(false)
  const navRef = useRef<HTMLDivElement>(null)

  const handleTextChange = (text: string) => {
    setMenuHeader(text)
  }

  const closeMenu = (e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setExpand(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", closeMenu)
    return () => {
      document.removeEventListener("mousedown", closeMenu)
    }
  })

  return (
    <div className={clsx(expand && "expanded")} css={styles}>
      <nav onClick={() => setExpand(!expand)} tabIndex={0} ref={navRef}>
        <div>
          <Icon icon={faHouse} />
          <span>{menuHeader || title}</span>
          {/* <Icon icon={faHouse} /> */}
        </div>
        <ul onMouseLeave={() => handleTextChange("Home")}>
          {options.map((option, index) => (
            <a key={index} href={option.path}>
              <li onMouseEnter={() => handleTextChange(option.text)}>
                <Icon icon={option.icon} />
              </li>
            </a>
          ))}
        </ul>
      </nav>
    </div>
  )
}

const styles = css`
  --base-height: 83px;
  --dynamic-width: min(40rem, 95vw);

  height: var(--base-height);
  position: fixed;
  left: 0;
  right: 0;
  top: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  user-select: none;

  transition: height 0.2s ease-out;

  &.expanded {
    height: 200px;

    nav {
      :hover {
        cursor: default;
      }

      div {
        width: var(--dynamic-width);
        background-color: var(--neutral--800);
        background-size: 200% 100%;
        background-position: right bottom;

        svg {
          width: 0;
          height: 0;
          overflow: hidden;
        }

        span {
          width: calc(var(--dynamic-width) / 2);
        }
      }

      ul {
        height: 10rem;
        padding: 0.8rem;
      }
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: var(--spacing--5);

    flex: 1 1 460px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 42px;

    color: #fff;
    background-color: rgba(1, 1, 1, 0.8);

    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    overflow: hidden;

    transition-duration: 0.3s;

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

    :hover {
      cursor: pointer;
      scale: 1.05;
      transition-property: scale;
    }

    :active {
      transition-duration: 0.3s;
      scale: 0.95;
      transition-property: scale;
    }

    > div {
      height: var(--base-height);
      width: 340px;
      border-radius: inherit;

      display: flex;
      gap: var(--spacing--5);

      transition:
        width 0.3s ease-out,
        background-color 0.3s ease-in-out;

      i {
        width: var(--base-height);
        height: var(--base-height);
        border-radius: 100px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-shrink: 0;

        background-color: var(--neutral--800);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

        svg {
          transition:
            width 0.3s ease-out,
            height 0.3s ease-out;
        }
      }

      span {
        min-height: var(--base-height);
        width: 100%;
        border-radius: inherit;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: var(--neutral--800);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

        font-size: var(--desktop--heading---h3);
        font-weight: 700;

        transition: width 0.5s ease-out;
      }
    }

    ul {
      height: 0;

      display: flex;
      justify-content: center;
      gap: 2rem;

      border-radius: inherit;

      font-size: var(--desktop--heading---h4);
      font-weight: 600;

      transition: all 0.5s ease;
      transform: translateY(0);

      a {
        li {
          border-radius: 32px;

          display: flex;
          align-items: center;
          gap: 2rem;

          padding: 2rem 2rem;
          background-color: var(--neutral--800);

          transition: all 0.5s ease;

          :hover {
            transition-duration: 0.3s;
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
  }
`
