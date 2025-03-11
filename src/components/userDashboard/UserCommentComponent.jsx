import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { useState } from "react";
import UserReplyComponent from "./UserReplyComponent";
import { RxDropdownMenu } from "react-icons/rx";
import { Input } from "../ui/input";

function UserCommentComponent({firstName , lastName , comment , timeOfComment , avatarFallback_tempComment , userName_tempComment}) {

    // State Variables
    const [isInputFeildVisible, setIsInputFeildVisible] = useState(false);
    const [isRepliesListVisible, setIsRepliesListVisible] = useState(false);

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
    const formattedCommentTime = new Date(timeOfComment).toLocaleString('en-US' , options);

    // Handler Functions
    const handleShowInputField = () => {
        setIsInputFeildVisible(!isInputFeildVisible);
    }
    const handleShowRepliesList = () => {
        setIsRepliesListVisible(!isRepliesListVisible);
    }

  return (
    <>
        <div className="my-2 flex mt-4">   
            <div className="w-1.5/12 mr-4">
                <Avatar className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <AvatarFallback className="text-black font-semibold text-lg">
                        {
                            (avatarFallback_tempComment !== "") 
                            &&
                            avatarFallback_tempComment
                        }
                        {
                            (avatarFallback !== "") 
                            &&
                            avatarFallback
                        }
                    </AvatarFallback>
                </Avatar>  
            </div>
            <div className="text-white w-11/12">
                <h1>
                    {
                        (userName_tempComment !== "")
                        &&
                        userName_tempComment
                    }
                    {
                        (userName !== "")
                        &&
                        userName
                    }
                </h1>    
                <p className="py-4">
                    {comment}
                </p>
                <div className="flex items-center my-2">
                    <span>{formattedCommentTime}</span>
                    <div className="flex items-center ml-4">
                        <Button onClick={handleShowInputField} className="bg-black border-2 border-orange-400 hover:bg-black mr-2">Reply</Button>
                        <Button className="bg-black border-2 border-orange-400 hover:bg-black mr-2">Edit</Button>
                        <Button className="bg-black border-2 border-orange-400 hover:bg-black mr-2">Delete</Button>
                        <Button onClick={handleShowRepliesList} className="ml-4 bg-orange-400 text-black hover:bg-orange-400">
                            1 Reply
                            <RxDropdownMenu className="fill-black"/>
                        </Button>
                    </div>
                </div>
                {/* Input Field Section */}
                {
                    isInputFeildVisible 
                    &&
                    <>
                        <div className="my-2 flex">   
                            <div className="w-1.5/12 mr-4">
                                <Avatar>
                                    <AvatarImage className="rounded-full h-10" src="https://github.com/shadcn.png" />
                                    <AvatarFallback>U</AvatarFallback>
                                </Avatar>                
                            </div>
                            <Input className="ml-2 w-11/12" placeholder="Reply to comment"/>
                        </div>
                    </>
                }
                {/* Reply Section */}
                {
                    isRepliesListVisible 
                    &&
                    <>
                        <UserReplyComponent/>
                    </>
                }
            </div>            
        </div>
    </>
  )
}
export default UserCommentComponent;