import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { useState } from "react";
import UserReplyComponent from "./UserReplyComponent";
import { RxDropdownMenu } from "react-icons/rx";
import { Input } from "../ui/input";
import { getAllRepliesOnAComment, replyOnAComment } from "@/services/reviewsCommentsReplies/replies";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setReplies } from "@/redux/slices/commentRepliesSlice";

function UserCommentComponent({commentId , reviewId , firstName , lastName , comment , timeOfComment , avatarFallback_tempComment , userName_tempComment}) {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const {replies} = useSelector((store) => store.commentReplies);
    const {user} = useSelector((store) => store.auth);
    const userId = user ? user.userId : null;
    const firstNameForLoggedInUser = user ? user.firstName : null;
    const lastNameForLoggedInUser = user ? user.lastName : null;

    // State Variables
    const [isInputFeildVisible, setIsInputFeildVisible] = useState(false);
    const [isRepliesListVisible, setIsRepliesListVisible] = useState(false);
    const [newReplies, setNewReplies] = useState([]);
    const [commentReplies , setCommentReplies] = useState([]);
    const [replyOnComment , setReplyOnComment] = useState("");
    const [formData, setFormData] = useState({
        userId : null,
        parentId : null,
        reply : replyOnComment
    });

    // useParams
    const { restaurantId } = useParams();

    // Formating Data For Temporary Reply UI
    const firstCharAvatar_tempReply = firstNameForLoggedInUser ? firstNameForLoggedInUser.charAt(0) : "";
    const secondCharAvatar_tempReply = lastNameForLoggedInUser ? lastNameForLoggedInUser.charAt(0) : "";
    const avatarFallback_tempReply = `${firstCharAvatar_tempReply} ${secondCharAvatar_tempReply}`;
    const userName_tempReply = firstNameForLoggedInUser && lastNameForLoggedInUser ? `${firstNameForLoggedInUser} ${lastNameForLoggedInUser}` : null;

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

    const handleShowRepliesList = async() => {
        setIsRepliesListVisible(!isRepliesListVisible);
        try {
            if(!isRepliesListVisible){
                const replyList = await getAllRepliesOnAComment({restaurantId , commentId});
                console.log(replyList);
                setCommentReplies([...commentReplies , replyList]);
                dispatch(setReplies(replyList));
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleReplyChange = (e) => {
        e.preventDefault();
        let replyText = e.target.value;
        setReplyOnComment(replyText);
        setFormData({
            userId : userId,
            // parentId : 
            reply : replyOnComment
        })
    }

    const writeReplyOnComment = async(e) => {
        let key = e.key;
        if(key === "Enter" && replyOnComment.trim() !== ""){
            try {
                console.log("Making API call...");
                const response = await replyOnAComment({restaurantId , reviewId , commentId , formData});
                console.log(response);
                if(response){
                    setNewReplies([...newReplies , response]);
                }
            }
            catch (error) {
                console.log(error);
            }
            setReplyOnComment("");
        }
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
                            2 Reply
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
                                    <AvatarImage className="rounded-full h-10" src="" />
                                    <AvatarFallback>{avatarFallback_tempReply}</AvatarFallback>
                                </Avatar>                
                            </div>
                            <Input 
                                onClick={writeReplyOnComment}
                                onChange={handleReplyChange} 
                                value={replyOnComment} 
                                className="ml-2 w-11/12" 
                                placeholder="Reply to comment"
                            />
                        </div>
                    </>
                }
                {
                    (newReplies.length > 0) 
                    &&
                    newReplies.map((newReply) => (
                        <UserCommentComponent
                            key={newReply.commentId}
                            comment={newReply.comment}
                            avatarFallback_tempReply={avatarFallback_tempReply}
                            userName_tempReply={userName_tempReply}
                        />
                    ))
                }
                {/* Reply Section */}
                {
                    isRepliesListVisible 
                    &&
                    <>
                        {
                            (replies.length > 0) ?
                                replies.map((reply) => (
                                    <UserReplyComponent
                                        key={reply.commentId}
                                        replyId={reply.commentId}
                                        firstName={reply.user.firstName}
                                        lastName={reply.user.lastName}
                                        reply={reply.comment}
                                        parentIdOfReply={reply.parentId}
                                        timeOfReply={reply.createdAt}
                                    />
                                ))
                                :
                                <h1 className="text-orange-400">No Replies...</h1>
                        }
                    </>
                }
            </div>            
        </div>
    </>
  )
}
export default UserCommentComponent;