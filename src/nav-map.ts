import {
  faHouse,
  faHouseLaptop,
  faLaptopCode,
  faStreetView,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons"

export interface NavLink {
  section: string
  path: string
  icon: IconDefinition
}

export const navMap: NavLink[] = [
  {section: "Home", path: "/", icon: faHouse},
  {section: "Journey", path: "/journey", icon: faStreetView},
  {section: "Stack", path: "/stack", icon: faLaptopCode},
  {section: "Workspace", path: "/workspace", icon: faHouseLaptop},
]
