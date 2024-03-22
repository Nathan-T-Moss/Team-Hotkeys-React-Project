// import { photoFormatter } from "../crud-requests/CrudRequests";

export default function FeaturedCard ({productListing}) {
    // productListing.images = photoFormatter(productListing.images);
    return (
        <div className='card'>
            <img src={productListing.images[0]} alt='product image' className='featured-product-img'></img>
            <h2 className='featured-product-title'>{productListing.title}</h2>
            <p>in {productListing.category.name}</p>
            <h3>{productListing.price}</h3>
        </div>
    );
}