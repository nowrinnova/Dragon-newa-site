import React from 'react'
import SocialLogin from '../SocialLogin'
import FindUs from '../FindUs'

export default function RightNav() {
  return (
    <div className='space-y-5 sticky top-0 z-40'>
     <SocialLogin></SocialLogin>
     <FindUs></FindUs>
    </div>
  )
}
