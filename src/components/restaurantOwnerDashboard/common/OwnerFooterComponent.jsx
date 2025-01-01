
function OwnerFooterComponent() {
    return (
        <>
            <footer className="bg-neutral-900 roboto-regular text-white h-40 flex flex-col items-center justify-center">
                <div className="flex justify-center space-x-8 text-sm">
                    <a href="/privacy" className="">Privacy Policy</a>
                    <a href="/terms" className="">Terms & Conditions</a>
                    <a href="/support" className="">Support</a>
                    <a href="/contact" className="">Contact Us</a>
                </div>
                <p className="mt-4 text-xs text-neutral-500">© 2024 YUMMMZO</p>
            </footer>
        </>
    );
}

export default OwnerFooterComponent;