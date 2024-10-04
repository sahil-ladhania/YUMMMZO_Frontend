import MenuItemComponent from "@/components/userDashboard/MenuItemComponent.jsx";

function MenuItemsComponents() {
    return (
        <>
            <div className="col-span-3">
                <h2 className="text-2xl font-semibold mb-4">Durga Puja Specials</h2>
                <div className="grid grid-cols-2 gap-6">
                    <MenuItemComponent
                        image="https://b.zmtcdn.com/data/dish_photos/3c5/c465f7ab3cce8ba9c625510797ce83c5.jpeg?fit=around%7C130:130&crop=130:130;*,*"
                        name="Falahari Aloo Chips Tub (200GM)"
                        price="₹143"
                    />
                    <MenuItemComponent
                        image="https://b.zmtcdn.com/data/dish_photos/2af/60eb8b09322a135822f0a3b0c90102af.jpeg?fit=around%7C130:130&crop=130:130;*,*"
                        name="Falahari Makhana Lachha Mixture (200gm)"
                        price="₹180"
                    />
                    <MenuItemComponent
                        image="https://b.zmtcdn.com/data/dish_photos/9b5/eb7a64bd18ead3ff2c57d359172af9b5.jpeg?fit=around%7C130:130&crop=130:130;*,*"
                        name="Falahari Sabudana Lachha (200GM)"
                        price="₹160"
                    />
                </div>
            </div>
        </>
    );
}

export default MenuItemsComponents;