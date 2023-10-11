import { Icon } from "@/components/icon";

export function Navbar() {
  return (
    <ul className="nav nav-pills flex-column">
      <li className="nav-item">
        <a href="#" className="nav-link active py-3 rounded-0">
          <Icon name="house" />
        </a>
      </li>

      <li className="nav-item">
        <a href="#" className="nav-link py-3 rounded-0">
          <Icon name="house" />
        </a>
      </li>
    </ul>
  )
}