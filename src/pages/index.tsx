import AppBar from "@/components/AppBar";
import LeftBar from "@/components/LeftBar";
import { useState } from "react";
import HiddenLeftBar from "@/components/HiddenLeftBar";
import TopBar from "@/components/TopBar";

export default function Home() {
  const [leftBarDisplay, setLeftBarDisplay] = useState(true)

  const toggleLeftBar = () => {
    setLeftBarDisplay((prev) => !prev);
  };

  return (
      <div>
        <AppBar toggleLeftBar={toggleLeftBar}/>
          <div className="grid grid-cols-[auto_1fr]">
              <div>{leftBarDisplay?<LeftBar />:<HiddenLeftBar />}</div>
              <div><TopBar /></div>
          </div>
      </div>
      
  )
}
