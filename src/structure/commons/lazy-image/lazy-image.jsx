import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';

const LazyImage = ({ alt, className, src }) => (
  <LazyLoadImage src={src} alt={alt} className={className} />
);

LazyImage.propTypes = {
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default LazyImage;
