import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import {modalState, postIdState} from "../atom/modalAtom"
import Model from "react-modal";
import { XIcon } from '@heroicons/react/solid';
import { db } from '../firebase';
import { doc, onSnapshot } from 'firebase/firestore';
import Moment from 'react-moment';

export default function CommentModal() {
    const [open, setOpen]  = useRecoilState(modalState);    
    const [postId]  = useRecoilState(postIdState);    
    const [post, setPost] = useState({});

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
                            <XIcon className='h-[22px] text-gray-700'/>
                        </div>
                    </div>
                    {/* post user info */}
                    <div className="p-2 flex items-center justify-center space-x-1 relative">
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
                    </div>
                </div>


            </Model>
        )}
    </div>
  )
}
