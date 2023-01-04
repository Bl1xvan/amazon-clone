import Signin from "./Signin"
import Slideshow from "./Slideshow"
import Adds from "./Adds"
import useWindowResize from "../../hooks/useWindowResize"

export default function Body() {
    const { width } = useWindowResize()
    return(<div>
              <Signin />
              <div className="side-margins">
              {width < 700 && <Slideshow /> }
              <Adds />
              </div>
           </div>)
};
