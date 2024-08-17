export function VideoCard(props : any){
    return(
        <div className="p-2">
            <img className="rounded-xl" src={props.image}></img>
            <div className="grid grid-cols-12 pt-2">
                <div className="col-span-1"><img className="rounded-full w-10 h-10" src={props.thumbImage}></img></div>
                <div className="col-span-11 pl-3">{props.title}
                    <div className="pt-1 text-gray-400">{props.author}</div>
                    <div className="text-gray-400">{props.views} views | {props.timestamp}</div>
                </div>
            </div>
        </div>
    )
}