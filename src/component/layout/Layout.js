import { Link, Outlet } from "react-router-dom";
import './Layout.css';
import menu from '../../images/menu.svg';

const Layout = () => {
  const handleClickMenu = () => {
    const btnMenu = document.querySelector('.menu');
    btnMenu.classList.toggle('activate');
  }

  return (
  <>
    <header className="mobil-icon">
    <button className="menu-icon" type="button" onClick={handleClickMenu}>
      <img src={menu} alt="mobile menu" />
    </button>
    </header>
    <aside className="menu">
      <h2>Racers</h2>
      <ul>
        <li><Link to="/" >Models</Link></li>
        <li><Link to="/reservation1">Reservation 1</Link></li>
      </ul>
    </aside>
    <main className="principal">
      <Outlet />
    </main>
  </>
)}

export default Layout;
