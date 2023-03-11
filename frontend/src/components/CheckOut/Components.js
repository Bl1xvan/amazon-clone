import {createContext, useContext} from "react"
import useWindowResize from "../../hooks/useWindowResize";
import "./style.css"
const CartContext = createContext();

function CartItemCont({product}){
    const { width } = useWindowResize();
    const responsiveDisplay = width > 850 ? "cart-item-grid" : "flex-column"
    return(
    <CartContext.Provider value={product}>    
        <div className="cart-item-container gray-div">
            <div className={responsiveDisplay}>
                <div className="image-quantity flex-column align-items-center">
                    <ItemImage />
                    { width < 850 && <MobileQuantity />}
                </div>
                <div className="item-details flex-column space-between">
                    <ItemName />
                    <ItemDetails1 />
                    <ItemDetails2 />
                    <CartBtns />
                </div>
            </div>
        </div>
    </CartContext.Provider>
    )
}

function ItemImage(){
    const product = useContext(CartContext)
    return(<img src={product.image} alt="cart item" style={{width: "175px", height: "175px"}}/>)
}

function ItemName(){
    const product = useContext(CartContext)
    return(<h4>{product.name}</h4>)
}

function ItemDetails1(){
    const product = useContext(CartContext)
    return(<p className="small-text">{product.details1}</p>)
}

function ItemDetails2(){
    const product = useContext(CartContext)
    return(<p className="small-text">{product.details2}</p>)
}

function MobileQuantity(){
    const product = useContext(CartContext)
    return(
        <div className="full-width flex-row space-between quantity-margin-bottom">
            <div className="flex-row">
                <button type="button">-</button>
                <input type="number" className="cart-number-input" value={product.quantity}/>
                <button type="button">+</button>
            </div>
            <p>Subtotal <b>{product.price}</b></p>
        </div>)
}

function DesktopQuantity(){
    const product = useContext(CartContext)
    return(<div id="desktop-quantity" className="flex-row">
            <p>{product.price} X</p>
            <button type="button">
                Quantity: 1
            </button>
            <p>= <b>{product.price}</b></p>
           </div>
           )
}

function ItemPrice(){
    const { width } = useWindowResize()
    return(<>{width > 850 && <DesktopQuantity /> }</>)
}

function CartBtns(){
    return(
    <div className="full-width flex-row space-between">
        <div className="cart-btns">
            <button type="button">Delete</button>
            <button type="button">Save for Later</button>
            <button type="button">Compare to other items</button>
        </div>
        <ItemPrice />
    </div>)
}

export default CartItemCont