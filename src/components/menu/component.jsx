export const Menu = ({ menu }) => {
    return (
        <div>
            <h3>Menu</h3>
            <ul>
                {menu.map((item) => (
                    <li key={item.id}>
                        {item.name}
                        {item.price}
                        {item.ingredients}
                    </li>
                ))}
            </ul>
        </div>
    )
};