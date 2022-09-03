import { SearchIcon } from "@heroicons/react/outline";
import { useState } from "react";
import News from "./News";

export default function Widgets({newsResults, randomUserResults}) {

{/*variable to show more news each time the user click on show more */}
const [articlNum, setArticleNum] = useState(5);
  return (
    <div className="xl:w-[600px] hidden lg:inline ml-8 space-y-5">
        <div className="w-[90%] xl:w[75%] sticky top-0 bg-white py-1.5 z-50">            
            <div className="flex items-center p-3 rounded-full bg-red-300 relative">
                <SearchIcon className="h-5 z-50 text-gray-500 "/>
                <input className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100 " type="text" placeholder="Search Twitter"></input>
            </div>
        </div>

        <div className="text-gray-700 space-y-3 bg-gray-100 rounded-xl pt-2 w-[90%] xl:w-[75%]">
            <h4 className="font-bold text-xl px-4">What's happening</h4>
            {newsResults.slice(0,articlNum).map((article)=> (
            <News key={article.title} article={article}/>
        ))}
        {/*Show more 3 news each time click on show more */}
        <button onClick={() => setArticleNum(articlNum + 3)} className="text-blue-300 pl-4 pb-3 hover:text-blue-400">Show more</button>
        </div>
        <div className="">
              <h4>Who to follow</h4>
        </div>

    </div>
  )
}
