import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSelector } from "react-redux";

function WelcomeMessageComponent() {

    // useSelector
    const { user } = useSelector((store) => store.auth);
    const name = user ? user.firstName : null;

    return (
        <>
            <section className="p-6">
                <Card className="bg-neutral-900 border-none mb-6">
                    <CardHeader>
                        <CardTitle className="text-orange-400 text-2xl font-medium">Welcome , {name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-neutral-300 text-sm">We are glad to have you! Let's get started with today's performance.</p>
                    </CardContent>
                </Card>
            </section>
        </>
    );
}

export default WelcomeMessageComponent;