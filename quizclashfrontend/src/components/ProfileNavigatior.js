import React from 'react'
import Logut from '../util/Logut'
import { getProfile, getUserName } from '../util/Authentication'
import { Link } from 'react-router-dom'
import ProfileImage from './ProfileImage'

export default function ProfileNavigatior(props) {
    return (
        <>
            <div className="dropdown" style={{ cursor: 'pointer' }}>
                <div className="d-flex align-items-center ms-2" typeof='button' data-bs-toggle="dropdown" aria-expanded="false">
                    <div> <ProfileImage src={getProfile()} size={'32px'} />
                    </div><a className='navlink' href='/'>{getUserName()}</a>
                </div>

                <ul className="dropdown-menu border-0 shadow " style={{ zIndex: '100',marginTop:'10px'}}>
                    <li className="dropdown-item" ><ProfileImage src={getProfile()} size={'32px'} />
                        {
                            (props.page !== "profile") ? (<Link to={"/profile"} style={{ textDecoration: 'none' }} >View Profile</Link>) :
                                (<Link to={"/"} style={{ textDecoration: 'none' }} >Go home</Link>)
                        }

                    </li>
                    <li className="dropdown-item" ><Logut /></li>
                </ul>
            </div>
        </>
    )
}
