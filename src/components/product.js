import "./product.css"

function Product(props) {
  return (
    <div className="Product">
        <div className="Details">
            <div className="ProductName">{props.name}</div>
            <div className="ProductPrice">{props.price}$</div>
        </div>
        <img className="ProductImage" src={props.imagePath} alt={props.name} />
    </div>
  );
}

export default Product;
