export default function SearchBar({searchBarSize}){
    return(
            <div className={`white-div round-border ${searchBarSize}`}>
              <input type="text" value="searchterm" className="flex-stretch-basis no-border"/>
              <button className="yellow-div round-border no-border"><img src="./search.png" alt=""/></button>
            </div>
          
          )
  }