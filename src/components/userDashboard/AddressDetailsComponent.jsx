
function AddressDetailsComponent() {
    return (
        <>
            <div className="bg-white p-4 rounded-lg shadow mb-4 relative overflow-hidden">
                {/* Background Map Image */}
                <div className="absolute inset-0 bg-cover bg-center opacity-20" 
                     style={{ backgroundImage: 'url(https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/11/truco-secreto-google-maps-casi-nadie-conoce-puede-ayudarte-planificar-viajes-como-experto-3237494.jpg?tf=3840x)' }}>
                </div>

                {/* Content */}
                <div className="relative z-10">
                    <h3 className="font-semibold text-black roboto-regular">From Address</h3>
                    <p className="text-black text-sm roboto-regular">User Name</p>
                    <p className="text-black text-sm roboto-regular">123 Street, City, State</p>
                    <p className="text-black text-sm roboto-regular">10:30 AM</p>
                    <h3 className="font-semibold mt-4 text-black roboto-regular">To Address</h3>
                    <p className="text-black text-sm roboto-regular">Restaurant Name</p>
                    <p className="text-black text-sm roboto-regular">456 Avenue, City, State</p>
                </div>
            </div>
        </>
    );
}

export default AddressDetailsComponent;