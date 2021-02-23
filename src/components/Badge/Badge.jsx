import PropTypes from 'prop-types';
import { Container as Badge } from './styled';

Badge.propTypes = {
  size: PropTypes.string,
  placement: PropTypes.oneOf([
    'top',
    'topLeft',
    'topRight',
    'bottom',
    'bottomLeft',
    'bottomRight',
    'left',
    'leftTop',
    'leftBottom',
    'right',
    'rightTop',
    'rightBottom',
  ]),
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.any,
};

Badge.defaultProps = {
  size: '1.5rem',
  color: '#9552D4',
  placement: 'topRight',
};

export default Badge;
