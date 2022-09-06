import { SparklesIcon } from '@heroicons/react/outline'
import { onSnapshot } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Input from '../components/Input';
import Post from './Post';


export default function Feed() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    {/*getting the inforamtion from firebase with snapshot*/}
    const unsubscribe = onSnapshot=()
  
  }, [])
 
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl"> 
       {/* div is covering the header section taht has an edge to tag  */}
        <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
              <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
              <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                    <SparklesIcon className='h-5'/>
              </div>  
        </div> 
        <Input/>
        {posts.map((post) => (
          <Post key={post.id} post={post}/>
        ))}
    </div>
  )
}
