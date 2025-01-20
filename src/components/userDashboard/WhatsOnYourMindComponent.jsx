import CuisineComponent from "@/components/userDashboard/CuisineComponent.jsx";
import { setCuisines } from "@/redux/slices/cuisinesFeedSlice";
import { getAllCuisines } from "@/services/cuisines/cuisineService";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function WhatsOnYourMindComponent() {

    // useSelector and useDispatch
    const dispatch = useDispatch();
    const { cuisines } = useSelector((store) => store.cuisine);
    const {user} = useSelector((store) =>  store.auth);
    const firstName = user ? user.firstName : null;

    // useEffect
    useEffect(() => {
        let isMounted = true;
        const getCuisines = async() => {
            try{
                const cuisinesList = await getAllCuisines();
                console.log(cuisinesList);
                if(isMounted){
                    dispatch(setCuisines(cuisinesList));
                }
            }
            catch(error){
                console.log("Error Getting Cuisines : " , error.message);
            }
        }
        getCuisines();
        return () => {
            isMounted = false;
        }
    }, [])

    return (
        <>
            <div className="pt-10 mb-20">
                {/* Whats on your mind Section  */}
                {
                    firstName ?
                    <h1 className="text-4xl text-white tracking-wider roboto-regular mb-6">Whats on your mind, {firstName} ?</h1>    
                    :
                    <h1 className="text-4xl text-white tracking-wider roboto-regular mb-6">Whats on your mind ?</h1>    
                }
                {/* Cuisines Section */}
                <div className="flex flex-wrap gap-4 justify-center">
                    {
                        cuisines.map((cuisine) => (
                            <CuisineComponent 
                                key={cuisine.cuisineId}
                                src={cuisine.image} 
                                alt={`Image of ${cuisine.name}`}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    );
}

export default WhatsOnYourMindComponent; 