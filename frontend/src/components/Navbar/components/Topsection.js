import useWindowResize from "../../../hooks/useWindowResize"

export default function Topsection(){
  const {width} = useWindowResize()
  const screensize = width < 600 ? "flex-column" : "grid-small-half-column"
  return(
        <div className={screensize}>
            <div className="flex-row flex-end padded-top">
                <span>image icon here</span>
                <span>amazon image here</span>
            </div>
            <div className="flex-row flex-end padded-top" >
                <span>sign in link here</span>
                <span>Cart link here</span>
            </div>
        </div>
        )
}
