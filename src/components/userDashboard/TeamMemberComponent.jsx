
function TeamMemberComponent({ name, role }) {
    return (
        <>
            <div className="border rounded-lg p-4 shadow">
                <h3 className="font-semibold">{name}</h3>
                <p className="text-gray-600">{role}</p>
            </div>
        </>
    );
}

export default TeamMemberComponent;