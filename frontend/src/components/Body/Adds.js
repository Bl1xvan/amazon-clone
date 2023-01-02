import AddListItem from "./AddListItem"

const addList = [
    {
        addHeader: "New Year deals", 
        gridClass: 1, 
        addItems: [
        {image: "image 1", title: "title1-1", link: "link"}
     ]},
    {
        addHeader: "Keep shopping for",
        gridClass: 1, 
        addItems: [
        {image: "image 1", title: "title2-1", link: "link"}
        ]
    },
    {
        addHeader:"The New Year Sale",
        gridClass: 1, 
        addItems: [
        {image: "image 1", title: "title3-1", link: "link"}
        ]
    },
    {
        addHeader: "Send eGift Cards instantly",
        gridClass: 1, 
        addItems: [
        {image: "image 1", title: "title4-1", link: "link"}
        ]
    }
]

export default function Adds(){
    return(
    <div className="addList1">
        {addList.map(item => {
            const {addHeader, gridClass, addItems} = item
            return(<AddListItem addHeader={addHeader} gridClass={gridClass} addItems={addItems} />)
        })}
    </div>)
}