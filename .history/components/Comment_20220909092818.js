import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, TrashIcon } from "@heroicons/react/outline";
import { ShareIcon } from "@heroicons/react/solid";
import { collection, deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import Moment from "react-moment";
import { db, storage } from "../firebase";
import {HeartIcon as HeartIconFilled} from "@heroicons/react/solid"
import { deleteObject, ref } from "firebase/storage";
import { useRecoilState } from "recoil";
import { modalState, postIdState } from "../atom/modalAtom";
import { useRouter } from "next/router";


export default function Comment({comment, commentId, originalPostId}) {
    const { data: session } = useSession();
    const [likes, setLikes] = useState([]);
    const [hasLiked, setHasLiked] = useState(false);
    const [open, setOpen] = useRecoilState(modalState);
    const [postId, setPostId] = useRecoilState(postIdState);
    const [hasComments, setHasComments] = useState(false);
    const router = useRouter();


    useEffect(() => {
      setHasComments(
        comment.findIndex((comments) => comments.id === session?.user.uid) !== -1
      );
    }, [comment]);

    async function commentPost() {
      if (session) {
        if (hasComments) {
          await deleteDoc(doc(db, "posts", id, "comments", session?.user.uid));
        } else {
          await setDoc(doc(db, "posts", id, "comments", session?.user.uid), {
            username: session.user.username,
          });
        }
      } else {
        signIn();
      }
    }

    {/*useEffect to get the information about the number of likes*/}
    useEffect(() => {
        const unsubscribe = onSnapshot(
          collection(db, "posts", originalPostId, "comments", commentId,"likes"),
          (snapshot) => setLikes(snapshot.docs)
        );
      }, [db, originalPostId, commentId]);

    
     {/*check if the user id exists inside the likes*/}
      useEffect(() => {
        setHasLiked(
          likes.findIndex((like) => like.id === session?.user.uid) !== -1
        );
      }, [likes]);
    
      async function likeComment() {
        if (session) {
            {/*Check if there's a like, if there's like it may remove with deleteDoc,*/}
          if (hasLiked) {
            await deleteDoc(
              doc(
                db, 
                "posts", 
                originalPostId, 
                "comments", 
                commentId,
                "likes", 
                session?.user.uid));
          } else {
            {/*Set like*/}
            await setDoc(doc(db, "posts", originalPostId, "comments", commentId,"likes", session?.user.uid), {
              username: session.user.username,
            });
          }
        } else {
            {/*if the user is not singin, the user will be redirect to signin page*/}
          signIn();
        }
      }

      {/* delete functionality */}
      async function deleteComment() {
        if (window.confirm("Are you sure you want to delete this comment?")) {
          deleteDoc(doc(db, "posts", originalPostId, "comments", commentId));
        }
      }
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
        {/* user image */}
        <img 
        className="h-11 w-11 mr-4 rounded-full " 
        src={`${comment?.UserImg}`} 
        alt="user-img"></img>

        {/* right side */}

        <div className="flex-1">
        {/* Header */}
            <div className="flex items-center justify-between">
            {/* post user info */}
                <div className="flex items-center space-x-1 whitespace-nowrap">
                    <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">{comment?.data()?.name}</h4>
                    <span className="text-sm sm:text-[15px]">@{comment?.data()?.username} - </span>
                    
                    <span className="text-sm sm:text-[15px] hover:underline">   
                        {/* Moment to show the time that post was created */}      
                        <Moment fromNow>{comment?.data()?.timestamp?.toDate()}</Moment>
                    </span>
                </div>
                {/* dot icon */}
                <DotsHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2"/>

            </div>
            {/* post text */}
            <p className="text-gray-800 text-[15px sm:text-[16px] mb-2 ">{comment?.data()?.comment}</p>


            {/* icons */}    
            <div className="flex justify-between text-gray-500">
               <div className="flex items-center select-none">
                <ChatIcon 
                onClick={() => {
                  if(!session){
                    signIn();
                  }else{
                    setPostId(originalPostId)
                    setOpen(!open);
                  }
                }} 
                className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>

                </div>
            {/* Check if the user is the owner of the post */}
            {session?.user.uid === comment?.data()?.id && (
            <TrashIcon
              onClick={deleteComment}
              className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
            />
          )}
                
                {/*If there's any like, the heart will be filled, otherise it will be empty*/}
            <div className="flex items-center">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likeComment}
                className="h-9 w-9 hoverEffect p-2 text-red-600 hover:bg-red-100"
              />
            ) : (
              <HeartIcon
                onClick={likeComment}
                className="h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100"
              />
            )}
            {likes.length > 0 && (
              <span
                className={`${hasLiked && "text-red-600"} text-sm select-none`}
              >
                {/*number of likes*/}
                {" "}
                {likes.length}
              </span>
            )}
          </div>
               

               
                <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
                <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"/>
            </div>
        </div>

    </div>
  )
}
