import { SearchIcon } from "@heroicons/react/outline";

export default function Widgets() {
  return (
    <div>
        <div className="">
            <div className="">
                <SearchIcon className="h-5"/>
                <input type="text" placeholder="Search Twitter"></input>
            </div>
        </div>
    </div>
  )
}
