
function CuisineComponent() {
    return (
        <>
            <div className="flex h-40 w-28 flex-col items-center justify-evenly mx-2 cursor-pointer">
                <img
                    className="rounded-full h-24"
                    src="https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png"
                    alt="cuisine-image"/>
                <p className="text-gray-400 tracking-wide roboto-regular">Pizzas</p>
            </div>
        </>
    );
}

export default CuisineComponent;