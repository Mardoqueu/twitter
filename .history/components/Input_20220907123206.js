import {
    EmojiHappyIcon,
    PhotographIcon,
    XIcon,
  } from "@heroicons/react/outline";
  import {
    addDoc,
    collection,
    doc,
    serverTimestamp,
    updateDoc,
  } from "firebase/firestore";
  import { getDownloadURL, ref, uploadString } from "firebase/storage";
  import { useSession, signOut } from "next-auth/react";
  import { useState, useRef } from "react";
  import { db, storage } from "../firebase";


export default function Input() {
    const { data: session } = useSession();
    {/*creating a state*/}
    const [input, setInput] = useState(null);

    const [selectedFile, setSelectedFile] = useState(null);
    
    const [loading, setLoading] = useState(false);

    {/*select file */}  
    const filePickerRef = useRef()
    
    {/*function is async what it means it will wait for data, cause Data will gives the promise*/}
    const sendPost = async () => {

        {/*check if the loading is true */}  
        if(loading) return;
        {/*set the loading to true */}     
        setLoading(true);
        

        const docRef = await addDoc(collection(db, "posts"), {
            id: session.user.uid,
            text: input,
            UserImg: session.user.image,
            timestamp: serverTimestamp(),
            name: session.user.name,
            username: session.user.username,
        });

        const imageRef = ref(storage, `posts/${docRef.id}/image`);

        if(selectedFile){
            await uploadString(imageRef, selectedFile, "data_url").then(async () => {
                const downloadURL = await getDownloadURL(imageRef)
                await updateDoc(doc(db, "posts", docRef.id), {
                    image: downloadURL,
                })
            })
        }

        setInput("");
        setSelectedFile(null);
        setLoading(false);
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if(e.target.files[0]){
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        }
    };

  return (

    <>
    {session && (
        <div className="flex border-b border-gray-200 p-3 space-x-3">
        {/*takes the user image from google singin*/}
        <img
        onClick={signOut}
        src="https://lh3.googleusercontent.com/a-/AFdZucr3oBtE1gZFD2F2al_RsMXJT24UfZdJgyxrLYXw76g=s96-c"
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
            {selectedFile && (
                <div className="relative">
                    <XIcon 
                    onClick={()=> setSelectedFile(null)} 
                    className="h-7  text-white absolute cursor-pointer shadow-md shadow-white rounded-full"/>
                    {/*Loading animation while is uploading the file*/}
                    <img src={selectedFile} className={`${loading && "animate-pulse"}`}></img>
                </div>
            )}
            <div className="flex items-center justify-between pt-2.5">
                {!loading && (
                    <>
                    <div className=" flex">
                    <div className="" onClick={() => filePickerRef.current.click()}>
                        <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"/>
                        <input type="file" hidden ref={filePickerRef} onChange={addImageToPost}></input>
                    </div>
                    <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"/>
                </div>
                <button
                    onClick={sendPost}
                    disabled={!input}
                    className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50"
                  >                    Tweet
                    </button>    
                    </>
                )}
        
            </div>
        </div>
    </div>

    )}
    </>
    

  );
}
