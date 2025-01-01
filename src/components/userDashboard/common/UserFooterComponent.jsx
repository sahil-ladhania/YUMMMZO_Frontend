import { CiInstagram, CiFacebook, CiYoutube, CiTwitter } from 'react-icons/ci';

function UserFooterComponent() {
    return (
        <>
            {/* Footer */}
            <div className="flex items-center justify-between px-5 py-5 bg-neutral-900 h-40">
                {/* Logo Section */}
                <div className="mb-3">
                    <h1 className="text-xl font-bold text-neutral-400">YUMMMZO</h1>
                </div>
                {/* Copyright Section */}
                <div className="mb-3">
                    <p className='text-sm text-neutral-400'>© 2025 YUMMMZO Pvt. Ltd</p>
                </div>
                {/* Social Links */}
                <div className="flex space-x-4">
                    <CiInstagram className="text-2xl fill-neutral-400  cursor-pointer" />
                    <CiFacebook className="text-2xl fill-neutral-400  cursor-pointer" />
                    <CiYoutube className="text-2xl fill-neutral-400  cursor-pointer" />
                    <CiTwitter className="text-2xl fill-neutral-400  cursor-pointer" />
                </div>
            </div>
        </>
    );
}

export default UserFooterComponent;