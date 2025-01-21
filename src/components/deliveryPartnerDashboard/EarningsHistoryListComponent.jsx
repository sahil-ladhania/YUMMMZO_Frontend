import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

function EarningsHistoryListComponent() {

    const earningsHistory = [
        { date: "Oct 1, 2024", order: "#1001", amount: "$50" },
        { date: "Oct 2, 2024", order: "#1002", amount: "$75" },
        { date: "Oct 3, 2024", order: "#1003", amount: "$125" },
        { date: "Oct 3, 2024", order: "#1003", amount: "$125" },
        { date: "Oct 3, 2024", order: "#1003", amount: "$125" },
        { date: "Oct 3, 2024", order: "#1003", amount: "$125" },
    ];

    return (
        <>
            <section className="p-6 rounded-md">
                <div className="overflow-x-auto">
                    <Table className="min-w-full bg-neutral-900 text-white">
                        <TableCaption className="text-neutral-400">Detailed earnings over time</TableCaption>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Date</TableHead>
                                <TableHead>Order Details</TableHead>
                                <TableHead>Amount Earned</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {earningsHistory.map((entry, index) => (
                                <TableRow key={index}>
                                    <TableCell>{entry.date}</TableCell>
                                    <TableCell>{entry.order}</TableCell>
                                    <TableCell>{entry.amount}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </section>
        </>
    );
}

export default EarningsHistoryListComponent;