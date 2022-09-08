import React from 'react'
import { useRecoilState } from 'recoil'
import {modalState} from "../atom/modalAtom"
import Modal from "react-modal";

export default function CommentModal() {
    const [open, setOpen]  = useRecoilState(modalState);    
  return (
    <div>

        {open && (
            <Model isOpen={open}>
                <h1>Comment modal</h1>
            </Model>
        )}
    </div>
  )
}
