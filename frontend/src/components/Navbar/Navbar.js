import Bottomsection from "./components/Bottomsection"
import Middlesection from "./components/Middlesection"
import Topsection from "./components/Topsection"
import useWindowResize from "../../hooks/useWindowResize"

export default function Navbar(){
  const {width} = useWindowResize()
  const screensize = width < 499 ? "flex-column" : "grid-half-column full-width"  
  return(
        <div className="gray-div">
            <div className={screensize}>
                <Topsection />
                <Middlesection />
            </div>
                <Bottomsection />
        </div>
         )
}
