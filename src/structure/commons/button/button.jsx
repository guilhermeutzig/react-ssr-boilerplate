import PropTypes from 'prop-types';

import { ButtonWrapper } from './button.style';

const Button = ({ children, onClick }) => (
  <ButtonWrapper onClick={onClick}>{children}</ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
