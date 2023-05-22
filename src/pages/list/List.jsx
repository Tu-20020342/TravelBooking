import "./list.css";
import Navbar from "../component/navbar/Navbar";
import Header from "../component/header/Header";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../component/searchItem/SearchItem";

const List = () => {
    const location = useLocation();
    const [destination, setDestination] = useState(location.state.destination);
    console.log(setDestination);
    console.log(destination);
    const [date, setDate] = useState(location.state.date);
    const [openDate, setOpenDate] = useState(false);
    const [option, setOptions] = useState(location.state.option);
    console.log(setOptions);

    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="listContainer">
                <div className="listWrapper">
                    <div className="listSearch">
                        <h1 className="lsTitle">Tìm kiếm</h1>
                        <div className="lsItem">
                            <label>Điểm đến</label>
                            <input placeholder={destination} type="text" />
                        </div>
                        <div className="lsItem">
                            <label>Ngày nhận phòng</label>
                            <span onClick={() => setOpenDate(!openDate)}>{`${format(
                                date[0].startDate,
                                "MM/dd/yyyy"
                            )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                            {openDate && (
                                <DateRange
                                    onChange={(item) => setDate([item.selection])}
                                    minDate={new Date()}
                                    ranges={date}
                                />
                            )}
                        </div>
                        <div className="lsItem">
                            <label>Tùy chọn</label>
                            <div className="lsOptions">
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Giá tối thiểu mỗi đêm
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">
                                        Giá tối đa mỗi đêm
                                    </span>
                                    <input type="number" className="lsOptionInput" />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Người lớn</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={option.adult}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Trẻ em</span>
                                    <input
                                        type="number"
                                        min={0}
                                        className="lsOptionInput"
                                        placeholder={option.children}
                                    />
                                </div>
                                <div className="lsOptionItem">
                                    <span className="lsOptionText">Số phòng</span>
                                    <input
                                        type="number"
                                        min={1}
                                        className="lsOptionInput"
                                        placeholder={option.room}
                                    />
                                </div>
                            </div>
                        </div>
                        <button>Xong</button>
                    </div>
                    <div className="listResult">
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                        <SearchItem />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;