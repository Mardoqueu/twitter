import { SearchIcon } from "@heroicons/react/outline";

export default function Widgets() {
  return (
    <div>
        <div className="">
            <div className="flex items-center p-3 rounded-full relative">
                <SearchIcon className="h-5"/>
                <input className="absolute" type="text" placeholder="Search Twitter"></input>

            </div>
        </div>
    </div>
  )
}
