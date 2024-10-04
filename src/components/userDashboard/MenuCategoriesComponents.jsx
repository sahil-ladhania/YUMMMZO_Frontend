import { ScrollArea } from "@/components/ui/scroll-area";

function MenuCategoriesComponents() {
    return (
        <>
            <ScrollArea className="h-[400px] border rounded-md p-4">
                <ul className="space-y-4">
                    <li className="font-bold text-red-500">Durga Puja Specials (5)</li>
                    <li>Sweets (64)</li>
                    <li>Bakery (35)</li>
                    <li>Breakfast Menu (3)</li>
                    <li>Chaat & Snacks (13)</li>
                    <li>Icecream & Beverages (1)</li>
                    <li>Namkeens & Mixtures (33)</li>
                </ul>
            </ScrollArea>
        </>
    );
}

export default MenuCategoriesComponents;