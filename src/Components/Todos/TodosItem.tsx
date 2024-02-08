import { FC } from "react";
import { ITodosItemProps } from "./TodosItem.types";

const TodosItem: FC<ITodosItemProps> = ({ todo }) => {
    return (
        <div>
            <input type="checkbox" checked={todo.completed} /> {todo.id}. {todo.title}
        </div>
    )
}

export default TodosItem;