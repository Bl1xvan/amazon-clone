import useWindowResize from "../../../hooks/useWindowResize"
import SearchBar from "./SearchBar"
export default function Topsection(){
  const {width} = useWindowResize();
  const activeScreen = width > 900 ? "desktop" : "mobile";
  const navFlex = {
    desktop: "flex-row",
    mobile: "flex-column"
  }

  const searchBarSize = {
    desktop: "flex-row flex-stretch-3",
    mobile: "flex-row full-width"
  }
return(
        <div id="main-nav" className={navFlex[activeScreen]}>
            <div className="flex-row padded-top">
                <span className="flex-grow-1"><img src="./hamburger1.png" alt=""/><img src="./amazon_logo1.png" alt=""/></span>
                {width < 900 && <span className="flex-row flex-grow-1 flex-end"><span>Sign in</span><span>Cart</span></span>}
            </div>
            <SearchBar searchBarSize={searchBarSize[activeScreen]}/>
            <div className="flex-row padded-top">
                <span>sign in link here</span>
                <span>Cart link here</span>
            </div>
        </div>
    )
}
