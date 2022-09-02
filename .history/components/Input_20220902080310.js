import { PhotographIcon } from "@heroicons/react/solid";

export default function Input() {
  return (
    <div>
        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQF1Icbg9ibKSQ/profile-displayphoto-shrink_800_800/0/1656524327808?e=1667433600&v=beta&t=zLj1VuO7UnlyGXgtGnCIGGm6Xel0rldXOa9ES50GV3c" alt="user-img" />
        <div className="">
            <div className="">
                <textarea  rows="2" placeholder="What's happening?"></textarea>
            </div>
            <div className="">
                <PhotographIcon/>
            </div>
        </div>
    </div>
  )
}
