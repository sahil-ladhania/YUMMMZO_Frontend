import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function FilterNotificationsComponent() {
    return (
        <>
            <div className="flex justify-between mb-4 bg-neutral-900 py-4 rounded-lg">
                <div className="px-4 flex justify-between w-2/4">
                    <Button className="bg-black hover:bg-black">All</Button>
                    <Button className="bg-black hover:bg-black">Alerts</Button>
                    <Button className="bg-black hover:bg-black">Updates</Button>
                    <Button className="bg-black hover:bg-black">Promotions</Button>
                </div>
                <Button className="mx-4 bg-white text-black hover:bg-white">Apply Filter</Button>
            </div>
        </>
    );
}

export default FilterNotificationsComponent;