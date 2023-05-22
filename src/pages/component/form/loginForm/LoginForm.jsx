import "./loginForm.css"
import { Link } from 'react-router-dom';

function LoginForm(props) {


    return (
        <div className="form-container">
            <form className="form">
                <h2 className="form-title">Đăng nhập</h2>
                <input type="text" placeholder="Tên đăng nhập" className="form-input" />
                <input type="password" placeholder="Mật khẩu" className="form-input" />
                <div className="forgot">
                    <a href="/#"><Link>Quên mật khẩu?</Link></a>
                    <a href="/#"> 
                        <Link to="/register">Chưa có tài khoản ?</Link>
                    </a>
                </div>
                <button type="submit" className="form-button">
                    <Link to="/" className="noUnderline">Đăng nhập</Link>
                </button>
            </form>
        </div>
    );
}

export default LoginForm;