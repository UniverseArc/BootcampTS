import { IListProps } from "./List.types";

function List<T>(props: IListProps<T>) {
    return(
        <div>
            {props.items.map(props.backedItem)}
        </div>
    )
}
export default List;