import { DotsHorizontalIcon } from "@heroicons/react/outline";

export default function Post({post}) {
  return (
    <div>
        {/* user image */}
        <img src={post.userImg} alt="user-img"></img>

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
            <img src={post.img}></img>
            
            {/* icons */}
            <div className="">

            </div>
        </div>

    </div>
  )
}
