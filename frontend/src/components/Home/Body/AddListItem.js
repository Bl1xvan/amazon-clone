const GridComp = ({gridClass, addItems}) => {
    const activeColumn= {
        single: "1fr",
        doubleRows: "repeat(2, 1fr)"
    }

    const styles= {
        display: "grid",
        gridTemplateColumns: activeColumn[gridClass],
        gap: ".5em",
        marginTop: "10px",
        flexBasis: "100%"
    }

    return(    
    <div style={styles}>
        {addItems.map(item => {
            const {image, title, link} = item
            return(<div className="magenta-div"><h4>{title}</h4><p>{image}</p><p>{link}</p></div>)
        })}
    </div>)
}


export default function AddListItem({addHeader, gridClass, addItems}){
    const styles= {
        display: "flex",
        flexDirection: "column",
        padding: "20px"
    }

  return(
  <div className="square addstyle">
    <div style={styles}>
        <h3>{addHeader}</h3>
        <GridComp gridClass={gridClass} addItems={addItems}/>
    </div>
  </div>
  )
}
