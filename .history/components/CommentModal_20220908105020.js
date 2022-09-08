import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import {modalState, postIdState} from "../atom/modalAtom"
import Model from "react-modal";
import { XIcon } from '@heroicons/react/solid';
import { db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import Moment from 'react-moment';
import { useSession } from 'next-auth/react';
import { PhotographIcon } from '@heroicons/react/outline';
export default function CommentModal() {
    const [open, setOpen]  = useRecoilState(modalState);    
    const [postId]  = useRecoilState(postIdState);    
    const [post, setPost] = useState({});
    const [input, setsetInput] = useState("");
    const {data:session} = useSession();

    useEffect (() => {
        onSnapshot(doc(db, "posts", postId), (snapshot) => {setPost(snapshot)});
    }, [postId, db]);


  return (
    <div>

        {open && (
            <Model isOpen={open} 
            onRequestClose={() => setOpen(false)}
            className="max-w-lg w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 rounded-xl shadow-md">
                
                <div className='p-1'>
                    <div className='border-b border-gray-200 py-2 px-1.5'>
                        <div onClick={() => setOpen(false)} className="hoverEffect w-9 h-9 flex items-center justify-center">
                            <XIcon className='h-[23px] text-gray-700'/>
                        </div>
                    </div>
                    {/* post user info */}
                    <div className="p-2 flex items-center space-x-1 relative">
                        <span className="w-0.5 h-full z-[-1] absolute left-8 top-11 bg-gray-300" />
                        <img 
                            className="h-11 w-11 mr-4 rounded-full " 
                            src={`${post?.data()?.UserImg}`} 
                            alt="user-img">
                        </img>                        

                        <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{post?.data()?.name}</h4>
                        <span className="text-sm sm:text-[15px]">@{post?.data()?.username} - </span>
                        
                        <span className="text-sm sm:text-[15px] hover:underline">   
                            {/* Moment to show the time that post was created */}      
                            <Moment fromNow>{post?.data()?.timestamp?.toDate()}</Moment>
                        </span>
                            
                            <div className="flex border-b border-gray-200 p-3 space-x-3">
                            {/*takes the user image from google singin*/}
                            <img
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
                                        <div className="" onClick={() => filePickerRef.current.click()}>
                                            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"/>
                                            {/*<input 
                                            type="file" 
                                            hidden ref={filePickerRef} 
                                            onChange={addImageToPost}></input>*/}
                                        </div>
                                        <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"/>
                                    </div>
                                    <button
                                        onClick={sendPost}
                                        disabled={!input}
                                        className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                                    >                    Tweet
                                        </button>    

                            
                                </div>
                            </div>
                        </div>



                    </div>
                </div>


            </Model>
        )}
    </div>
  )
}
