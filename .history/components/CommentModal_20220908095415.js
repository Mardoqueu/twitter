import React from 'react'
import { useRecoilState } from 'recoil'
import {modalState} from "../atom/modalAtom"
import Model from "react-modal";

export default function CommentModal() {
    const [open, setOpen]  = useRecoilState(modalState);    
  return (
    <div>

        {open && (
            <Model isOpen={open} className="max-x-lg w-[90%] absolute top-24 left-[50%] translate-x-[50%] bg-white border-2 rounded-xl shadow-md">
                <h1>Comment modal</h1>
            </Model>
        )}
    </div>
  )
}
