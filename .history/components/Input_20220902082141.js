import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";

export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQF1Icbg9ibKSQ/profile-displayphoto-shrink_800_800/0/1656524327808?e=1667433600&v=beta&t=zLj1VuO7UnlyGXgtGnCIGGm6Xel0rldXOa9ES50GV3c" 
        alt="user-img" 
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"/>
        <div className="w-full divide-y divide-gray-200">
            <div className="">
                <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide mini-h-[50px] text-gray-700"  rows="2" placeholder="What's happening?"></textarea>
            </div>
            <div className="flex items-center justify-between pt-2.5">
                <div className=" flex">
                    <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-500"/>
                    <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-500"/>
                </div>
            <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disable:opacity-50px">Tweet</button>
            </div>
        </div>
    </div>
  )
}
