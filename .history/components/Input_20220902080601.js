import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";

export default function Input() {
  return (
    <div className="flex border-b">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQF1Icbg9ibKSQ/profile-displayphoto-shrink_800_800/0/1656524327808?e=1667433600&v=beta&t=zLj1VuO7UnlyGXgtGnCIGGm6Xel0rldXOa9ES50GV3c" 
        alt="user-img" 
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"/>
        <div className="">
            <div className="">
                <textarea  rows="2" placeholder="What's happening?"></textarea>
            </div>
            <div className="">
                <PhotographIcon className="h-10 w-10"/>
                <EmojiHappyIcon className="h-10 w-10"/>
            </div>
            <button>Tweet</button>
        </div>
    </div>
  )
}
