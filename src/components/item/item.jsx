import "../../styles/item.css";

const Item = (props) => {
  return (
    <div className="product_card">
      <img
        src={props.data.image}
        alt=""
        class="product_image"
        style={{ width: "100%" }}
      />
      <h3>{props.data.title}</h3>
      <h4 className="price">$ {props.data.price}</h4>
      <button className="product_button">Add to Cart</button>
    </div>
  );
};

export default Item;
