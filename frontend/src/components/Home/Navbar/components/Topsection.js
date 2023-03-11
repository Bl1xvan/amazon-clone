import useWindowResize from "../../../../hooks/useWindowResize"
import SearchBar from "./SearchBar"
export default function Topsection(){
  const {width} = useWindowResize();
  const activeScreen = width > 900 ? "desktop" : "mobile";
  const navFlex = {
    desktop: "flex-row flex-gap",
    mobile: "flex-column"
  }

  const searchBarSize = {
    desktop: "flex-row flex-stretch-3",
    mobile: "flex-row full-width"
  }
return(
        <div id="main-nav" className={`padded-top-bottom-15 ${navFlex[activeScreen]}`}>
            <div className="flex-row padded-top-bottom-7 flex-gap">
                <span className="flex-grow-5">
                {width < 900 && <img src="./hamburger1.png" alt=""/> }
                  <img src="./amazon_logo1.png" alt=""/>
                </span>
                {width > 900 && <span className="flex-grow-1">Location</span>}
                {width < 900 && 
                  <span className="flex-row flex-grow-1 flex-end">
                    <img src="./signin1.png" alt="" />
                    <span>Cart</span>
                  </span>
                }
            </div>
            <SearchBar searchBarSize={searchBarSize[activeScreen]}/>
            {width > 900 && <div className="flex-row padded-top flex-gap">
                <img src="./signin1.png" alt="" />
                <span>Cart link here</span>
            </div>
            }
        </div>
    )
}
