import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { RxDropdownMenu } from "react-icons/rx";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { FaRegCommentAlt } from "react-icons/fa";
import { useState } from "react";
import UserCommentComponent from "./UserCommentComponent";
import { directCommentOnReview, getAllDirectCommentsOnAReview } from "@/services/reviewsCommentsReplies/comments";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDirectComments } from "@/redux/slices/reviewDirectCommentsSlice";

function ReviewItemComponent({firstName , lastName , rating , review , reviewedTime , reviewId}) {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const {directComments} = useSelector((store) => store.reviewDirectComments);
    const {user} = useSelector((store) => store.auth);
    const userId = user ? user.userId : null;
    const firstNameForLoggedInUser = user ? user.firstName : null;
    const lastNameForLoggedInUser = user ? user.lastName : null;

    // Formating Data For Temporary Comment UI
    const firstCharAvatar_tempComment = firstNameForLoggedInUser ? firstNameForLoggedInUser.charAt(0) : "";
    const secondCharAvatar_tempComment = lastNameForLoggedInUser ? lastNameForLoggedInUser.charAt(0) : "";
    const avatarFallback_tempComment = `${firstCharAvatar_tempComment} ${secondCharAvatar_tempComment}`;
    const userName_tempComment = firstNameForLoggedInUser && lastNameForLoggedInUser ? `${firstNameForLoggedInUser} ${lastNameForLoggedInUser}` : null;

    // useParams
    const { restaurantId } = useParams();

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
    const [commentOnReview, setCommentOnReview] = useState("");
    const [newComments, setNewComments] = useState([]);
    const [reviewComments , setReviewComments] = useState([]);
    const [formData, setFormData] = useState({
        userId : null,
        comment : commentOnReview
    });

    // Handler Functions
    const handleShowInputField = () => {
        setIsInputFeildVisible(!isInputFeildVisible);
    }

    const handleShowCommentList = async() => {
        setIsCommentListVisible(!isCommentListVisible);
        try {
            if(!isCommentListVisible){
                const commentList = await getAllDirectCommentsOnAReview({restaurantId , reviewId});
                setReviewComments([...reviewComments , commentList]);
                dispatch(setDirectComments(commentList));
            }
        }
        catch (error) {
            console.log(error);
        }
    }

    const handleCommentChange = (e) => {
        e.preventDefault();
        let commentText = e.target.value;
        setCommentOnReview(commentText);
        setFormData({
            userId : userId,
            comment : commentOnReview
        })
    }

    const writeCommentOnReview = async(e) => {
        let key = e.key;
        if(key === "Enter" && commentOnReview.trim() !== ""){
            try {
                console.log("Making API call...");
                const response = await directCommentOnReview({restaurantId , reviewId , formData});
                if(response){
                    setNewComments([...newComments , response]);
                }
            }
            catch (error) {
                console.log(error);
            }
            setCommentOnReview("");
        }
    }

    return (
        <div className="w-full border-t py-4"> {/* Full width */}
            {/* User Info */}
            <div className="flex items-center mb-4">
                <Avatar className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                    <AvatarFallback className="text-black font-semibold text-lg">
                        {avatarFallback}
                    </AvatarFallback>
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
                    {isCommentListVisible === true ? directComments.length : ""} Comments
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
                            <AvatarFallback className="bg-orange-200">{avatarFallback_tempComment}</AvatarFallback>
                        </Avatar>                
                        <Input 
                            onChange={handleCommentChange}
                            onKeyDown={writeCommentOnReview} 
                            value={commentOnReview}
                            className="ml-2" 
                            placeholder="Write your comment"
                        />
                    </div>
                </>
            }
            {
                (newComments.length > 0) 
                &&
                newComments.map((newComment) => (
                    <UserCommentComponent
                        key={newComment.commentId}
                        comment={newComment.comment}
                        avatarFallback_tempComment={avatarFallback_tempComment}
                        userName_tempComment={userName_tempComment}
                    />
                ))
            }
            {/* User Comments Section */}
            {
                isCommentListVisible 
                &&
                <>
                    {
                        (directComments.length > 0) ?
                            directComments.map((directComment) => (
                                <UserCommentComponent 
                                    key={directComment.commentId}
                                    commentId={directComment.commentId}
                                    firstName={directComment.user.firstName}
                                    lastName={directComment.user.lastName}
                                    comment={directComment.comment}
                                    timeOfComment={directComment.createdAt}
                                    reviewId={reviewId}
                                />            
                            ))
                            :
                            <h1 className="text-orange-400">No Comments...</h1>
                    }
                </>
            }
        </div>
    );
}

export default ReviewItemComponent;