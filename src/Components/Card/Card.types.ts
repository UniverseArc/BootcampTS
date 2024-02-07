export default interface IPropsCard {
    width?: string;
    height?: string;
    children?: React.ReactElement | React.ReactNode; 
    // React.ReactNode - опасно в некотором роде потому что универсальный тип. 
    // Позволяет взвращать/принимать и компоненты и массивы и null и че угодно.
}