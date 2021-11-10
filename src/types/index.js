import PropTypes from 'prop-types';

const { shape, number, string, oneOf } = PropTypes;

export const userType = shape({
  id: number,
  firstName: string.isRequired,
  lastName: string.isRequired,
  company: string,
  role: oneOf(['user', 'author']),
  address: shape({
    id: number.isRequired,
    street: string.isRequired,
    street2: string,
    city: string.isRequired,
    state: string.isRequired,
    postal: number.isRequired
  })
});
