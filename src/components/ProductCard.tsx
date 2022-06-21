import { Product } from '../data/types';
import useStore from '../store/cartStore';

interface Props {
  product: Product;
  page?: 'cart' | 'normal';
}

const ProductCard: React.FC<Props> = ({ product, page = 'normal' }) => {
  const { addToCart, removeFromCart } = useStore();
  const isCart = page === 'cart';
  return (
    <div className="product">
      {isCart && (
        <>
          <span className="remove" onClick={() => removeFromCart(product._id)}>
            X
          </span>
          <span className="count">{product.total}</span>
        </>
      )}
      <div className="icon">{product.icon}</div>
      <div className="details">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
      </div>
      <div className="actionBtn">
        <div className="price">${product.price}</div>
        {!isCart && (
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
