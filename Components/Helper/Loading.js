import React from 'react'
import styles from './Loading.module.css'
const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
      <svg width="46" height="31" viewBox="0 0 46 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M28.3414 18C29.6129 18 30.7462 18.8015 31.1699 20.0003C31.5832 21.1695 32.6985 22 34 22C35.6569 22 37 20.6569 37 19C37 18.2297 36.7136 17.5335 36.2368 17.0007C35.2173 15.8617 35.2173 14.1383 36.2368 12.9993C36.7136 12.4665 37 11.7703 37 11C37 9.34315 35.6569 8 34 8C32.6985 8 31.5832 8.8305 31.1699 9.99974C30.7462 11.1985 29.6129 12 28.3414 12L11.6586 12C10.3871 12 9.25377 11.1985 8.83007 9.99974C8.4168 8.8305 7.30153 8 6 8C4.34314 8 3 9.34314 3 11C3 11.7703 3.28637 12.4665 3.76319 12.9993C4.78265 14.1383 4.78265 15.8617 3.76319 17.0007C3.28637 17.5335 3 18.2297 3 19C3 20.6569 4.34314 22 6 22C7.30153 22 8.4168 21.1695 8.83007 20.0003C9.25377 18.8015 10.3871 18 11.6586 18L28.3414 18ZM11.6586 21C10.8349 23.3304 8.61244 25 6 25C2.68629 25 -7.56806e-07 22.3137 -6.11959e-07 19C-5.44788e-07 17.4633 0.577705 16.0615 1.52779 15C0.577705 13.9385 -3.2944e-07 12.5367 -2.62268e-07 11C-1.17422e-07 7.68629 2.68629 5 6 5C8.61244 5 10.8349 6.66961 11.6586 9L28.3414 9C29.1651 6.66961 31.3876 5 34 5C37.3137 5 40 7.68629 40 11C40 12.5367 39.4223 13.9385 38.4722 15C39.4223 16.0615 40 17.4633 40 19C40 22.3137 37.3137 25 34 25C31.3876 25 29.1651 23.3304 28.3414 21L11.6586 21Z" fill="#333"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M39.4683 16.5271C39.8098 17.2811 40 18.1184 40 19C40 22.3137 37.3137 25 34 25C31.3876 25 29.1651 23.3304 28.3414 21H11.6586C10.8349 23.3304 8.61244 25 6 25C2.68629 25 0 22.3137 0 19C0 17.4633 0.577705 16.0615 1.52779 15C0.577705 13.9385 0 12.5367 0 11C0 7.68629 2.68629 5 6 5C8.61244 5 10.8349 6.66961 11.6586 9L27.1178 9C27.2875 10.07 27.6358 11.0805 28.1313 12L11.6586 12C10.3871 12 9.25377 11.1985 8.83007 9.99974C8.4168 8.8305 7.30153 8 6 8C4.34314 8 3 9.34314 3 11C3 11.7703 3.28637 12.4665 3.76319 12.9993C4.78265 14.1383 4.78265 15.8617 3.76319 17.0007C3.28637 17.5335 3 18.2297 3 19C3 20.6569 4.34314 22 6 22C7.30153 22 8.4168 21.1695 8.83007 20.0003C9.25377 18.8015 10.3871 18 11.6586 18H28.3414C29.6129 18 30.7462 18.8015 31.1699 20.0003C31.5832 21.1695 32.6985 22 34 22C35.6569 22 37 20.6569 37 19C37 18.2297 36.7136 17.5335 36.2368 17.0007C36.2355 16.9993 36.2342 16.9978 36.2329 16.9963C36.3216 16.9988 36.4107 17 36.5 17C37.5366 17 38.5344 16.834 39.4683 16.5271Z" fill="#333"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M22.0129 21H11.6586C10.8349 23.3304 8.61244 25 6 25C2.68629 25 0 22.3137 0 19C0 17.4633 0.577705 16.0615 1.52779 15C0.577705 13.9385 0 12.5367 0 11C0 7.68629 2.68629 5 6 5C8.61244 5 10.8349 6.66961 11.6586 9L27.1178 9C27.2875 10.07 27.6358 11.0805 28.1313 12L11.6586 12C10.3871 12 9.25377 11.1985 8.83007 9.99974C8.4168 8.8305 7.30153 8 6 8C4.34314 8 3 9.34314 3 11C3 11.7703 3.28637 12.4665 3.76319 12.9993C4.78265 14.1383 4.78265 15.8617 3.76319 17.0007C3.28637 17.5335 3 18.2297 3 19C3 20.6569 4.34314 22 6 22C7.30153 22 8.4168 21.1695 8.83007 20.0003C9.25377 18.8015 10.3871 18 11.6586 18H22.6655C22.2943 18.9361 22.0676 19.9453 22.0129 21Z" fill="#333"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M9.71327 11.2838C9.31961 10.9487 9.0105 10.5102 8.83007 9.99974C8.4168 8.8305 7.30153 8 6 8C4.34314 8 3 9.34314 3 11C3 11.7703 3.28637 12.4665 3.76319 12.9993C4.78265 14.1383 4.78265 15.8617 3.76319 17.0007C3.28637 17.5335 3 18.2297 3 19C3 20.6569 4.34314 22 6 22C7.30153 22 8.4168 21.1695 8.83007 20.0003C9.0105 19.4898 9.31961 19.0513 9.71327 18.7162C10.1296 19.7556 10.7154 20.709 11.4365 21.5419C10.4796 23.5849 8.40507 25 6 25C2.68629 25 0 22.3137 0 19C0 17.4633 0.577705 16.0615 1.52779 15C0.577705 13.9385 0 12.5367 0 11C0 7.68629 2.68629 5 6 5C8.40508 5 10.4796 6.41508 11.4365 8.45807C10.7154 9.29104 10.1296 10.2444 9.71327 11.2838ZM27.1532 9.20856C27.1406 9.1393 27.1288 9.06978 27.1178 9H27.0007C27.0524 9.06884 27.1033 9.13836 27.1532 9.20856Z" fill="#333"/>      
      </svg>
      </div>
    </div>
  )
}

export default Loading
