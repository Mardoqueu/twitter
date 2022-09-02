import { SearchIcon } from "@heroicons/react/outline";

export default function Widgets() {
  return (
    <div className="xl:w-[600px] hidden lg:inline">
        <div className="w-[90%] xl:w[75%] sticky top-0 bg-white py-1.5 z-50">            
            <div className="flex items-center p-3 rounded-full relative">
                <SearchIcon className="h-5 z-50"/>
                <input className="absolute inset-0 rounded-full " type="text" placeholder="Search Twitter"></input>

            </div>
        </div>
    </div>
  )
}
