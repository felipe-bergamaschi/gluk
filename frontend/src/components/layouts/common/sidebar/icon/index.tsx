import { Icon } from "@/components/icon";

export function SidebarIcon() {
  return (
    <a
      href="/"
      className="w-100 d-flex align-items-center justify-content-center"
      style={{ height: 64 }}
    >
      <Icon name="bootstrap-fill" size={32} />
    </a>
  )
}