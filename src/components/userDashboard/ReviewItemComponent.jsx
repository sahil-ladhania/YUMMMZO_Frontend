import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RxDropdownMenu } from "react-icons/rx";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaRegCommentAlt } from "react-icons/fa";
import { useState } from "react";
import UserCommentComponent from "./UserCommentComponent";

function ReviewItemComponent({firstName , lastName , rating , review , reviewedTime}) {

    // Formating Data For Reviews
    const firstCharAvatar = firstName ? firstName.charAt(0) : "";
    const secondCharAvatar = lastName ? lastName.charAt(0) : "";
    const avatarFallback = `${firstCharAvatar} ${secondCharAvatar}`;
    const userName = firstName && lastName ? `${firstName} ${lastName}` : null;
    const options = {
        year : 'numeric',
        month : 'long',
        day : 'numeric',
        hour : '2-digit',
        minute : '2-digit',
        hour12 : true,
    }
    const formattedReviewTime = new Date(reviewedTime).toLocaleString('en-US' , options);

    // State Variables
    const [isInputFeildVisible, setIsInputFeildVisible] = useState(false);
    const [isCommentListVisible, setIsCommentListVisible] = useState(false);

    // Handler Functions
    const handleShowInputField = () => {
        setIsInputFeildVisible(!isInputFeildVisible);
    }

    const handleShowCommentList = () => {
        setIsCommentListVisible(!isCommentListVisible);
    }

    return (
        <div className="w-full border-t py-4"> {/* Full width */}
            {/* User Info */}
            <div className="flex items-center mb-4">
                <Avatar>
                    <AvatarImage src="" />
                    <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>                
                <div className="flex flex-col items-start text-white ml-4">
                    <p className="font-semibold mr-4 mb-1">{userName}</p>
                </div>
            </div>
            {/* Review Info */}
            <div className="flex items-center justify-between w-3/12 text-sm text-slate-200 mb-2">
                <span className="bg-green-800 text-white py-1 px-2 rounded-sm mr-2">{rating} ★</span>
                <span>DELIVERY</span>
                <span className="text-slate-400">{formattedReviewTime}</span>
            </div>
            {/* Review Text */}
            <p className="text-gray-300 mb-4 py-4">
                {review}
            </p>
            {/* Comment Section */}
            <div className="flex text-gray-300 text-sm">
                <Button onClick={handleShowInputField} className="bg-black border-2 border-orange-400 hover:bg-black">
                    <FaRegCommentAlt/>
                    Comment
                </Button>
                <Button onClick={handleShowCommentList} className="ml-4 bg-orange-400 text-black hover:bg-orange-400">
                    3 Comments
                    <RxDropdownMenu className="fill-black"/>
                </Button>
            </div>
            {/* Input Field Section */}
            {
                isInputFeildVisible 
                &&
                <>
                    <div className="my-2 flex">   
                        <Avatar>
                            <AvatarImage src="" />
                            <AvatarFallback className="bg-orange-200">U</AvatarFallback>
                        </Avatar>                
                        <Input className="ml-2" placeholder="Write your comment"/>
                    </div>
                </>
            }
            {/* User Comments Section */}
            {
                isCommentListVisible 
                &&
                <>
                    <UserCommentComponent/>
                    <UserCommentComponent/>
                    <UserCommentComponent/>
                </>
            }
        </div>
    );
}

export default ReviewItemComponent;