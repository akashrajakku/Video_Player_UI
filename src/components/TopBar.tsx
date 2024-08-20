import NavigationBar from "./NavigationBar"
import VideoGrid from "./VideoGrid"


function TopBar() {
  return (
    <div className="grid flex-1">
        <NavigationBar />
        <VideoGrid />
    </div>
  )
}

export default TopBar