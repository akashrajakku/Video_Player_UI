import HiddenLeft from "./HiddenLeft"
function HiddenLeftBar() {
  return (
    <div className="relative h-screen">
        <div
        className={`fixed pt-2 pl-1 pr-3 h-full w-56 bg-black text-white shadow-lg transform transition-transform duration-300 ease-in-out`}
      >
        <HiddenLeft />
      </div>
    </div>
  )
}

export default HiddenLeftBar