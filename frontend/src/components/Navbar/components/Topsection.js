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
    mobile: "full-width"
  }
return(
        <div className={navFlex[activeScreen]}>
            <div className="flex-row flex-end padded-top">
                <span>image icon here</span>
                <span>amazon image here</span>
            </div>
            <SearchBar searchBarSize={searchBarSize[activeScreen]}/>
            <div className="flex-row flex-end padded-top" >
                <span>sign in link here</span>
                <span>Cart link here</span>
            </div>
        </div>
    )
}
