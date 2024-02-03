// import { useEffect, useState } from "react"
// import { FakeStoreApi } from '../../services/fake-store-api'
// import { useSearchParams } from "react-router-dom"
// import { Item } from "../../components/item"
// import { useCart } from "../../context/cart"
// import ReviewsList from "../../review/ ReviewsList";
// import ReviewForm from "../../review/ReviewForm"
// import Review from "../../review/Review"
// import mixpanel from 'mixpanel-browser';



// const Products = () => {
//     const [loading, setLoading] = useState(true);
//     const [products, setProducts] = useState([]);
//     //Review
//     const [reviews, setReviews] = useState([]);

//     const [query] = useSearchParams();
//     const { addToCart } = useCart()

//     const searchQuery = query.get('q');


//     const handleReviewSubmit = (newReview) => {
//         // Add the new review to the existing reviews array
//         setReviews([...reviews, { id: reviews.length + 1, date: new Date(), ...newReview }]);
//       };
    
//     // Load search history from localStorage
//     const searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];


//     useEffect(() => {
//         const fetchProducts = async () => {
//             setLoading(true);
//             const products = searchQuery ? await FakeStoreApi.fetchProductsBySearchQuery(searchQuery) : await FakeStoreApi.fetchAllProducts();
//             setProducts(products);
//             setLoading(false)

//  // Save search query to search history
//  if(searchQuery && !searchHistory.includes(searchQuery)){
//     const newSearchHistory = [...searchHistory, searchQuery];
//     localStorage.setItem('searchHistory', JSON.stringify(newSearchHistory));
//  }

//         }
//         fetchProducts().catch(console.error)
//     }, [searchQuery])

//     if (!loading && searchQuery && !products.length) {
//         return (
//             <div className="container">
//                 <div className="product py-2">
//                     <div className="details p-3">No products found matching your query.</div>
//                 </div>
//             </div>
//         )
//     }

//     mixpanel.track(
//         "Played song",
//         {"genre": "hip-hop"}
//     );

    
// mixpanel.init('65e5fde532af74267c2a1faf09205f8a', {debug: true, track_pageview: true, persistence: 'localStorage'});
 
// // Set this to a unique identifier for the user performing the event.
// mixpanel.identify('USER_ID')
 
// // Track an event. It can be anything, but in this example, we're tracking a Sign Up event.
// mixpanel.track('Sign Up', {
//   'Signup Type': 'Referral'
// })

//     return (
//         <>
//             <div className="container">
//                 //History 
//                 <div className="search-history">
//                     <strong>Search History:</strong>
//                     {searchHistory.map((historyItem, index) => (
//                         <span key={index} className="history-item">{historyItem}</span>
//                     ))}
//                 </div>

//                 <div className="products my-5">
//                     <div className="grid">
//                         {loading ? (
//                             <div className="loader" />
//                         ) : (
//                             products.map((product) => (
//                                 <Item key={product.id} data={product} addToCart={() => addToCart(product)} />
//                             ))
//                         )}
//                     </div>
//                 </div>

// //Review
//                 <ReviewsList reviews={reviews} />
//       <ReviewForm onSubmit={handleReviewSubmit} />
//             </div>
//         </>
//     )
// }

// export { Products }
