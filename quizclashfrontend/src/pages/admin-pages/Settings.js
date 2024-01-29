import React, { useCallback, useEffect, useState } from "react";
import "../../styles/admin-setting.css";

import UpdateProPictureCard from "../../components/UpdateProPictureCard";
import SettingUpdateUserDetailsForm from "../../components/SettingUpdateUserDetailsForm";
import SecuritySetting from "../../components/SecuritySetting";
import DeleteAccount from "../../components/DeleteAccount";
import axios from "axios";
import { getUserID } from "../../util/Authentication";

export default function Settings() {

  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

 // fetch data
 const fetchUserData = useCallback(async () => {
  setLoading(true);
  try {
    const response = await axios.get(`accounts/user/${getUserID()}`);
    if (response.status === 200) {
      setUserData(response.data);
    }
  } catch (error) {
    console.log('Something went wrong');
  } finally {
    setLoading(false);
  }
}, []);

useEffect(() => {
  fetchUserData();
}, [fetchUserData]);

  return (
    <div class="container-xl px-4 vh-100">
      <div class="row py-2 overflow-y-scroll h-100">
        {/*Profile picture card*/}

        <UpdateProPictureCard user = {userData}/>

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
