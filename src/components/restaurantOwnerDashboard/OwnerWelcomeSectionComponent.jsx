import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.jsx";

function OwnerWelcomeSectionComponent() {
    return (
        <>
            <section className="p-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Welcome, Restaurant Owner</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>We are glad to have you! Let's get started with today's performance.</p>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default OwnerWelcomeSectionComponent;