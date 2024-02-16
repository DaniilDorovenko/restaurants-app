import { Button } from "../button/component";

export const Tab = ({ name, onClick, disabled  }) => {
    return (<Button onClick={onClick} disabled={disabled}>{name}</Button>)
};
