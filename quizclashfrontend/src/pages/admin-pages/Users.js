import axios from "axios";
import React, { lazy, useCallback, useEffect, useState } from "react";
import UserData from "../../components/Models/UserData";

const LodonSpinner = lazy(() => import('../../components/LodingSpinner'));

export default function Users() {

  const [loading, setLoading] = useState(true);
  const [user, setuser] = useState(null);
  const [ showModal, setShowModal ] = useState( false );
  const [ selectedData, setSelectedData ] = useState( null );

  // fetch data
  const fetchuser = useCallback(async () => {
    setLoading(true);
    await axios
      .get("accounts/user-all/")
      .then((response) => {
        if (response.status === 200) {
          setuser(response?.data);
          // console.log(response?.data)
        }
      })
      .catch((error) => {
        console.log("Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setuser, setLoading]);

  useEffect(() => {
    fetchuser()
  }, [fetchuser]);

  // if data is fetching show loading spinner for user
  if (loading) return <LodonSpinner />;

  
  const openModal = ( data ) =>
  {
    setSelectedData( data );
    setShowModal( true );
  };

  return (<>
    <h3 className="mt-3">Users</h3>
    <div className="wrapper m-3">
      <div className="body-overlay">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No</th>
              <th scope="col">Score</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {user?.map((i) => (
              <tr key={i?.id}>
                <th scope="row">{i?.id}</th>
                <td>{i?.username}</td>
                <td>{i?.email}</td>
                <td>{i?.phone}</td>
                <td>{(i?.score ?? 0)}</td>
                <td className="">
                <button className='btn btn-dark me-2' onClick={ () => openModal( i ) } >View</button>
                <button className='btn btn-dark ' >Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {
      selectedData ? (<UserData show={showModal} onHide={() => setShowModal(false)} data={selectedData} />) : (null)
    }

  </>
  );
}
