import {Button} from "@/components/ui/button.jsx";

function UploadLogoComponent() {
    return (
        <>
            <div className="mb-4 bg-neutral-900 border-none p-4 my-10 rounded-lg">
                <h3 className="font-medium text-xl py-4 text-orange-400">Upload Logo</h3>
                <input type="file" accept="image/*" className="mb-2 text-red-800 text-sm"/>
                <Button className="bg-white text-black hover:bg-white">Upload Logo</Button>
            </div>
        </>
    );
}

export default UploadLogoComponent;