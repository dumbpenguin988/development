import "./App.css";
import bakeryData from "./assets/bakery-data.json";
import { useState } from "react";
import Menu from "./components/Menu"

bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});

const cart = new Map();
bakeryData.map((item) => cart.set(item.name, 0));

function App() {
  const [total, setTotal] = useState(0);
  const [data, setData] = useState(bakeryData);
  

  const handlePriceFilter = () => {
    if (document.getElementById("ub").value > 0){
      setData(data.filter(item => item.price > document.getElementById("lb").value && item.price < document.getElementById("ub").value));
    } else {
      setData(data.filter(item => item.price > document.getElementById("lb").value));
    }
  }

  const handleFilterReset = () => {
    setData(bakeryData);
  }

  const handleSortPrice = () => {
    setData([...data.sort((a, b) => a.price-b.price)]);
  }

  const handleTypeFilter = () => {
    const newData = [];
    const allTags = ["biscuit", "bun", "bread", "cake", "sweet"];
    for (const tag of allTags) {
      if (document.getElementById(tag).checked) {
        newData.push(...bakeryData.filter(item => item.tag === tag));
      }
    }
    console.log(newData);
    setData(newData);
  }

  return (
    <div className="App">
      <h1>My Bakery</h1> 
      <div className="content">
        <Menu bakeryData={data} total={total} setTotal={setTotal} cart={cart}/>
        <div className="sidebar">
          <div className="filters">
            <h4> Filter by price</h4>
            <div>
              Greater than $<input type="number" id="lb"/>
            </div>
            <div>
              Less than $<input type="number" id="ub"/>
            </div>
            <button onClick={handlePriceFilter}> Filter</button>
            <h4> Filter by type</h4>
            <div>
              <input type="checkbox" id="biscuit"/>biscuit
            </div>
            <div>
              <input type="checkbox" id="bun" />bun
            </div>
            <div>
              <input type="checkbox" id="bread"/>bread
            </div>
            <div>
              <input type="checkbox" id="cake"/>cake
            </div>
            <div>
              <input type="checkbox" id="sweet"/>sweet
            </div>
            <button onClick={handleTypeFilter}>Filter</button>
            <div>
              <button onClick={handleFilterReset}>Clear all filters</button>
            </div>
            <h4> Sort by price</h4>
            <button onClick={handleSortPrice}> Sort </button>
          </div>
          <div className="checkout">
            <h2>Checkout</h2>
            <p>TOTAL: {total.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
