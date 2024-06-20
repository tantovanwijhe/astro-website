import {
  faHouse,
  faHouseLaptop,
  faLaptopCode,
  faStreetView,
  type IconDefinition,
} from "@fortawesome/free-solid-svg-icons"

export interface NavLink {
  text: string
  path: string
  icon: IconDefinition
}

export const navMap: NavLink[] = [
  {text: "Home", path: "/", icon: faHouse},
  {text: "Journey", path: "/journey", icon: faStreetView},
  {text: "Stack", path: "/stack", icon: faLaptopCode},
  {text: "Workspace", path: "/workspace", icon: faHouseLaptop},
]
