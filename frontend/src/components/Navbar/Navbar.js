import Bottomsection from "./components/Bottomsection"
import Middlesection from "./components/Middlesection"
import Topsection from "./components/Topsection"

export default function Navbar(){
  return(
        <div>
            <div className="grid-half-column full-width">
                <Topsection />
                <Middlesection />
            </div>
                <Bottomsection />
        </div>
         )
}
