
function MenuItemComponent({ image, name, price }) {
    return (
        <>
            <div className="flex items-center space-x-4 border p-4 rounded-lg">
                <img className="w-20 h-20 object-cover rounded-md" src={image} alt={name}/>
                <div>
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-gray-500">{price}</p>
                </div>
            </div>
        </>
    );
}

export default MenuItemComponent;