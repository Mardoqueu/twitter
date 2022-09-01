import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
import { HomeIcon } from '@heroicons/react/solid'
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from '@heroicons/react/outline'
 
export default function Sidebar() {
  return (
    <div>
        {/* Sidebar */}
        <div className="">
            <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
        </div>

        {/* Menu */}

        <div className="">
            <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
            <SidebarMenuItem text="Explore" Icon={HashtagIcon} active/>
            <SidebarMenuItem text="Notifications" Icon={BellIcon} active/>
            <SidebarMenuItem text="Messages" Icon={InboxIcon} active/>
            <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} active/>
            <SidebarMenuItem text="Lists" Icon={ClipboardIcon} active/>
            <SidebarMenuItem text="Profile" Icon={UserIcon} active/>
            <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} active/>

        </div>

        {/* Button */}

        <button>Twitte</button>

        {/* Mini-profile */}
        <div className="">
            <img src="" alt="" /></img>
        </div>  
    </div>
  )
}
