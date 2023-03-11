import "./style.css"


export default function SearchBar({searchBarSize}){
    return(
            <form className={`${searchBarSize}`} action="#">
              <div className="search-select">
                <select name="deals">
                  <option value="All">All</option>
                  <option value="Food">Food</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Baby">Baby</option>
                </select>
              </div>
              <input type="text" value="searchterm" className="flex-stretch-basis no-border"/>
              <button type="submit" id="search-submit" className="yellow-div no-border"><img src="./search.png" alt=""/></button>
            </form>
          
          )
  }