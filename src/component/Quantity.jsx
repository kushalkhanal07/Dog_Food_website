import React from "react"

export default function Quantity(){
  return(
    <div className="total_price border-[2px] p-2">
          <p className="details1">PRICE DETAILS</p>
          <div className="flex_price">
            <p className="details2">Total MRP</p>
            <p className="details3">Rs 200</p>
          </div>

          <div className="flex_price1">
            <p className="details4">Discount on MRP</p>
            <p className="details5">Rs 20</p>
          </div>

          <div className="flex_price2">
            <p className="details6">Convenience Fee</p>
            <p className="details7">Rs 99</p>
          </div>

          <div className="line"></div>
          <div className="flex_price3">
            <p className="details8">Total Amount</p>
            <p className="details9">Rs 300</p>
          </div>

          <button className="place_order">Place Order</button>

        </div>
  )
}