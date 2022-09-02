import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, TrashIcon } from "@heroicons/react/outline";
import { ShareIcon } from "@heroicons/react/solid";

export default function Post({post}) {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
        {/* user image */}
        <img className="h-11 w-11 mr-4 rounded-full " src={post.userImg} alt="user-img"></img>

        {/* right side */}

        <div className="">
        {/* Header */}
            <div className="">
            {/* post user info */}
                <div className="flex space-x-1 whitespace-nowrap">
                <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post.name}</h4>
                <span className="text-sm sm:text-[15px]">@{post.username} - </span>
                <span className="text-sm sm:text-[15px] hover:underline">{post.timestamp}</span>
                </div>
                {/* dot icon */}
                <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2"/>

            </div>
            {/* post text */}
            <p>{post.text}</p>

            {/* post image */}
            <img src={post.img} alt=""></img>
            
            {/* icons */}
            <div className="">
                <ChatIcon className="h-9"/>
                <TrashIcon className="h-9"/>
                <HeartIcon className="h-9"/>
                <ShareIcon className="h-9"/>
                <ChartBarIcon className="h-9"/>
            </div>
        </div>

    </div>
  )
}
