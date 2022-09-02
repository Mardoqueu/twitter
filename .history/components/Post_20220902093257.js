
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
            </div>
            {/* post text */}
            {/* post image */}

            
            {/* icons */}
            <div className="">

            </div>
        </div>

    </div>
  )
}
