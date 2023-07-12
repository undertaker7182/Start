import Card1 from "./card1";
import Card2 from "./card2";
import Card3 from "./card3";





const Cards = (props) => {
    
    let CardsElement = props.posts.map(p => <Post postTitle={p.postTitle} text={p.text}/> )
    return (
        <div> 
        {CardsElement}
        </div>
    )
}

export default Cards;