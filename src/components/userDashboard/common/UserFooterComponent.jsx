
function UserFooterComponent() {
    return (
        <>
            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-5 bg-gray-100">
                {/* Logo Section */}
                <div className="mb-3">
                    <img
                        className="h-10 w-auto"
                        src="https://imgs.search.brave.com/piWYbj7pMLfGOzeIkvVWkRzzc9JrZMCa1RckrXDbMgc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dC5icmFuZGZldGNo/LmlvL2lkRXFsOG5F/V24vaWROVkRacWRo/aC5zdmc_dXBkYXRl/ZD0xNjY3NjU1NjY4/NDAy"
                        alt="App Logo"
                    />
                </div>
                {/* Copyright Section */}
                <div className="mb-3">
                    <p>© 2024 YUMMMZO Limited</p>
                </div>
                {/* Social Links */}
                <div className="flex space-x-4">
                    Social Icons
                </div>
            </div>
        </>
    );
}

export default UserFooterComponent;