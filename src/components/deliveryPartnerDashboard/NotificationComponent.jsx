
function NotificationComponent({ message }) {
    return (
        <>
            <div className="p-4 rounded-md bg-neutral-800 text-white text-sm">
                {message}
            </div>
        </>
    );
}

export default NotificationComponent;