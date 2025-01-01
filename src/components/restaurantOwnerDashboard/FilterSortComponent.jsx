import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

function FilterSortComponent() {
    return (
        <>
            <div className="flex items-center justify-between mb-4 border-none py-4">
                <Input placeholder="Search Orders..." className="w-1/3"/>
                <div className="bg-neutral-900 w-1/3 mx-4 rounded-lg px-4 py-2 flex justify-between">
                    <Button className="bg-black hover:bg-black">Sort by Date</Button>
                    <Button className="bg-black hover:bg-black">Sort by Status</Button>
                    <Button className="bg-black hover:bg-black">Sort by Amount</Button>
                </div>
                <Button className="bg-white text-black hover:bg-white">Apply</Button>
            </div>
        </>
    );
}

export default FilterSortComponent;