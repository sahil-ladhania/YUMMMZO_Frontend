import {Card} from "@/components/ui/card.jsx";

function DeliveryStatComponent({ title, value }) {
    return (
        <>
            <Card className="p-4 text-center">
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-2xl">{value}</p>
            </Card>
        </>
    );
}

export default DeliveryStatComponent;