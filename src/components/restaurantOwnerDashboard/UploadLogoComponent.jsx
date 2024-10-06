import {Button} from "@/components/ui/button.jsx";

function UploadLogoComponent() {
    return (
        <>
            <div className="mb-4">
                <h3 className="font-semibold">Upload Logo</h3>
                <input type="file" accept="image/*" className="mb-2"/>
                <Button>Upload Logo</Button>
            </div>
        </>
    );
}

export default UploadLogoComponent;