import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";

function EditProfileComponent() {
    return (
        <>
            <div className="mb-4">
                <h3 className="font-semibold">Edit Profile</h3>
                <Input placeholder="Update Name" className="mb-2"/>
                <Input placeholder="Update Email" className="mb-2"/>
                <Input placeholder="Update Phone" className="mb-4"/>
                <Button>Save Changes</Button>
            </div>
        </>
    );
}

export default EditProfileComponent;