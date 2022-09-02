import { SparklesIcon } from '@heroicons/react/outline'
import Input from '../components/Input';
import Post from './Post';


export default function Feed() {
  const posts = [
    {
        id: "1",
        name: "Mardoqueu Sousa",
        username: "SousaMardoqueu",
        userImg: "https://media-exp1.licdn.com/dms/image/C4E03AQF1Icbg9ibKSQ/profile-displayphoto-shrink_800_800/0/1656524327808?e=1667433600&v=beta&t=zLj1VuO7UnlyGXgtGnCIGGm6Xel0rldXOa9ES50GV3c",
        img: "https://images.unsplash.com/photo-1627911206549-6c41ed2524de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG5pZ2h0JTIwZm9yZXN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
        text: "warm night!",
        timestamp: "2 hours ago"
    },
    {
        id: "2",
        name: "Sarah Wayne",
        username: "wayne.sarah",
        userImg: "https://media-exp1.licdn.com/dms/image/C4E03AQF1Icbg9ibKSQ/profile-displayphoto-shrink_800_800/0/1656524327808?e=1667433600&v=beta&t=zLj1VuO7UnlyGXgtGnCIGGm6Xel0rldXOa9ES50GV3c",
        img: "https://images.unsplash.com/photo-1468818438311-4bab781ab9b8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dHJhdmVsJTIwY2FyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
        text: "What trip!",
        timestamp: "1 hour ago"
    },
]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl"> 
       {/* div is covering the header section taht has an edge to tag  */}
        <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
              <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
              <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                    <SparklesIcon className='h-5'/>
              </div>  
        </div> 
        <Input/>
        {posts.map((post) => (
          <Post/>
        ))}
    </div>
  )
}
