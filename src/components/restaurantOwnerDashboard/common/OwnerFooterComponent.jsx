
function OwnerFooterComponent() {
    return (
        <>
            <footer className="bg-gray-100 py-6 mt-12">
                <div className="container mx-auto text-center">
                    <div className="flex justify-center space-x-8 text-sm">
                        <a href="/privacy" className="hover:underline">Privacy Policy</a>
                        <a href="/terms" className="hover:underline">Terms & Conditions</a>
                        <a href="/support" className="hover:underline">Support</a>
                        <a href="/contact" className="hover:underline">Contact Us</a>
                    </div>
                    <p className="mt-4 text-xs text-gray-500">© 2024 YUMMMZO. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
}

export default OwnerFooterComponent;