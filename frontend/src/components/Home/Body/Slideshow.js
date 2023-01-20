import useDrag from "../../../hooks/useDrag"
import Picture1 from '../../images/Picture1.jpg'
import Picture2 from '../../images/Picture2.jpg'
import Picture3 from '../../images/Picture3.jpg'
import Picture4 from '../../images/Picture4.jpg'
import Picture5 from '../../images/Picture5.jpg'
import Picture6 from '../../images/Picture6.jpg'
export default function Slideshow() {
   useDrag("slideshow-container")
   
   const tempStyle = {
      height: "40vh",
      width: "100%",
      backgroundImage: `url(${Picture1})`,
      backgroundSize: "cover",
      display: "flex",
      alignItems: "flex-end"
   }



   return(
            <div style={tempStyle}>
               <div className="slideshow-container full-width" id="slideshow-container">
                  <div className="mini-slide-show" id="miniSlide">
                     <div style={{backgroundImage: `url(${Picture2})`, backgroundSize: "cover"}}></div>
                     <div style={{backgroundImage: `url(${Picture3})`, backgroundSize: "cover"}}></div>
                     <div style={{backgroundImage: `url(${Picture4})`, backgroundSize: "cover"}}></div>
                     <div style={{backgroundImage: `url(${Picture5})`, backgroundSize: "cover"}}></div>
                     <div style={{backgroundImage: `url(${Picture6})`, backgroundSize: "cover"}}></div>
                  </div>
               </div>
            </div>) 
};
