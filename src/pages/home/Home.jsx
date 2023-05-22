import Header from '../component/header/Header';
import Navbar from '../component/navbar/Navbar';
import Featured from '../component/featured/Featured.jsx';
import PropertyList from '../component/propertyList/PropertyList';
import FeaturedProperties from '../component/featuredProperties/FeaturedProperties';
import Footer from '../component/footer/Footer';
import MailList from '../component/mailList/MailList';
import LoginForm from '../component/form/loginForm/LoginForm';
import RegisterForm from '../component/form/registerForm/RegisterForm';
import { useState } from 'react';
import './Home.css'


function Home() {

    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleRegisterClick = () => {
        setShowRegisterForm(true);
        setShowLoginForm(false);
    };

    const handleLoginClick = () => {
        setShowRegisterForm(false);
        setShowLoginForm(true);
    };

    return (
        <div>
            <Navbar
                onRegisterClick={handleRegisterClick}
                onLoginClick={handleLoginClick}
            />
            <Header />
            <div className="homeContainer">
                <h1 className="homeTitle">Khám phá Việt Nam</h1>
                <Featured />
                <h1 className="homeTitle">Tìm theo loại chỗ nghỉ</h1>
                <PropertyList />
                <h1 className="homeTitle">Các điểm đến được yêu thích</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />

            </div>

            {showRegisterForm && <RegisterForm />} 
            {showLoginForm && <LoginForm />}
        </div>
    );
}

export default Home;