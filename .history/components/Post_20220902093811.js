import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, TrashIcon } from "@heroicons/react/outline";
import { ShareIcon } from "@heroicons/react/solid";

export default function Post({post}) {
  return (
    <div className="flex p-3">
        {/* user image */}
        <img className="h-11 w-11 rounded-full " src={post.userImg} alt="user-img"></img>

        {/* right side */}

        <div className="">
        {/* Header */}
            <div className="">
            {/* post user info */}
                <div className="">
                <h4>{post.name}</h4>
                <span>{post.username}</span>
                <span>{post.timestamp}</span>
                </div>
                {/* dot icon */}
                <DotsHorizontalIcon className="h-10"/>

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
