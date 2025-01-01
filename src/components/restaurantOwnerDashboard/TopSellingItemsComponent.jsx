import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MdSell } from "react-icons/md";

function TopSellingItemsComponent() {
    return (
        <>
            <section className="p-6">
                <Card className="bg-neutral-900 border-none">
                    <CardHeader>
                        <CardTitle className="text-orange-400 text-2xl font-medium flex items-center">
                            Top-Selling Items
                            <MdSell className="ml-2"/>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul>
                            <li className="border-b text-neutral-300 text-sm font-medium py-4">1. Pizza - 150 orders</li>
                            <li className="border-b text-neutral-300 text-sm font-medium py-4">2. Burger - 120 orders</li>
                            <li className="border-b text-neutral-300 text-sm font-medium py-4">3. Pasta - 90 orders</li>
                        </ul>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default TopSellingItemsComponent;