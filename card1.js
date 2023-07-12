import './image/card1.jpg';



const Card1 = (props) => {
    return (
        <div className="row g-5">
            <div className="col-md-8">
                <div className="card" style="width: 760px;">
                    <img src="image/card1.jpg" className="card-img-top" alt=""/>
                        <div className="card-body">
                            <h5 className="card-title">{props.postTitle}</h5>
                            <p className="card-text">{props.text}</p>
                            <a href="#" className="btn like">Нравиться</a>
                        </div>
                </div>
            </div>
        </div>
    )
}


export default Card1;