import { SparklesIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Feed() {
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl"> 
        <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
              <h2 text-lg sm:text-xl font-bold cursor-pointer>Home</h2>
              <div className=''>
                    <SparklesIcon className='h-5'/>
              </div>  
        </div> 
    </div>
  )
}
