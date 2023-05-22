import "./registerForm.css"
import { Link } from "react-router-dom";

function RegisterForm() {

    return (
        <div className="form-container">
            <form className="form">
                <h2 className="form-title">Đăng Ký</h2>
                <input type="text" placeholder="Tên đăng nhập" className="form-input" />
                <input type="password" placeholder="Mật khẩu" className="form-input" />
                <input type="password" placeholder="Nhập lại mật khẩu" className="form-input" />
                <button type="submit" className="form-button">
                    <Link to="/" className="noUnderline">Đăng Ký</Link>
                </button>
            </form>
        </div>
    );
}

export default RegisterForm;