import ProfileOverviewComponent from "@/components/deliveryPartnerDashboard/ProfileOverviewComponent.jsx";
import EditProfileComponent from "@/components/deliveryPartnerDashboard/EditProfileComponent.jsx";
import ChangePasswordComponent from "@/components/deliveryPartnerDashboard/ChangePasswordComponent.jsx";
import UploadProfilePictureComponent from "@/components/deliveryPartnerDashboard/UploadProfilePictureComponent.jsx";

function Profile() {
    return (
        <>
            <div className="max-w-4xl mx-auto space-y-8">
                {/* Profile Overview Component */}
                <ProfileOverviewComponent/>
                {/* Edit Profile Component */}
                <EditProfileComponent/>
                {/* Change Password Component */}
                <ChangePasswordComponent/>
                {/* Upload Profile Picture Component */}
                <UploadProfilePictureComponent/>
            </div>
        </>
    );
}

export default Profile;