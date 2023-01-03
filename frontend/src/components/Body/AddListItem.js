const GridComp = ({gridClass, addItem}) => {
    const activeGrid={
        single: "1fr",
        doubleRows: "repeat(2, 1fr)"
    }

    const styles={
        display: "grid",
        gridTemplateColumns: activeGrid[gridClass]
    }

    return(    
    <div style={styles} className="add-group-grid">
        {addItem.map(item => {
            const {image, title, link} = item
            return(<div><h4>{title}</h4><p>{image}</p><p>{link}</p></div>)
        })}
    </div>)
}


export default function AddListItem({addHeader, gridClass, addItem}){
  return(
  <div className="add-group">
    <h3>{addHeader}</h3>
    <GridComp gridClass={gridClass} addItem={addItem}/>
  </div>)
}
