
function CuisineComponent({ src, alt }) {
    return (
        <>
            <div className="flex flex-col items-center space-y-2">
                <div className="h-40 w-40 cursor-pointer flex items-center justify-center">
                    <img
                        className="rounded-full h-full w-full object-cover p-4"
                        src={src}
                        alt={alt}
                    />
                </div>
            </div>
        </>
    );
}

export default CuisineComponent;