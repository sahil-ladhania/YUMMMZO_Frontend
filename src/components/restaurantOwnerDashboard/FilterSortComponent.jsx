import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function FilterSortComponent() {
    return (
        <>
            <div className="flex items-center justify-between mb-4">
                <Input placeholder="Search Orders..." className="w-1/3"/>
                <Select className="mx-2 w-1/3">
                    <option>Sort by Date</option>
                    <option>Sort by Status</option>
                    <option>Sort by Amount</option>
                </Select>
                <Button>Apply</Button>
            </div>
        </>
    );
}

export default FilterSortComponent;