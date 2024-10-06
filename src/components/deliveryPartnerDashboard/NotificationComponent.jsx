
function NotificationComponent({ message }) {
    return (
        <>
            <div className="p-2 border border-gray-200 rounded-md bg-gray-50">
                {message}
            </div>
        </>
    );
}

export default NotificationComponent;