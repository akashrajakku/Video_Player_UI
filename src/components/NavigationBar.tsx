function NavigationBar() {
  return (
    <div className="flex justify-between pt-5 pl-1 space-x-1 pr-3">
        <NavigationButton content={"All"}/>
        <NavigationButton content={"Music"}/>
        <NavigationButton content={"Future garage"}/>
        <NavigationButton content={"Playlist"}/>
        <NavigationButton content={"Interstellar"}/>
        <NavigationButton content={"Live"}/>
        <NavigationButton content={"Theme music"}/>
        <NavigationButton content={"Algorithm"}/>
        <NavigationButton content={"Computer Programming"}/>
        <NavigationButton content={"Reverbation"}/>
        <NavigationButton content={"Tennis"}/>
        <NavigationButton content={"AI"}/>
    </div>
  )
}

function NavigationButton({content}: {content:string;}){
    return<div>
      {content == "All" ? <div className="inline-block px-4 py-2 bg-white text-zinc-950 rounded-md  cursor-pointer">
            <b>{content}</b>
        </div> : <div className="inline-block px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 cursor-pointer">
            <b>{content}</b>
        </div>}
    </div>
}

export default NavigationBar