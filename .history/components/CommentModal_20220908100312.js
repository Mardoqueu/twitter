import React from 'react'
import { useRecoilState } from 'recoil'
import {modalState} from "../atom/modalAtom"
import Model from "react-modal";
import { XIcon } from '@heroicons/react/solid';

export default function CommentModal() {
    const [open, setOpen]  = useRecoilState(modalState);    
  return (
    <div>

        {open && (
            <Model isOpen={open} 
            onRequestClose={() => setOpen(false)}
            className="max-w-lg w-[90%] absolute top-24 left-[50%] translate-x-[-50%] bg-white border-2 border-gray-200 rounded-xl shadow-md">
                
                <div className='p-1'>
                    <div className='border-b border-gray-200 py-2 px-1.5'>
                        <div className="hoverEffect w-9 h-9 flex items-center justify-center">
                            <XIcon className='h-[22px] text-gray-700'/>
                        </div>
                    </div>
                </div>


            </Model>
        )}
    </div>
  )
}
