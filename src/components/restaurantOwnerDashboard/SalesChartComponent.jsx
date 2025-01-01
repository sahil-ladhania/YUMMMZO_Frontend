import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GiProfit } from "react-icons/gi";

function SalesChartComponent() {
    return (
        <>
            <section className="p-6">
                <Card className="bg-neutral-900 border-none">
                    <CardHeader>
                        <CardTitle className="text-orange-400 text-2xl font-medium flex items-center">
                            Monthly Revenue
                            <GiProfit className="ml-2"/>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="h-72 bg-neutral-800 rounded-lg">
                            
                        </div>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default SalesChartComponent;