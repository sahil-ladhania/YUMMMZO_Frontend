import { setActiveMenuTab } from "@/redux/slices/menuTabsSlice";
import { useDispatch } from "react-redux";

function MenuTabsComponent() {

    // useDispatch
    const dispatch = useDispatch();

    // Handler Functions 
    const handleActiveMenuTab = (e) => {
        const name = e.currentTarget.name;
        dispatch(setActiveMenuTab(name));
    }

    return (
        <>
            <div className="flex space-x-8 border-b-2 pb-4 mb-6 text-neutral-400">
                <button onClick={handleActiveMenuTab} name="order-online" className="text-lg font-semibold border-b-2 border-orange-400">Order Online</button>
                <button onClick={handleActiveMenuTab} name="overview" className="text-lg">Overview</button>
                <button onClick={handleActiveMenuTab} name="reviews" className="text-lg">Reviews</button>
                <button onClick={handleActiveMenuTab} name="photos" className="text-lg">Photos</button>
                <button onClick={handleActiveMenuTab} name="menu" className="text-lg">Menu</button>
            </div>
        </>
    );
}

export default MenuTabsComponent;