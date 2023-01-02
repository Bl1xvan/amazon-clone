import Signin from "./Signin"
import Slideshow from "./Slideshow"
import useWindowResize from "../../hooks/useWindowResize"

export default function Body() {
    const { width } = useWindowResize()
    return(<div>
              <Signin />
              {width < 700 && <Slideshow /> }
           </div>)
};
