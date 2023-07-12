import './image/card3.jpg'


const Card3 = (props) => {
    return (
        <div class="card" style="width: 760px;">
                    <img src="image/card3.jpg" class="card-img-top" alt=""/>
                    <div class="card-body">
                        <h5 class="card-title">{props.postTitle}</h5>
                        <p class="card-text">{props.text}</p>
                        <a href="#" class="btn like">Нравиться</a>
                    </div>
                </div>
    )
}

export default Card3;