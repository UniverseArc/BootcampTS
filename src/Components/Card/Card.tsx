import { FC } from "react";
import ICard, { CardVariant } from "./Card.types";

const Card: FC<ICard> = ({ width, height, children, variant, onDoNothing, onDoNothingWithParams}) => {
    const someNum = 0;
    return (
        <div style={{
            width,
            height,
            border: variant === CardVariant.primary ? "1px solid black" : "none",
            background: variant === CardVariant.primary ? "lightgray" : ""
        }} onClick={() => onDoNothingWithParams(someNum)}>
            {children}
        </div>
    )
}

export default Card;