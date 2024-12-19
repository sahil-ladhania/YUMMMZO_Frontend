import axios from "axios";

const API_URL = "https://api.cloudinary.com/v1_1/dr6w0dpsu/image/upload";

export const uploadImageToCloudnary = async({imageFile}) => {
    try{
        const formData = new FormData();
        formData.append('file' , imageFile);
        formData.append('upload_preset', 'unsigned_preset');
        const response = await axios.post(API_URL , formData);
        const cloudnaryImageLink = response.data.secure_url;
        return cloudnaryImageLink;  
    }
    catch(error){
        throw new Error("Something went wrong : " , error);
    }
}
