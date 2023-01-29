export default function OneColumn({children, absolute}){
    const givenClass = `grid-one-column ${absolute && `absolute-top`}`
    return(
                <div className={givenClass}>
                    {children}
                </div>
           )
}