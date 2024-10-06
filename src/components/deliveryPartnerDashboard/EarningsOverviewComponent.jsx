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
            <Card className="mb-6 p-4">
                <h1 className="text-xl font-semibold">Earnings Overview</h1>
                <p className="mt-2"><strong>Total Earnings:</strong> {totalEarnings}</p>
                <p><strong>Daily Earnings:</strong> {breakdown.daily}</p>
                <p><strong>Weekly Earnings:</strong> {breakdown.weekly}</p>
                <p><strong>Monthly Earnings:</strong> {breakdown.monthly}</p>
            </Card>
        </>
    );
}

export default EarningsOverviewComponent;