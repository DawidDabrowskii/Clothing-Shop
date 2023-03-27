import ProductCard from '../product-cart/product-card.component';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './category-preview.styles';

const CategoryPreview = ({ title, products }) => (
  <CategoryPreviewContainer>
    <h2 className='title'>
      <Title to={title}>{title.toUpperCase()}</Title>
    </h2>
    <Preview>
      {products
        .filter((_, idx) => idx < 4)
        .map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Preview>
  </CategoryPreviewContainer>
);

export default CategoryPreview;
