import { IconButton } from "@/components/iconButton";

export function RightSidebar() {
  return (
    <div className="d-flex flex-column border-start" style={{ width: 560 }}>
      <div className="w-100 d-flex align-items-center justify-content-between border-bottom px-3" style={{ height: 64 }}>
        <h5 className="m-0">Sidebar title</h5>

        <IconButton name="x" />
      </div>

      <div className="content">
        content
      </div>
    </div>
  )
}