import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";

function EditProfileComponent() {
    return (
        <>
            <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">Edit Profile</h3>
                <Input placeholder="Name" defaultValue="John Doe"/>
                <Input placeholder="Email" defaultValue="johndoe@example.com"/>
                <Button className="mt-4">Save Changes</Button>
            </div>
        </>
    );
}

export default EditProfileComponent;