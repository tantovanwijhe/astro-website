import {css} from "@emotion/react"
import {type IconDefinition} from "@fortawesome/free-solid-svg-icons"
import clsx from "clsx"
import {useEffect, useRef, useState} from "react"
import {Icon} from "./Icon"
import type {NavLink} from "../nav-map"

export const Navigation = ({
  options,
  section,
  icon,
}: {
  options: NavLink[]
  section: string
  icon: IconDefinition
}) => {
  const [menuHeader, setMenuHeader] = useState<string | null>(null)
  const [expand, setExpand] = useState<boolean>(true)
  const navRef = useRef<HTMLDivElement>(null)

  const closeMenu = (e: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(e.target as Node)) {
      setExpand(false)
    }
  }

  useEffect(() => {
    setExpand(false)
    setTimeout(() => 10)

    document.addEventListener("mousedown", closeMenu)

    return () => {
      document.removeEventListener("mousedown", closeMenu)
    }
  }, [])

  return (
    <div className={clsx(expand && "expanded")} css={styles}>
      <nav onClick={() => setExpand(!expand)} tabIndex={0} ref={navRef}>
        <div>
          <Icon icon={icon} />
          <span>{menuHeader || section}</span>
        </div>
        <ul onMouseLeave={() => setMenuHeader(section)}>
          {options.map((option, index) => (
            <a
              key={index}
              href={option.path}
              draggable={false}
              className="glass"
            >
              <li onMouseEnter={() => setMenuHeader(option.section)}>
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

  z-index: 9999;
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

    @keyframes scaleUp {
      0% {
        transform: scale(0.9);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }

    animation: scaleUp 0.3s ease-in-out;

    /* TODO: keyboard accessibility */
    nav {
      background-color: rgba(1, 1, 1, 0.7);
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.6);

      :hover {
        cursor: default;
        scale: 1;
      }

      :active {
        transition-duration: 0.3s;
        scale: 0.9;
        transition-property: scale;
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
          user-select: none;
        }

        span {
          width: calc(var(--dynamic-width) / 2);
        }
      }

      ul {
        align-items: center;
        height: 6rem;
        padding: 0.8rem;
      }
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    gap: var(--spacing--5);

    flex: 1 1 460px;
    align-items: center;
    border-radius: 42px;

    color: #fff;
    background-color: rgba(1, 1, 1, 0.6);

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
      padding: 1.4px;
      background: linear-gradient(
        165deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0) 40%,
        rgba(255, 255, 255, 0) 57%,
        rgba(255, 255, 255, 0.1) 100%
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
      scale: 0.9;
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
          transition: inherit;
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

        transition: width 0.2s ease-out;
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

      transition: all 0.3s ease;
      transform: translateY(0);

      a {
        width: 65px;
        height: 65px;
        border-radius: 32px;

        background: linear-gradient(
            0deg,
            var(--neutral--400) 0%,
            var(--neutral--800) 100%
          ),
          var(--neutral--800);
        background-blend-mode: color-dodge, lighten;

        ::before {
          border-radius: 32px;
          padding: 1.4px;
        }

        li {
          display: flex;
          align-items: center;
          gap: 2rem;

          padding: 2rem 2rem;
          border-radius: inherit;

          transition: all 0.5s ease;

          :hover {
            transition-duration: 0.3s;
            background-color: var(--neutral--600);
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
