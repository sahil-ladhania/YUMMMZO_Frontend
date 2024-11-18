import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";

function Error() {
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-100">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Oops! Something went wrong.</h1>
                    <p className="text-gray-600 mb-4">We're sorry, but an error occurred while processing your
                        request.</p>
                    <Link className="text-blue-600 hover:underline" to="/user/">
                        <Button className="mt-2">Reload Page</Button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Error;