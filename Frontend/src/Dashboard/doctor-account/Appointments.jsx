import React from 'react'
import { formatDate } from '../../utils/formatDate'

const Appointments = ({ appointments }) => {
  return (
    <table className='w-full text-left text-sm text-gray-500'>
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 '>
        <tr>
          <th scope='col' className='px-6 py-3'>
            Name
          </th>
          <th scope='col' className='px-6 py-3'>
            Gender
          </th>
          <th scope='col' className='px-6 py-3'>
            Price
          </th>
          <th scope='col' className='px-6 py-3'>
            Booked On
          </th>
        </tr>
      </thead>

      <tbody>
        {appointments?.map(items =>
          <tr key={items._id}>
            <th scope='row' className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap'>
              <img src={items.user.photo}  className='w-10 h-10 rounded-full' alt="" />
              <div className='pl-3'>
                <div className='text-base font-semibold'>{items.user.name}</div>
                <div className='font-normal text-gray-500'>{items.user.email}</div>
              </div>
            </th>
            <td className='px-6 py-4'>{items.user.gender}</td>
            <td className='px-6 py-4'>
              {items.isPaid && (
                <div className='flex items-center'>
                  <div className='h-2.5 w-2.5 rounded-full bg-green-400 mr-2'></div>
                  Paid
                </div>
              )}
              {!items.isPaid && (
                <div className='flex items-center'>
                  <div className='h-2.5 w-2.5 rounded-full bg-red-500 mr-2'></div>
                  Unpaid
                </div>
              )}
            </td>
            <td className='px-6 py-4'>{items.ticketPrice}</td>
            <td className='px-6 py-4'>{formatDate(items.createdAt)}</td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default Appointments
