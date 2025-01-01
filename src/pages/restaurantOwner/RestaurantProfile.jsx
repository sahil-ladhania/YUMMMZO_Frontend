import RestaurantProfileHeaderComponent from "@/components/restaurantOwnerDashboard/RestaurantProfileHeaderComponent.jsx";
import ProfileOverviewComponent from "@/components/restaurantOwnerDashboard/ProfileOverviewComponent.jsx";
import EditProfileComponent from "@/components/restaurantOwnerDashboard/EditProfileComponent.jsx";
import ChangePasswordComponent from "@/components/restaurantOwnerDashboard/ChangePasswordComponent.jsx";
import UploadLogoComponent from "@/components/restaurantOwnerDashboard/UploadLogoComponent.jsx";

function RestaurantProfile() {
    return (
        <>
            <div className="max-w-7xl mx-auto px-4 roboto-regular">
                <RestaurantProfileHeaderComponent/>
                <ProfileOverviewComponent/>
                <EditProfileComponent/>
                <ChangePasswordComponent/>
                <UploadLogoComponent/>
            </div>
        </>
    );
}

export default RestaurantProfile;