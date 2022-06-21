import Navbar from '../components/Navbar/Navbar';
import ProductCard from '../components/ProductCard';
import products from '../data/products';
import '../styles/App.scss';

function Home() {
  return (
    <div className="App">
      <Navbar />
      <div className="body">
        {products.map(pd => (
          <>
            <ProductCard key={pd._id} product={pd}></ProductCard>
          </>
        ))}
      </div>
    </div>
  );
}

export default Home;
