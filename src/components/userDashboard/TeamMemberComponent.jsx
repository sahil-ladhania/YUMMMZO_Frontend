import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

function TeamMemberComponent({ name, role }) {
    return (
        <>
            <div className="border rounded-lg p-4 shadow flex items-center">
                <div className="px-2">
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>SL</AvatarFallback>
                    </Avatar>
                </div>
                <div className="px-2">
                    <h3 className="font-semibold text-md">{name}</h3>
                    <p className="text-neutral-300 text-sm">{role}</p>
                </div>
            </div>
        </>
    );
}

export default TeamMemberComponent;