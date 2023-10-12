import { IconButton } from "@/components/iconButton";

export interface RightSidebarProps {
  title: string;
  open: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

export function RightSidebar({ open, title, onClose, content }: RightSidebarProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="d-flex flex-column border-start" style={{ width: 560 }}>
      <div className="w-100 d-flex align-items-center justify-content-between border-bottom px-3" style={{ height: 64 }}>
        <h5 className="m-0">{title}</h5>

        <IconButton name="x" onClick={onClose} />
      </div>

      <div className="content">
        {content}
      </div>
    </div>
  )
}