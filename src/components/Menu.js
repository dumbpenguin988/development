import "../App.css"

import BakeryItem from "./BakeryItem.js"



export default function Menu({bakeryData, total, setTotal, cart}){

  return (
    <div className="items">
    {bakeryData.map((item) => ( 
      <BakeryItem name={item.name} description={item.description} price={item.price} tag={item.tag}image={item.image} total={total} setTotal={setTotal} cart={cart}/>
    ))}
  </div>
  )
}