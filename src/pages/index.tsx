import { Inter } from "next/font/google";
import VideoGrid from "@/components/VideoGrid";
import AppBar from "@/components/AppBar";
import LeftBar from "@/components/LeftBar";
import NavigationBar from "@/components/NavigationBar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
      <div>
        <AppBar />
        <NavigationBar />
          <div className="flex">
              <LeftBar />
              <VideoGrid />
          </div>
      </div>
      
  )
}
