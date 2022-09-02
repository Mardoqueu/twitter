import { SearchIcon } from "@heroicons/react/outline";

export default function Widgets() {
  return (
    <div>
        <div className="">
            <div className="flex items-center ">
                <SearchIcon className="h-5"/>
                <input type="text" placeholder="Search Twitter"></input>

            </div>
        </div>
    </div>
  )
}
