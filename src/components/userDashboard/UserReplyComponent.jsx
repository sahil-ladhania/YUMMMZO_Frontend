import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";
import { RxDropdownMenu } from "react-icons/rx";

function UserReplyComponent({replyId , firstName , lastName , reply , parentIdOfReply , timeOfReply}) {

    // State Variables
    const [isInputFeildVisible, setIsInputFeildVisible] = useState(false);

    // Formating Data For Replies
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
    const formattedReplyTime = new Date(timeOfReply).toLocaleString('en-US' , options);

    // Handler Functions
    const handleShowInputField = () => {
        setIsInputFeildVisible(!isInputFeildVisible);
    }

  return (
    <>
        <div className="my-2 flex flex-col mt-4">   
            <div className="flex">
            <div className="w-1.5/12 mr-4">
                <Avatar>
                    <AvatarImage className="rounded-full h-10" src="https://github.com/shadcn.png" />
                    <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>                
            </div>
            <div className="text-white w-11/12">
                <h1>{userName}</h1>    
                <p className="py-4">
                    {reply}
                </p>
                <div className="flex items-center my-2">
                    <span>{formattedReplyTime}</span>
                    <div className="flex items-center ml-4">
                        <Button onClick={handleShowInputField} className="bg-black border-2 border-orange-400 hover:bg-black mr-2">Reply</Button>
                        <Button className="bg-black border-2 border-orange-400 hover:bg-black mr-2">Edit</Button>
                        <Button className="bg-black border-2 border-orange-400 hover:bg-black mr-2">Delete</Button>
                        <Button className="ml-4 bg-orange-400 text-black hover:bg-orange-400">
                            1 Reply
                            <RxDropdownMenu className="fill-black"/>
                        </Button>
                    </div>
                </div>
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
                            <Input className="ml-2 w-11/12" placeholder="Reply to this reply"/>
                    </div>
                </>
            }
        </div>
    </>
  )
}

export default UserReplyComponent;