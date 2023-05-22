import "./Featured.css"

function Featured() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <img src='https://cf.bstatic.com/xdata/images/city/600x600/688844.jpg?k=02892d4252c5e4272ca29db5faf12104004f81d13ff9db724371de0c526e1e15&o=' alt=""></img>
                <div className="featuredTitle">
                    <h1>Đà Nẵng</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img src='https://cf.bstatic.com/xdata/images/city/600x600/688831.jpg?k=7b999c7babe3487598fc4dd89365db2c4778827eac8cb2a47d48505c97959a78&o=' alt=""></img>
                <div className="featuredTitle">
                    <h1>Đà Lạt</h1>
                </div>
            </div>
            <div className="featuredItem">
                <img src='https://cf.bstatic.com/xdata/images/city/600x600/688853.jpg?k=f6427c8fccdf777e4bbc75fcd245e7c66204280181bea23350388c76c57348d1&o=' alt=""></img>
                <div className="featuredTitle">
                    <h1>Hà Nội</h1>
                </div>
            </div>
            <div className="featuredItem row">
                <img src='https://cf.bstatic.com/xdata/images/city/600x600/688893.jpg?k=d32ef7ff94e5d02b90908214fb2476185b62339549a1bd7544612bdac51fda31&o=' alt=""></img>
                <div className="featuredTitle">
                    <h1>TP.Hồ Chí Minh </h1>
                </div>
            </div>
            <div className="featuredItem row">
                <img src='https://cf.bstatic.com/xdata/images/city/600x600/688956.jpg?k=fc88c6ab5434042ebe73d94991e011866b18ee486476e475a9ac596c79dce818&o=' alt=""></img>
                <div className="featuredTitle">
                    <h1>Vũng Tàu</h1>
                </div>
            </div>
            <div className="featuredItem row">
                <img src='https://cf.bstatic.com/xdata/images/xphoto/300x240/140009635.jpg?k=f2c73612dff8a1e2d4dd0ef0db3c206bf699b4d95a16f9e272a373892df422d7&o=' alt=""></img>
                <div className="featuredTitle">
                    <h1>Quảng Ninh</h1>
                </div>
            </div>
        </div>
    );
}

export default Featured;