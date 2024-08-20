import HiddenLeft from "./HiddenLeft";
import {SearchBar} from "./SearchBar";
import { useState } from "react"

export function AppBar({toggleLeftBar}:{toggleLeftBar: any}) {
  return (
    <div className="flex justify-between pt-2">
      <div className="flex justify-between">
      <div className="pt-3 pl-6 pr-5 pb-3 cursor-pointer rounded-full hover:bg-zinc-900" onClick={toggleLeftBar}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
      </div>
      <div className="pl-5 pt-1 w-40"><img src="logo.png" className="h-10 w-20"></img></div>
      </div>
      
      <div className="flex pr-5">
        <SearchBar />
      </div>
      <div className="flex">
        <button className="pr-6 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
          </svg>
        </button>

        <button className="pr-6 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
          </button>

        <button className="pr-6 rounded-full"><img src="profile.jpg" className="h-9 w-9 rounded-full"></img></button>
      </div>
    </div>
  );
}

export default AppBar;
