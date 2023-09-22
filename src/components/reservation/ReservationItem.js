import PropTypes from 'prop-types';

const ReservationItem = ({ reservation, handleDelete }) => (
  <div className="d-flex reserve">
    <div className="w-100">
      <div className="res-detail">
        <div className="d-flex spc-btw">
          <p>Model:</p>
          <p>{reservation.car.name}</p>
        </div>
        <div className="d-flex spc-btw">
          <p>City:</p>
          <p>{reservation.city}</p>
        </div>
        <div className="d-flex spc-btw">
          <p>Date:</p>
          <p>{reservation.date}</p>
        </div>
      </div>
    </div>
    <div className="">
      <div className="d-res-image w-100">
        <img src={reservation.car.image} className="r-image" alt="img" />
      </div>
    </div>
    <div className="d-flex w-100 h-center">
      <button
        onClick={() => {
          handleDelete(reservation.id);
        }}
        type="button"
        className="btn-cancel"
      >
        Cancel
      </button>
    </div>
  </div>
);

ReservationItem.propTypes = {
  reservation: PropTypes.instanceOf(Object).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ReservationItem;
