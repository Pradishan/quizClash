import React from 'react'
import Logut from '../util/Logut'
import { getUserName } from '../util/Authentication'
import avatar from '../assets/user.png'
import { Link } from 'react-router-dom'

export default function ProfileNavigatior(props) {
    return (
        <>
            <div className="dropdown" style={{ cursor: 'pointer' }}>
                <div className="d-flex align-items-center ms-2" typeof='button' data-bs-toggle="dropdown" aria-expanded="false">
                    <div> <img src={avatar} alt="avatar" class="rounded-circle me-2" style={{ width: '32px', height: '32px', objectFit: 'cover' }} />
                    </div><p className='p-0 m-0'>{getUserName()}</p>
                </div>

                <ul className="dropdown-menu border-0 " style={{ zIndex: '100',marginTop:'10px'}}>
                    <li className="dropdown-item" ><img src={avatar} alt="avatar" class="rounded-circle me-2" style={{ width: '32px', height: '32px', objectFit: 'cover' }} />
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
