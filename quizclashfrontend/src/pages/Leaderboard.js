import React, { lazy, useCallback, useEffect, useState } from 'react'
import '../styles/Quiz.css';
import axios from 'axios';

const Navbar = lazy(() => import('../components/Navbar'));
const LodonSpinner = lazy(() => import('../components/LodingSpinner'));

export default function Leaderboard() {

  const [loading, setLoading] = useState(true);
  const [leaderboard, setLeaderboard] = useState(null);

  // fetch data
  const fetchLeaderBoard = useCallback(async () => {
    setLoading(true);
    await axios
      .get("accounts/leaderboard/")
      .then((response) => {
        if (response.status === 200) {
          setLeaderboard(response?.data);
          console.log(response?.data)
        }
      })
      .catch((error) => {
        console.log("Something went wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setLeaderboard, setLoading]);

  useEffect(() => {
    fetchLeaderBoard()
  }, [fetchLeaderBoard]);

  // if data is fetching show loading spinner for user
  if (loading) return <LodonSpinner />;

  return (
    <>
      <Navbar page={'leaderboard'} />
      <center>
        <h1>Leader Board</h1>
        <div className='quiz-container mt-3 p-4' style={{ width: '70%' }}>
          {leaderboard?.map(i => (
            < div key={i} className='row p-3' >
              <div className='d-flex justify-content-between p-2 mx-3 align-items-center' >
                <div className='d-flex ms-3'>
                  <span>{leaderboard.indexOf(i) + 1}</span>
                  <p className='m-0 p-0 ms-2'>{i?.username}</p>
                </div>
                <div className='ms-0 me-3'>
                  <p className='m-0 p-0'>{(i?.score ?? 0)}XP</p>
                </div>
              </div>
              <hr />
            </div>
          ))}

        </div>
      </center >

    </>
  )
}
