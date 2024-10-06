import {Card} from "@/components/ui/card.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";

function EarningsFilterComponent() {
    return (
        <>
            <Card className="mb-6 p-4">
                <h2 className="text-xl font-semibold mb-4">Filter Earnings</h2>
                <div className="flex space-x-4">
                    <Input type="date" placeholder="Start Date" className="w-full" />
                    <Input type="date" placeholder="End Date" className="w-full" />
                    <Button>Apply Filters</Button>
                </div>
            </Card>
        </>
    );
}

export default EarningsFilterComponent;