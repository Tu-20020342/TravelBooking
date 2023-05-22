import "./searchItem.css";
import { Link } from 'react-router-dom';

const SearchItem = () => {
    return (
        <div className="searchItem">
            <img
                src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
                alt=""
                className="siImg"
            />
            <div className="siDesc">
                <h1 className="siTitle">Căn hộ cao cấp</h1>
                <span className="siDistance">Cách trung tâm 400m</span>
                <span className="siTaxiOp">Du lịch bền vững cấp 3</span>
                <span className="siSubtitle">
                    Căn hộ dạng Studio có Máy lạnh
                </span>
                <span className="siFeatures">
                    Toàn bộ studio • 1 phòng tắm • 21m² 1 giường đôi
                </span>
                <span className="siCancelOp"> Có thể hủy phòng (miễn phí) </span>
                <span className="siCancelOpSubtitle">
                    Bạn có thể hủy sau này, vì vậy hãy giữ giá tuyệt vời này ngay hôm nay!
                </span>
            </div>
            <div className="siDetails">
                <div className="siRating">
                    <span>Xuất sắc</span>
                    <button>8.9</button>
                </div>
                <div className="siDetailTexts">
                    <span className="siPrice">$112</span>
                    <span className="siTaxOp">Đã bao gồm thuế và phí</span>
                    <button className="siCheckButton">
                        <Link to="/hotels/:id" className="noUnderline">Xem phòng còn trống</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;