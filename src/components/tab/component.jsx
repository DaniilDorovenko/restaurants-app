import { Button } from "../button/component";

export const Tab = ({ name, onClick }) => {
    return (<Button onClick={onClick}>{name}</Button>)
};
