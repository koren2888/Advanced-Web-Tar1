import "./product-description.css"

function ProductDescription(props) {
    return (
        <>
            <div onClick={props.closeDescription} className="ProductDescription">
                <div className="Details">
                    <div className="ProductName">{props.name}</div>
                    <div className="ProductPrice">{props.price}$</div>
                </div>
                <img className="ProductImage" src={props.imagePath} alt={props.name} />
            </div>
            <div className="description">
                {props.description} You can buy this item at {props.soldAt}. Press the item again to return to the item list.
            </div>
        </>
    );
}

export default ProductDescription;
