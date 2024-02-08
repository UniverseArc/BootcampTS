export interface ITodosItem {
    userId: number,
    id: number,
    title: string,
    completed: false,
}

export interface ITodosListProps {
    todo: ITodosItem[]
}

export interface ITodosItemProps {
    todo: ITodosItem;
}