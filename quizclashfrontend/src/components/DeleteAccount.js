import React from 'react'
import DeleteConfirmationModal from './DeleteConfirmationModal'

export default function DeleteAccount() {
  return (
    <div class="col-xl-6">
          <div class="card mb-4">
            <div class="card-header">Delete Account</div>
            <div class="card-body">
              <br />
              <p>
                Deleting your account is a permanent action and cannot be
                undone. If you are sure you want to delete your account, select
                the button below.
              </p>
              <br />

              <DeleteConfirmationModal/>
             {/* <button class="btn btn-danger" type="button">
                I understand, delete my account
              </button>
*/}  <br></br>
            </div>
            <br></br>
          </div>
        </div>
  )
}
