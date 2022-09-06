import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";

export default function Input() {
    const { data: session } = useSession();
    {/*creating a state*/}
    const [input, setInput] =useState;
    console.log(session);

  return (

    <>
    {session && (
        <div className="flex border-b border-gray-200 p-3 space-x-3">
        {/*takes the user image from google singin*/}
        <img
        onClick={signOut}
        src={`${session.user.image}`}
        alt="user-img" 
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"/>
        <div className="w-full divide-y divide-gray-200">
            <div className="">
                <textarea className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide mini-h-[50px] text-gray-700"  
                rows="2" 
                placeholder="What's happening?"
                value={input}
                onChange={(e)=> setInput(e.target.value)}
                ></textarea>
            
            </div>
            <div className="flex items-center justify-between pt-2.5">
                <div className=" flex">
                    <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-500"/>
                    <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-500"/>
                </div>
                <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-100">Tweet</button>            
            </div>
        </div>
    </div>

    )}
    </>
    

  );
}
