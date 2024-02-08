export interface IListProps<T> {
    items: T[];
    backedItem: (item: T) => React.ReactNode
}