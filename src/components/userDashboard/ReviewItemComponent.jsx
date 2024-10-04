function ReviewItemComponent() {
    return (
        <div className="w-full border-t py-4"> {/* Full width */}
            {/* User Info */}
            <div className="flex items-center mb-2">
                <img
                    src="https://via.placeholder.com/40"
                    alt="user-profile"
                    className="rounded-full w-10 h-10 mr-3"
                />
                <div>
                    <p className="font-semibold">A. K. Raja</p>
                    <p className="text-gray-500 text-sm">0 reviews • 2 Followers</p>
                </div>
                <button className="ml-auto border border-red-500 text-red-500 py-1 px-4 rounded-md">Follow</button>
            </div>

            {/* Review Info */}
            <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="bg-red-500 text-white py-1 px-2 rounded-sm mr-2">1★</span>
                <span>DELIVERY</span>
                <span className="ml-auto">yesterday</span>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 mb-4">
                4pc Bread pakoda was replaced with 4pc small sized paneer pakoda though with consent but it was dry,
                cold and stinking.
            </p>

            {/* Actions (Helpful, Comment, Share) */}
            <div className="flex text-gray-500 text-sm">
                <button className="mr-4">Helpful</button>
                <button className="mr-4">Comment</button>
                <button>Share</button>
            </div>
        </div>
    );
}

export default ReviewItemComponent;