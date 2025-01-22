
function MenuTabsComponent() {
    return (
        <>
            <div className="flex space-x-8 border-b-2 pb-4 mb-6 text-neutral-400">
                <button className="text-lg font-semibold border-b-2 border-orange-400">Order Online</button>
                <button className="text-lg">Overview</button>
                <button className="text-lg">Reviews</button>
                <button className="text-lg">Photos</button>
                <button className="text-lg">Menu</button>
            </div>
        </>
    );
}

export default MenuTabsComponent;