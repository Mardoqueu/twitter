import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
import { HomeIcon } from '@heroicons/react/solid'
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from '@heroicons/react/outline'
 
export default function Sidebar() {
  return (
    <div>
        {/* Twitter logo */}
        <div className="hoverEffect">
            <Image 
            width="50" 
            height="50" 
            src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
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

        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md ">Twitte</button>

        {/* Mini-profile */}
        <div className="hoverEffect">
            <img src="https://media-exp1.licdn.com/dms/image/C4E03AQF1Icbg9ibKSQ/profile-displayphoto-shrink_800_800/0/1656524327808?e=1667433600&v=beta&t=zLj1VuO7UnlyGXgtGnCIGGm6Xel0rldXOa9ES50GV3c" alt="user-img"/>
            <div className="">
                <h4>Mardoqueu</h4>
                <p>@SousaMardoqueu</p>
            </div>
            <DotsHorizontalIcon className="h-5"/>
        </div>  
    </div>
  )
}
