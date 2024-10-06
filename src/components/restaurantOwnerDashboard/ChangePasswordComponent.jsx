import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";

function ChangePasswordComponent() {
    return (
        <>
            <div className="mb-4">
                <h3 className="font-semibold">Change Password</h3>
                <Input type="password" placeholder="Current Password" className="mb-2"/>
                <Input type="password" placeholder="New Password" className="mb-2"/>
                <Input type="password" placeholder="Confirm New Password" className="mb-4"/>
                <Button>Change Password</Button>
            </div>
        </>
    );
}

export default ChangePasswordComponent;