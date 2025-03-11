import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";

function UserReplyComponent() {

    // State Variables
    const [isInputFeildVisible, setIsInputFeildVisible] = useState(false);

    // Handler Functions
    const handleShowInputField = () => {
        setIsInputFeildVisible(!isInputFeildVisible);
    }

  return (
    <>
        <div className="my-2 flex mt-4">   
            <div className="w-1.5/12 mr-4">
                <Avatar>
                    <AvatarImage className="rounded-full h-10" src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>                
            </div>
            <div className="text-white w-11/12">
                <h1>Janvi Sunderka</h1>    
                <p className="py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, assumenda nihil numquam qui a est quae exercitationem reiciendis. Eligendi quasi incidunt maxime, dolore quidem alias unde eveniet asperiores ut numquam!
                </p>
                <div className="flex items-center my-2">
                    <span>Just Now</span>
                    <div className="flex items-center ml-4">
                        <Button onClick={handleShowInputField} className="bg-black border-2 border-orange-400 hover:bg-black mr-2">Reply</Button>
                        <Button className="bg-black border-2 border-orange-400 hover:bg-black mr-2">Edit</Button>
                        <Button className="bg-black border-2 border-orange-400 hover:bg-black mr-2">Delete</Button>
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