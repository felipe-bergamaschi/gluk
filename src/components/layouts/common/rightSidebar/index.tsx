import { IconButton } from "@/components/iconButton";

export interface RightSidebarProps {
  title: string;
  open: boolean;
  onClose?: () => void;
  content: React.ReactNode;
  hideCloseButton?: boolean;
}

export function RightSidebar({ open, title, onClose, content, hideCloseButton = false }: RightSidebarProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="d-flex flex-column border-start" style={{ width: 560 }}>
      <div
        className="w-100 d-flex align-items-center justify-content-between border-bottom px-3"
        style={{
          height: 64,
          minHeight: 64
        }}
      >
        <h5 className="m-0">{title}</h5>

        {!hideCloseButton && (
          <IconButton name="x" onClick={onClose} />
        )}
      </div>

      <div className="d-flex flex-column flex-fill overflow-hidden">
        {content}
      </div>
    </div>
  )
}