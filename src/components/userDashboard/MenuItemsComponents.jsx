import MenuItemComponent from "@/components/userDashboard/MenuItemComponent.jsx";
import { useSelector } from "react-redux";

function MenuItemsComponents() {

    // useSelector 
    const { menus , selectedMenuItems , selectedMenu } = useSelector((store) => store.menuFeed);
    const { filteredMenuItemsList } = useSelector((store) => store.filteredMenuItems);

    // Handler Functions
    const selectedMenuDetails = menus.filter((menu) => (
        menu.menuId === selectedMenu
    ))

    return (
        <div className="col-span-3 bg-neutral-900 p-4 rounded-md max-h-[500px] overflow-y-auto">
            {/* Title */}
            <div className="py-4">
                <h1 className="text-lg font-semibold text-orange-400">
                    {
                        selectedMenu !== null ?
                        `${selectedMenuDetails[0].menuName}`
                        :
                        "All Menu Items"
                    }
                </h1>
            </div>
            {/* Menu Items */}
            <div className="flex flex-col gap-y-4">
                {/* Listing Down all the Menu Items for a Restaurant in the Menu Items Section */}
                {
                    selectedMenu !== null ?
                        selectedMenuItems && selectedMenuItems.length > 0 ? (
                            selectedMenuItems.map((menuItem) => (
                                <MenuItemComponent
                                    key={menuItem.itemId}
                                    image={menuItem.itemImage}
                                    name={menuItem.itemName}
                                    price={menuItem.itemPrice}
                                    description={menuItem.itemDescription}
                                    isPureVeg={menuItem.isPureVeg}
                                    isBestSeller={menuItem.isBestSeller}
                                />
                            ))
                        ) 
                        : 
                        (
                            <h1 className="text-center text-sm font-medium text-orange-400">No Menu Items !</h1>
                        )
                    :
                    filteredMenuItemsList && filteredMenuItemsList.length > 0 ? 
                            (
                                filteredMenuItemsList.map((menuItem) => (
                                    <MenuItemComponent
                                        key={menuItem.itemId}
                                        image={menuItem.itemImage}
                                        name={menuItem.itemName}
                                        price={menuItem.itemPrice}
                                        description={menuItem.itemDescription}
                                        isPureVeg={menuItem.isPureVeg}
                                        isBestSeller={menuItem.isBestSeller}
                                    />
                                ))
                            )
                            :
                            <h1 className="text-center text-sm font-medium text-orange-400">No Menu Items !</h1>
                }
            </div>
        </div>
    );
}

export default MenuItemsComponents;