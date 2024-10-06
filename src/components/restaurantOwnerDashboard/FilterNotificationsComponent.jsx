import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

function FilterNotificationsComponent() {
    return (
        <>
            <div className="flex justify-between mb-4">
                <Select className="w-1/4" placeholder="Filter by type">
                    <option value="all">All</option>
                    <option value="alerts">Alerts</option>
                    <option value="updates">Updates</option>
                    <option value="promotions">Promotions</option>
                </Select>
                <Button className="ml-2">Apply Filter</Button>
            </div>
        </>
    );
}

export default FilterNotificationsComponent;