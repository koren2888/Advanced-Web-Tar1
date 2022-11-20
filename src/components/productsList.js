import "./productsList.css"
import Product from "./product";

function ProductsList(props) {
    let products = [
        {
            name: "Desk",
            price: 300,
            imagePath: "https://www.ikea.com/us/en/images/products/arkelstorp-desk-black__0735967_pe740301_s5.jpg?f=s"
        }, {
            name: "Chair",
            price: 1600,
            imagePath: "https://www.ikea.com/om/en/images/products/stefan-chair-brown-black__0727320_pe735593_s5.jpg?f=s"
        }, {
            name: "Mixer",
            price: 8700,
            imagePath: "https://www.seriouseats.com/thmb/hMevGtiDkCJ_k7FUZ9TNq3Ud4Wc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__images__2015__12__20151201-gift-guide-stand-mixer-1500x1125-712fb32a38d84c8097d3f5ce60ca626b.jpg"
        }]
    return (
      <div className="ProductsList">
          {products.map((product) => <Product {...product} />)}
      </div>
    );
  }
  
  export default ProductsList;
  