
function MenuTabsComponent() {
    return (
        <>
            <div className="flex space-x-8 border-b-2 pb-4 mb-6">
                <button className="text-lg font-semibold border-b-2 border-red-500">Order Online</button>
                <button className="text-lg text-gray-500">Overview</button>
                <button className="text-lg text-gray-500">Reviews</button>
                <button className="text-lg text-gray-500">Photos</button>
                <button className="text-lg text-gray-500">Menu</button>
            </div>
        </>
    );
}

export default MenuTabsComponent;