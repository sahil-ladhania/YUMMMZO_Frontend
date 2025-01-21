import {Card} from "@/components/ui/card.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";

function EarningsFilterComponent() {
    return (
        <>
            <section className="p-6">
                <Card className="mb-6 p-6 border-none bg-neutral-900">
                    <h2 className="text-orange-400 text-2xl font-medium mb-4">Filter Earnings</h2>
                    <div className="flex space-x-4">
                        <Input type="date" placeholder="Start Date" className="w-full" />
                        <Input type="date" placeholder="End Date" className="w-full" />
                        <Button className="bg-white text-black hover:bg-white">Apply Filters</Button>
                    </div>
                </Card>
            </section>
        </>
    );
}

export default EarningsFilterComponent;