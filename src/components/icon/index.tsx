import { TextColor } from "../../theme/types"

interface IconProps {
  name: string;
  size?: number;
  color?: TextColor;
}

export function Icon({ name, size = 24, color }: IconProps) {
  return (
    <i className={`bi bi-${name} ${color}`} style={{ fontSize: `${size}px` }} />
  )
}