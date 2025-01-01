import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MdSell } from "react-icons/md";

function SalesOverviewComponent() {
    return (
        <>
            <Card className="p-6 mb-4 bg-neutral-900 border-none">
                <CardHeader>
                    <CardTitle className="text-orange-400 text-2xl font-medium flex items-center">
                        Sales Overview
                        <MdSell className="ml-2"/>
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    {/* Placeholder for sales overview chart */}
                    <div className="h-48 bg-neutral-800 rounded-lg">

                    </div>
                </CardContent>
            </Card>
        </>
    );
}

export default SalesOverviewComponent;