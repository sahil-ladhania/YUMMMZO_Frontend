import {Input} from "@/components/ui/input.jsx";
import {Button} from "@/components/ui/button.jsx";

function ChangePasswordComponent() {
    return (
        <>
            <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold">Change Password</h3>
                <Input placeholder="Current Password" type="password"/>
                <Input placeholder="New Password" type="password"/>
                <Input placeholder="Confirm New Password" type="password"/>
                <Button className="mt-4">Update Password</Button>
            </div>
        </>
    );
}

export default ChangePasswordComponent;