import './text.css'
function Text(props) {
    return (
        <>
            <div className='container'>
                <div style={{ flexDirection:props.dir}} className="content">
                    <div className="text">
                        <h4>{props.h4}</h4>
                        <ul>
                            <li><span></span> <p>
                                {props.p1}</p></li>
                            <li><span></span> <p>
                                {props.p2}</p></li>
                            <li><span></span> <p>
                                {props.p3}</p></li>
                        </ul>
                        <button>get persiption  </button>
                    </div>
                    <div className="img">
                        <img src={props.img} alt="" />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Text;