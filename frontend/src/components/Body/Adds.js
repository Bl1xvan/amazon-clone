import AddListItem from "./AddListItem"

const addList = [
    {
        addHeader: "New Year deals", 
        gridClass: "single", 
        addItems: [
        {image: "image 1", title: "title1-1", link: "link"}
     ]},
    {
        addHeader: "Keep shopping for",
        gridClass: "single", 
        addItems: [
        {image: "image 1", title: "title2-1", link: "link"}
        ]
    },
    {
        addHeader:"The New Year Sale",
        gridClass: "doubleRows", 
        addItems: [
        {image: "image 1", title: "title3-1", link: "link"},
        {image: "image 2", title: "title3-2", link: "link"},
        {image: "image 3", title: "title3-3", link: "link"},
        {image: "image 4", title: "title3-4", link: "link"}
        ]
    },
    {
        addHeader: "Send eGift Cards instantly",
        gridClass: "doubleRows", 
        addItems: [
        {image: "image 1", title: "title4-1", link: "link"},
        {image: "image 2", title: "title4-2", link: "link"},
        {image: "image 3", title: "title4-3", link: "link"},
        {image: "image 4", title: "title4-4", link: "link"}
        ]
    }
]

export default function Adds(){
    return(
    <div id="addList1" className="grid-small-half-column grid-gap">
        {addList.map(item => {
            const {addHeader, gridClass, addItems} = item
            return(<AddListItem addHeader={addHeader} gridClass={gridClass} addItems={addItems} />)
        })}
    </div>)
}