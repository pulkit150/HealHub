import React from 'react'
import { Link } from 'react-router-dom'

const CheckoutSuccess = () => {
  return (
    <div className='bg-gray-100 h-screen'>
      <div className='bg-white p-6 md:mx-auto'>
        <svg viewBox='0 0 24 24' className='text-green-600 w-16 h-16 mx-auto my-6'>
            <path
                fill='currentColor'
                d='M12, 0A12, 12, 0, 1, 0, 24, 12, 
                12.014, 12.014, 0, 0, 0, 12, 0Zm6.927, 8.2-6.845, 
                9.209a1.011, 1.011, 0, 0, 1-1.43, 0L5.077, 8.2A1.014, 
                1.014, 0, 1, 1, 9.2L11.008, 19.817a1.011, 1.011, 0, 0, 
                0, 1.43, 0l6.845-9.209A1.014, 1.014, 0, 0, 1, 18.927, 8.2Z'
            ></path>
        </svg>
        <div className='text-center'>
            <h3 className='md:text-2xl text-base text-gray-900 font-semibold text-center'>
                Payment Done!
            </h3>
            <p className='text-gray-600 my-2'>
                Thank You for completing your secure online payment.
            </p>
            <p>Have a great day!</p>
            <div>
                <Link to='/home' className='px-12 bg-buttonBgColor text-white font-semibold py-3'>
                    Go back to Homepage
                </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutSuccess
