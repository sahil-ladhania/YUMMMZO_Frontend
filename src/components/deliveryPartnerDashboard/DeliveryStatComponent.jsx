import {Card} from "@/components/ui/card.jsx";

function DeliveryStatComponent({ title, value }) {
    return (
        <>
            <Card className="p-4 text-center bg-neutral-800 border-none text-white">
                <h2 className="text-md font-semibold">{title}</h2>
                <p className="text-md font-semibold">{value}</p>
            </Card>
        </>
    );
}

export default DeliveryStatComponent;