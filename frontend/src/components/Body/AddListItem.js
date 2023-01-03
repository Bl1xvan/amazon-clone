const GridComp = ({gridClass, addItems}) => {
    const activeGrid= {
        single: "1fr",
        doubleRows: "repeat(2, 1fr)"
    }

    const styles= {
        display: "grid",
        gridTemplateColumns: activeGrid[gridClass]
    }

    return(    
    <div style={styles} className="add-group-grid">
        {addItems.map(item => {
            const {image, title, link} = item
            return(<div><h4>{title}</h4><p>{image}</p><p>{link}</p></div>)
        })}
    </div>)
}


export default function AddListItem({addHeader, gridClass, addItems}){
  return(
  <div className="square addstyle">
    <h3>{addHeader}</h3>
    <GridComp gridClass={gridClass} addItems={addItems}/>
  </div>)
}
