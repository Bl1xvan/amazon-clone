import Picture1 from "../../images/Picture1.jpg"
import CartItemCont from "./Components"
import useWindowResize from "../../hooks/useWindowResize"
import Navbar from "../Home/Navbar/Navbar"
import "./style.css"

const singleProduct = {
    id: 301101,
    image: `${Picture1}`, 
    name: "First Item", 
    quantity: 1, 
    price: Intl.NumberFormat(undefined, {style: 'currency', currency: 'USD'}).format(1.50), 
    details1: "first set of details",
    details2: "second set of details" 
}

const singleProduct1 = {
    id: 301102,
    image: `${Picture1}`, 
    name: "Second Item", 
    quantity: 1, 
    price: Intl.NumberFormat(undefined, {style: 'currency', currency: 'USD'}).format(1.75), 
    details1: "first set of details",
    details2: "second set of details" 
}


export default function CheckOut(){
    const { width } = useWindowResize();
    const responsiveDisplay = width > 1050 ? "cart-grid" : "flex-column"
    return(
        <div className="full-width-container">
            <Navbar />
            <div className={responsiveDisplay}>
                <div>
                    <CartItemCont product={singleProduct} />
                    <CartItemCont product={singleProduct1} />
                    <div id="subtotal-row" className="cart-item-container gray-div"><p><b>Subtotal: $15.50</b></p></div>
                </div>
                <div className="cart-item-container">
                    <div id="checkout-box" className="magenta-div flex-column">
                        <h4>{`Subtotal (2 items) `} $15.50</h4>
                        <span><input type="checkbox" />This item contains a gift</span>
                        <button type="button" id="checkout-btn" className="yellow-div">Checkout</button>
                    </div>
                </div>
            </div>

        </div>
        )
}