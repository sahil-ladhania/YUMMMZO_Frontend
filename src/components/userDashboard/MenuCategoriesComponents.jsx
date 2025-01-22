import { ScrollArea } from "@/components/ui/scroll-area";

function MenuCategoriesComponents() {
    return (
        <>
            <ScrollArea className="h-[400px] rounded-md p-4 text-neutral-400 bg-neutral-900">
                <ul className="space-y-4">
                    <li className="font-semibold cursor-pointer text-orange-500">Durga Puja Specials (5)</li>
                    <li className="font-semibold cursor-pointer">Sweets (64)</li>
                    <li className="font-semibold cursor-pointer">Bakery (35)</li>
                    <li className="font-semibold cursor-pointer">Breakfast Menu (3)</li>
                    <li className="font-semibold cursor-pointer">Chaat & Snacks (13)</li>
                    <li className="font-semibold cursor-pointer">Icecream & Beverages (1)</li>
                    <li className="font-semibold cursor-pointer">Namkeens & Mixtures (33)</li>
                </ul>
            </ScrollArea>
        </>
    );
}

export default MenuCategoriesComponents;