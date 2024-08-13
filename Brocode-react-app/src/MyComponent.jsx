import React, {useState} from 'react'

function MyComponent(){
    const [quantity, setQuantity] = useState(1);
    const [comment, setComment] = useState("")
    const [name, setName] = useState("Guest")
    const [payment, setPayment] = useState('')
    const [shipping, setShipping] = useState('')
    function handleNameChange(event){
        setName(event.target.value);
    }
    function handleQuantityChange(event){
        setQuantity(event.target.value);
    }
    function handleCommentChange(event){
        setComment(event.target.value)
    }
    function handlePaymentChange(event){
        setPayment(event.target.value)
    }
    function handleShippingChange(event){
        setShipping(event.target.value)
    }
    return(
        <div>
            <input value={name} onChange={handleNameChange}/>
            <p>name: {name}</p>

            <input value={quantity} onChange={handleQuantityChange} type ="number"/>
            <p>Quantity: {quantity}</p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='enter delivery instructions'/>
            <p>comment: {comment}</p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">Select an option</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Mastercard</option>
                <option value="giftcard">Gift-Card</option>
            </select>
            <p>Payment: {payment}</p>

            <label>
                <input type="radio" value="pickup" 
                checked={shipping === "pickup"}
                onChange={handleShippingChange}/>
                Pick-Up
            </label>
            
            <label>
            <input type="radio" value="delivery" 
                checked={shipping === "delivery"}
                onChange={handleShippingChange}/>
                Delivery
            </label>
        </div>
    );
}
export default MyComponent