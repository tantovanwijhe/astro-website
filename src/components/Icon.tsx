import {css} from "@emotion/react"
import {
  FontAwesomeIcon,
  type FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome"

export const Icon = ({icon}: FontAwesomeIconProps) => {
  return (
    <i css={styles}>
      <FontAwesomeIcon icon={icon} />
    </i>
  )
}

const styles = css`
  > svg {
    height: 2.5rem;
    width: 2.5rem;
  }
`
