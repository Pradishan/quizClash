import React from "react";
import "../../styles/admin-setting.css";
import proPic from "../../assets/pro pic.jpg";

export default function Settings() {
  return (
    <div class="container-xl px-4 vh-100">
      <div class="row py-2 overflow-y-scroll h-100">
        {/*Profile picture card*/}

        <UpdateProPictureCard/>

        {/*Personal information card*/}
        <SettingUpdateUserDetailsForm/>

        {/*Security Setting*/}
        <SecuritySetting/>

        {/*Delete account*/}
        
        <DeleteAccount/>


      </div>
    </div>
  );
}
