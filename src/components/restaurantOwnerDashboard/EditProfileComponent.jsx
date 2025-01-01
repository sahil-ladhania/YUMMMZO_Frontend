import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";

function EditProfileComponent() {
    return (
        <>
            <div className="mb-4 bg-neutral-900 border-none p-4 rounded-lg">
                <h3 className="font-medium text-xl text-orange-400 py-4">Edit Profile</h3>
                <Input placeholder="Update Name" className="mb-2"/>
                <Input placeholder="Update Email" className="mb-2"/>
                <Input placeholder="Update Phone" className="mb-4"/>
                <Button className="bg-white text-black hover:bg-white">Save Changes</Button>
            </div>
        </>
    );
}

export default EditProfileComponent;