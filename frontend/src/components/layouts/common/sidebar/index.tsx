import { SidebarIcon } from "./icon";
import { Navbar } from "./nav";

export function Sidebar() {
  return (
    <div
      className="bg-body-tertiary"
      style={{ width: 64, minWidth: 64 }}
    >
      <SidebarIcon />

      <Navbar />
    </div>
  )
}