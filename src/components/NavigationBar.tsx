function NavigationBar() {
  return (
    <div className="flex justify-between pt-5 pl-24 space-x-1 pr-3">
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
        <NavigationButton content={"Memes"}/>
    </div>
  )
}

function NavigationButton({content}: {content:string;}){
    return<div>
        <div className="inline-block px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-600 cursor-pointer">
            <b>{content}</b>
        </div>
    </div>
}

export default NavigationBar