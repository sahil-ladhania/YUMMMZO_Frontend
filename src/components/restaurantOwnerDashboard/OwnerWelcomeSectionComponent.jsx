import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";

function OwnerWelcomeSectionComponent() {
    return (
        <>
            <section className="p-6">
                <Card className="bg-neutral-900 border-none">
                    <CardHeader>
                        <CardTitle className="text-orange-400 text-2xl font-medium">Welcome, Restaurant Owner</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-neutral-300 text-sm">We are glad to have you! Let's get started with today's performance.</p>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default OwnerWelcomeSectionComponent;