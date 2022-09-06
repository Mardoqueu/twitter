import Image from "next/image"
import SidebarMenuItem from "./SidebarMenuItem"
import { HomeIcon } from '@heroicons/react/solid'
import { BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from '@heroicons/react/outline'
import { useSession, signIn, signOut } from "next-auth/react";
export default function Sidebar() {
  {/* initialize  */}
  const { data: session } = useSession();
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
        {/* Twitter logo */}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
            <Image 
            width="50" 
            height="50" 
            src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
        </div>

        {/* Menu */}

        <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        {session && (
          <>
          <SidebarMenuItem text="Notifications" Icon={BellIcon} />
          <SidebarMenuItem text="Messages" Icon={InboxIcon} />
          <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
          <SidebarMenuItem text="Profile" Icon={UserIcon} />
          <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
          </>

        )}

      </div>

        {/* Button */}

        {session ? (
            <>
            <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Twitte</button>

{/* Mini-profile */}
<div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
    <img 
    src="https://media-exp1.licdn.com/dms/image/C4E03AQF1Icbg9ibKSQ/profile-displayphoto-shrink_800_800/0/1656524327808?e=1667433600&v=beta&t=zLj1VuO7UnlyGXgtGnCIGGm6Xel0rldXOa9ES50GV3c" 
    alt="user-img"
    className="h-10 w-10 rounded-full"/>
    <div className="leading-5 hidden xl:inline">
        <h4 className="font-bold">Mardoqueu Sousa</h4>
        <p className="text-gray-500">@SousaMardoqueu</p>
    </div>
    <DotsHorizontalIcon className="h-5 xl:ml-8"/>
</div>  
            </>
        ) : (
        <button
          onClick={signIn}
          className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"
        >
            Sign in
          </button>
        )}

        
    </div>
  )
}
