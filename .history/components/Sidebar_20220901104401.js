import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
export default function Sidebar() {
  return (
    <div>
        {/* Sidebar */}
        <div className="">
            <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
        </div>

        {/* Menu */}

        <div className="">
            <SidebarMenuItem text="Home" icon={HomeIcon}/>
        </div>

        {/* Button */}

        {/* Mini-profile */}
    </div>
  )
}
