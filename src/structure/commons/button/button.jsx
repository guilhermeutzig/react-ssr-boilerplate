import PropTypes from 'prop-types';

import { ButtonWrapper } from './button.style';

const Button = ({ children }) => <ButtonWrapper>{children}</ButtonWrapper>;

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
