import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { toast } from 'react-hot-toast';
import { logOut } from '../../redux/auth/logoutSlice';
import './home.css';

function Home() {
  const { user, isUser, isLoading } = useSelector((state) => state.currentUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut()).then((result) => {
      if (result.payload) {
        toast.success(result.payload);
        window.location.reload();
      } else {
        toast.error(result.error.message);
      }
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  return (
    <div className="main">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {isUser ? (
            <div className="logged-in">
              <button type="button" onClick={handleLogOut}>
                Log Out
              </button>
              <h1>
                welcome
                {' '}
                {user.name}
              </h1>
            </div>
          ) : (
            <div className="not-user">
              <button type="button" onClick={handleLogIn}>
                Login
              </button>
              <button type="button" onClick={handleSignUp}>
                Sign Up
              </button>
              <h1>I am not logged in</h1>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
