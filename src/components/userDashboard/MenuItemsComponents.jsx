import MenuItemComponent from "@/components/userDashboard/MenuItemComponent.jsx";
import { useSelector } from "react-redux";

function MenuItemsComponents() {

    // useSelector 
    const { selectedMenuItems } = useSelector((store) => store.menuFeed);

    return (
        <div className="col-span-3 bg-neutral-900 p-4 rounded-md max-h-[500px] overflow-y-auto">
            {/* Title */}
            <h2 className="text-2xl font-semibold mb-4 text-orange-500">
                Durga Puja Specials
            </h2>

            {/* Menu Items */}
            <div className="flex flex-col gap-y-4">
                {
                    selectedMenuItems && selectedMenuItems.length > 0 ? (
                        selectedMenuItems.map((menuItem) => (
                            <MenuItemComponent
                                key={menuItem.itemId}
                                image={menuItem.itemImage}
                                name={menuItem.itemName}
                                price={menuItem.itemPrice}
                                description={menuItem.itemDescription}
                            />
                        ))
                    ) : (
                        <h1 className="text-white">No Menu Items</h1>
                    )
                }
            </div>
        </div>
    );
}

export default MenuItemsComponents;