import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { useState } from "react";
import { Input } from "../ui/input";
import { RxDropdownMenu } from "react-icons/rx";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllRepliesOnAComment, replyOnAComment } from "@/services/reviewsCommentsReplies/replies";

function UserReplyComponent({ replyId , reviewId , firstName , lastName , reply , parentIdOfReply , timeOfReply }) {

    // useParams
    const { restaurantId } = useParams();

    // useSelector
    const { user } = useSelector((store) => store.auth);
    const userId = user ? user.userId : null;
    
    // Formating Data For Reply
    const formattedReplyTime = new Date(timeOfReply).toLocaleString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
    const firstCharAvatar = firstName ? firstName.charAt(0) : "";
    const secondCharAvatar = lastName ? lastName.charAt(0) : "";
    const avatarFallback = `${firstCharAvatar} ${secondCharAvatar}`;
    const userName = firstName && lastName ? `${firstName} ${lastName}` : null;

    // State Variables
    const [isNestedReplyVisible, setIsNestedReplyVisible] = useState(false);
    const [nestedReply, setNestedReply] = useState("");
    const [nestedReplies, setNestedReplies] = useState([]);
    const [isRepliesListVisible, setIsRepliesListVisible] = useState(false);

    // Handler Functions
    const handleShowNestedReplyField = () => {
        setIsNestedReplyVisible(!isNestedReplyVisible);
    };

    const handleNestedReplyChange = (e) => {
        setNestedReply(e.target.value);
    };

    const writeNestedReply = async (e) => {
        if (e.key === "Enter" && nestedReply.trim() !== "") {
            const formData = {
                userId,
                parentId: replyId,
                reply: nestedReply,
            };
            try {
                const response = await replyOnAComment({ restaurantId, reviewId, commentId: replyId, formData });
                if (response) {
                    setNestedReplies([...nestedReplies, response]);
                }
            } 
            catch (error) {
                console.log(error);
            }
            setNestedReply("");
        }
    };

    const handleShowRepliesList = async () => {
        setIsRepliesListVisible(!isRepliesListVisible);
        try {
            if (!isRepliesListVisible) {
                const fetchedReplies = await getAllRepliesOnAComment({ restaurantId, commentId: replyId });
                setNestedReplies(fetchedReplies);
            }
        } 
        catch (error) {
            console.log(error);
        }
    };

  return (
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
          <p className="py-4">{reply}</p>
          <div className="flex items-center my-2">
            <span>{formattedReplyTime}</span>
            <div className="flex items-center ml-4">
              <Button onClick={handleShowNestedReplyField} className="bg-black border-2 border-orange-400 hover:bg-black mr-2">
                Reply
              </Button>
              <Button className="bg-black border-2 border-orange-400 hover:bg-black mr-2">Edit</Button>
              <Button className="bg-black border-2 border-orange-400 hover:bg-black mr-2">Delete</Button>
              <Button onClick={handleShowRepliesList} className="ml-4 bg-orange-400 text-black hover:bg-orange-400">
                { isRepliesListVisible ? `${nestedReplies.length} replies` : "Replies" }
                <RxDropdownMenu className="fill-black" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Nested Reply Input Field */}
      {
        isNestedReplyVisible 
        && 
        (
            <div className="my-2 flex ml-8">
                <div className="w-1.5/12 mr-4">
                    <Avatar>
                    <AvatarImage className="rounded-full h-10" src="https://github.com/shadcn.png" />
                    <AvatarFallback>{avatarFallback}</AvatarFallback>
                    </Avatar>
                </div>
                <Input
                    onChange={handleNestedReplyChange}
                    onKeyDown={writeNestedReply}
                    value={nestedReply}
                    className="ml-2 w-11/12 text-black"
                    placeholder="Reply to this reply"
                />
            </div>
        )
      }
      {/* Render Nested Replies List */}
      {
        isRepliesListVisible 
        && 
        (nestedReplies.length > 0) 
        && 
        (
            <div className="ml-8">
            {
                nestedReplies.map((nr) => (
                    <UserReplyComponent
                        key={nr.commentId}
                        replyId={nr.commentId}
                        reviewId={reviewId}
                        firstName={nr.user.firstName}
                        lastName={nr.user.lastName}
                        reply={nr.comment}
                        parentIdOfReply={nr.parentId}
                        timeOfReply={nr.createdAt}
                    />
            ))}
            </div>
        )
      }
    </div>
  );
}

export default UserReplyComponent;