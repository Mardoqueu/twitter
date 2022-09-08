import React from 'react'
import { useRecoilState } from 'recoil'
import {modalState} from "../atom/modalAtom"

export default function CommentModal() {
    const [open, setOpen]  = useRecoilState(modalState);
    
  return (
    <div>CommentModal</div>
  )
}
