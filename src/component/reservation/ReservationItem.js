import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { deleteBook } from '../redux/books/booksSlice';

function ReservationItem({ reservation }) {
  // const dispatch = useDispatch();
  return (
    <div className="">
      <div className="">
        <div>
          <div className="">
            {reservation.car.name}
          </div>
          <div className="">
            {reservation.car.description}
          </div>
          <div className="">
            {reservation.car.finance_fee}
          </div>
          <div className="">
            {reservation.car.option_to_purchase_fee}
          </div>
          <div className="">
            {reservation.car.apr}
          </div>
          <div className="">
            {reservation.car.duration}
          </div>
          <div>
            <h3>Booking</h3>
            <div className="">
              {reservation.city}
            </div>
            <div className="">
              {reservation.date}
            </div>
          </div>
        </div>
        <div className="">
          <button type="button" className="">
            Update Reservation
          </button>
          <button
            // onClick={() => {
            //   dispatch(deletereservation(reservation.item_id));
            // }}
            type="button"
            className="text-blue btn-action line pd-l10 pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

ReservationItem.propTypes = {
  reservation: PropTypes.instanceOf(Object).isRequired,
};

export default ReservationItem;
