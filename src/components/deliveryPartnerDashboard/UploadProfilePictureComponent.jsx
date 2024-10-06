import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";

function UploadProfilePictureComponent() {
    return (
        <>
            <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">Upload Profile Picture</h3>
                <Input type="file"/>
                <Button className="mt-4">Upload</Button>
            </div>
        </>
    );
}

export default UploadProfilePictureComponent;