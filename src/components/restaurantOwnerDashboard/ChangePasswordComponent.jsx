import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";

function ChangePasswordComponent() {
    return (
        <>
            <div className="mb-4 bg-neutral-900 border-none p-4 rounded-lg">
                <h3 className="font-medium text-xl text-orange-400 py-4 ">Change Password</h3>
                <Input type="password" placeholder="Current Password" className="mb-2"/>
                <Input type="password" placeholder="New Password" className="mb-2"/>
                <Input type="password" placeholder="Confirm New Password" className="mb-4"/>
                <Button className="bg-white text-black hover:bg-white">Change Password</Button>
            </div>
        </>
    );
}

export default ChangePasswordComponent;