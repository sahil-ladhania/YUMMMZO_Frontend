import { ScrollArea } from "@/components/ui/scroll-area";
import { setMenuItems } from "@/redux/slices/menuFeedSlice";
import { getAllMenuItems } from "@/services/menus/menuFeed";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function MenuCategoriesComponents() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { menus } = useSelector((store) => store.menuFeed);

    // Handler Function
    const openMenu = async (menuId) => {
        try {
            const menuItems = await getAllMenuItems({menuId});
            dispatch(setMenuItems(menuItems));
        } 
        catch (error) {
            console.error(error);
        }
    };    

    return (
        <>
            <ScrollArea className="h-[400px] rounded-md p-4 text-neutral-400 bg-neutral-900">
                <ul className="space-y-4">
                    {
                        menus.map((menu) => {
                            return(
                                <li onClick={() => openMenu(menu.menuId)} key={menu.menuId} className="font-semibold cursor-pointer">{menu.menuName}</li>
                            )
                        })
                    }
                </ul>
            </ScrollArea>
        </>
    );
}

export default MenuCategoriesComponents;