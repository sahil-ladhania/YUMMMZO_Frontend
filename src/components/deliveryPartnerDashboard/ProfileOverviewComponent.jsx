import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.jsx";

function ProfileOverviewComponent() {
    return (
        <>
            <div className="flex flex-col items-center p-6 space-y-4">
                <Avatar className="h-20 w-20">
                    <AvatarImage src="/profile-picture.png" alt="Profile Picture"/>
                    <AvatarFallback>DP</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-semibold">John Doe</h2>
                <p>Contact: johndoe@example.com</p>
            </div>
        </>
    );
}

export default ProfileOverviewComponent;