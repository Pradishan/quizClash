import React from 'react'
import axios from 'axios';
import DeleteConfirmationModal from './DeleteConfirmationModal'

export default function DeleteAccount() {
  const handleDeleteAccount = async () => {
    try {
       
        const response = await axios.post('/api/delete-account/');

        
        alert('Account deleted successfully');
    } catch (error) {
        
        alert('Error deleting account');
    }
};

  return (
    <div className="col-xl-6">
            <div className="card mb-4">
                <div className="card-header">Delete Account</div>
                <div className="card-body">
                    <br />
                    <p>
                        Deleting your account is a permanent action and cannot be
                        undone. If you are sure you want to delete your account, select
                        the button below.
                    </p>
                    <br />

              {/*<DeleteConfirmationModal/>*/}

              <button className="btn btn-danger" type="button" onClick={handleDeleteAccount}>
                       Delete Account
                    </button>
                    <br></br>
                </div>
                <br></br>
            </div>
        </div>
    );
}