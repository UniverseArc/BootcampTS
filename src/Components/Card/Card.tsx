import IPropsCard from "./Card.types";

const Card = ({width, height, children}: IPropsCard) => {
    return(
        <div style={{width, height, border: "1px solid black"}}>
            {children}
        </div>
    )
}

export default Card;