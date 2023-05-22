import { faBed, faCalendarDay, faCar, faHotel, faPerson, faPlane, faSearch, faTaxi } from '@fortawesome/free-solid-svg-icons';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from "react-router-dom";

function Header({type}) {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false)
    const [option, setOption] = useState(
        {
            adult: 1,
            children: 0,
            room: 1,
        }
    );

    const handleOption = () => {
        setOption({
            adult: counter.nguoiLon || 0,
            children: counter.treEm || 0,
            room: counter.phong || 0,
        })
    }

    const [counter, setCounter] = useState({})

    const handleCouter = (options, operation) => {
        setCounter((prevCounter => {
            const currentCounter = prevCounter[options] || 0
            let newCounter

            if (operation === 'increase') {
                newCounter = currentCounter + 1
            } else if (operation === 'decrease') {
                newCounter = currentCounter > 0 ? currentCounter - 1 : 0
            } else {
                newCounter = currentCounter
            }

            return { ...prevCounter, [options]: newCounter }
        }))

        handleOption()
    }

    const navigate = useNavigate();
    const handleSearch = () => {
        navigate("/hotels", { state: { destination, date, option } });
      };

    return (
        <div className='header'>
            <div className="headerContainer">

                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faHotel} />
                        <span>Lưu trú</span>
                    </div>
                    <div className="headerListItem ">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Chuyến bay</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faCar} />
                        <span>Thuê xe</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBed} />
                        <span>Địa điểm tham quan</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTaxi} />
                        <span>Taxi sân bay</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faPlane} />
                        <span>Chuyến bay + khách sạn</span>
                    </div>
                </div>
                {type !== "list" &&
                    <>
                        <h1 className="headerTitle">Đăng nhập để tiết kiệm</h1>
                        <p className="headerDesc">Tiết kiệm ít nhất 10% tại các chỗ nghỉ có tham gia. Chỉ cần tìm nhãn Genius xanh dương.
                        </p>
                        <button className="headerButton">Đăng nhập hoặc đăng ký</button>
                        <div className="headerSearch">
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faSearch} className='headerIcon' />
                                <input
                                    type="text"
                                    placeholder='Bạn muốn đi đâu?'
                                    className="headerSearchInput"
                                    onChange={e => setDestination(e.target.value)}
                                />
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faCalendarDay} className='headerIcon' />
                                <span className="headerSearchText"
                                    onClick={() => setOpenDate(!openDate)}
                                >
                                    {`${format(date[0].startDate, 'dd/MM/yyyy')}
                            -
                            ${format(date[0].endDate, 'dd/MM/yyyy')}`}
                                </span>
                                {openDate && <DateRange
                                    editableDateInputs={true}
                                    onChange={item => setDate([item.selection])}
                                    moveRangeOnFirstSelection={false}
                                    ranges={date}
                                    className="date"
                                />}
                            </div>
                            <div className="headerSearchItem">
                                <FontAwesomeIcon icon={faPerson} className='headerIcon' />
                                <span className="headerSearchText"
                                    onClick={() => setOpenOptions(!openOptions)}
                                >
                                    {`${option.adult} người lớn,
                            ${option.children} trẻ con,
                            ${option.room} phòng`}
                                </span>
                                {
                                    openOptions &&
                                    <div className="options">
                                        <div className="optionsItem">
                                            <span className="optionsText">Người lớn</span>
                                            <div className="optionsCounter">
                                                <button className="optionsButtonCounter"
                                                    onClick={() => handleCouter('nguoiLon', 'increase')}
                                                >+</button>
                                                <span className="optionsCounterNumber">
                                                    {counter.nguoiLon || 0}
                                                </span>
                                                <button className="optionsButtonCounter"
                                                    onClick={() => handleCouter('nguoiLon', 'decrease')}>-</button>
                                            </div>
                                        </div>
                                        <div className="optionsItem">
                                            <span className="optionsText">Trẻ con</span>
                                            <div className="optionsCounter">
                                                <button className="optionsButtonCounter"
                                                    onClick={() => handleCouter('treEm', 'increase')}>+</button>
                                                <span className="optionsCounterNumber">{counter.treEm || 0}</span>
                                                <button className="optionsButtonCounter"
                                                    onClick={() => handleCouter('treEm', 'decrease')}>-</button>
                                            </div>
                                        </div>
                                        <div className="optionsItem">
                                            <span className="optionsText">Số phòng</span>
                                            <div className="optionsCounter">
                                                <button className="optionsButtonCounter"
                                                    onClick={() => handleCouter('phong', 'increase')}>+</button>
                                                <span className="optionsCounterNumber">{counter.phong || 0}</span>
                                                <button className="optionsButtonCounter"
                                                    onClick={() => handleCouter('phong', 'decrease')}>-</button>
                                            </div>
                                        </div>
                                    </div>
                                }
                            </div>
                            <div className="headerSearchItem">
                                <button className="headerButton"
                                    onClick={handleSearch}
                                >Tìm kiếm</button>
                            </div>
                        </div>
                    </>}
            </div>
        </div>
    );
}

export default Header;