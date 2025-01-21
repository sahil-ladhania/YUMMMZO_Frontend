import {Card} from "@/components/ui/card.jsx";

function EarningsOverviewComponent() {
    const totalEarnings = "$2,500";
    const breakdown = {
        daily: "$100",
        weekly: "$700",
        monthly: "$2,500",
    };
    return (
        <>
            <section className="p-6">
                <Card className="mb-6 p-6 border-none bg-neutral-900">
                    <h1 className="text-orange-400 text-2xl font-medium mb-4">Earnings Overview</h1>
                    <div className="text-white text-sm mt-4">
                        <p className="mt-2"><strong>Total Earnings:</strong> {totalEarnings}</p>
                        <p><strong>Daily Earnings:</strong> {breakdown.daily}</p>
                        <p><strong>Weekly Earnings:</strong> {breakdown.weekly}</p>
                        <p><strong>Monthly Earnings:</strong> {breakdown.monthly}</p>
                    </div>
                </Card>
            </section>
        </>
    );
}

export default EarningsOverviewComponent;