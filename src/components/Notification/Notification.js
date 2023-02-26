import PropTypes from 'prop-types';
import css from './Notification.module.css';

function Notification({ message }) {
  return (
    <div>
      <p className="">{message}</p>
    </div>
  );
}

Notification.proptype = {
  message: PropTypes.string.isRequired,
};
export default Notification;
