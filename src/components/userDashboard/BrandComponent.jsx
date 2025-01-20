
function BrandComponent({image , name}) {
    return (
        <>
            <div className="flex flex-col items-center h-48 w-48 cursor-pointer">
                <img
                    className="rounded-full h-32 w-32 object-cover"
                    src={image}
                    alt="brand-image"
                />
                <p className="text-gray-400 text-lg roboto-regular mt-3 text-center">{name}</p>
            </div>
        </>
    );
}

export default BrandComponent;