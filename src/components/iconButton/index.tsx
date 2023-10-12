import { Icon, IconProps } from "../icon";

import "./style.css";

interface IconButtonProps extends IconProps {
  onClick?: () => void;
}

export function IconButton({ onClick, ...rest }: IconButtonProps) {
  return (
    <button
      type="button"
      className="btn btn-secondary icon-button"
      onClick={onClick}
    >
      <Icon {...rest} />
    </button>
  )
}