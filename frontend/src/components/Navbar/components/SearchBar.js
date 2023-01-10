export default function SearchBar({searchBarSize}){
    return(
          
            <div className={searchBarSize}>
              <input type="text" value="searchterm" className="flex-stretch-basis"/>
              <button>X</button>
            </div>
          
          )
  }