import MenuItemComponent from "@/components/userDashboard/MenuItemComponent.jsx";
import { useSelector } from "react-redux";
import { Badge } from "../ui/badge";

function MenuItemsComponents() {

    // useSelector 
    const { menus , selectedMenuItems , selectedMenu } = useSelector((store) => store.menuFeed);

    // Handler Functions
    const selectedMenuDetails = menus.filter((menu) => (
        menu.menuId === selectedMenu
    ))

    return (
        <div className="col-span-3 bg-neutral-900 p-4 rounded-md max-h-[500px] overflow-y-auto">
            {/* Title */}
                {
                    selectedMenuDetails[0] ?
                        <h2 className="text-2xl font-semibold mb-4 text-orange-500">{selectedMenuDetails[0].menuName}</h2>
                        :
                        <div className="h-60 ml-96 mt-48">
                            <Badge className="px-4 py-2 bg-orange-400 text-black hover:bg-orange-400">Select a Menu</Badge>
                        </div>
                }
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
                                isPureVeg={menuItem.isPureVeg}
                                isBestSeller={menuItem.isBestSeller}
                            />
                        ))
                    ) : (
                        <h1 className="text-center text-sm font-medium text-orange-400">No Menu Items !</h1>
                    )
                }
            </div>
        </div>
    );
}

export default MenuItemsComponents;