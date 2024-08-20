function HiddenLeft() {
  return (
    <div>
        <LeftOption title={"title"} icon={"icon"}/>
        <LeftOption title={"title"} icon={"icon"}/>
        <LeftOption title={"title"} icon={"icon"}/>
        <LeftOption title={"title"} icon={"icon"}/>
    </div>
  )
}

function LeftOption({title, icon}:{title:string, icon:any}){
    return <div>hi there</div> 
}

export default HiddenLeft