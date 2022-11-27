import "./BackeryItem.css";

export default function BackeryItem({name, description, price, tag, image, total, setTotal, cart}) {

  function handleAdd(){
    total = setTotal(total + price);
    cart.set(name, cart.get(name)+1);
  }

  function handleDelete(){
    if (cart.get(name) > 0) {
      total = setTotal(total - price);
      cart.set(name, cart.get(name)-1);
    }
  }

	return (
		<div className="box">

			<img src={image} alt=""></img>
      <div className="col">
        <div className="row">
          <h3>{name}</h3>
          <p className="price">${price}</p>
        </div>
        <div>
          <p className="description">{description}</p>
        </div>
        <div className="row" id="update">
          <div className="tag">
            <p>#{tag}</p>
          </div>
          <div>
            <button className="editbtn" onClick={handleDelete}>-</button>
              {cart.get(name)}
            <button className="editbtn" onClick={handleAdd}>+</button>
          </div>
        </div>
      </div>
      
      
		</div>
	);
}