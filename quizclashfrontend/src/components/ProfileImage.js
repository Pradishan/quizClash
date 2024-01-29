import React from 'react'
import avatar from '../assets/user.png'

export default function ProfileImage({src,size}) {
  return (
    <img src={((src !== 'null')&&(src !== null) )? src : avatar} alt="avatar" className="rounded-circle me-2" style={{ width: `${size}`, height: `${size}`, objectFit: 'cover' }} />
  )
}
