import Picture1 from '../../images/Picture1.jpg'

export default function Slideshow() {

   const tempStyle = {
      height: "40vh",
      width: "100%",
      backgroundImage: `url(${Picture1})`,
      backgroundSize: "cover",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center"
   }
   return(<div style={tempStyle}><div className="mini-slide-show full-width">Mini Slide Show</div></div>) 
};
