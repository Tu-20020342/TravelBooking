import './Navbar.css'
import { Link } from 'react-router-dom';

function Navbar({ onRegisterClick, onLoginClick }) {
    return (
        <div className='navbar'>
            <div className="navContainer">
                <span className="logo">
                    <Link to="/">Booking.vn</Link>
                </span>
                <div className="navItems">
                    <button className="buttonNav" onClick={onRegisterClick}>
                        <Link to="/register">Đăng ký</Link>
                    </button>
                    <button className="buttonNav" onClick={onLoginClick}>
                        <Link to="/login">Đăng nhập</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;