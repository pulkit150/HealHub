import React from 'react';
import { formatDate } from '../../utils/formatDate';

const Appointments = ({ appointments }) => {
  return (
    <div className="w-full">
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full text-left text-sm text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Gender</th>
              <th scope="col" className="px-6 py-3">Payment</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Booked On</th>
            </tr>
          </thead>
          <tbody>
            {appointments?.map((items) => (
              <tr key={items._id} className="border-b">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
                >
                  <img
                    src={items.user.photo}
                    className="w-10 h-10 rounded-full object-cover"
                    alt="User"
                  />
                  <div className="pl-3">
                    <div className="text-base font-semibold">{items.user.name}</div>
                    <div className="font-normal text-gray-500 text-xs">
                      {items.user.email}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{items.user.gender}</td>
                <td className="px-6 py-4">
                  {items.isPaid ? (
                    <div className="flex items-center text-green-600">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2" />
                      Paid
                    </div>
                  ) : (
                    <div className="flex items-center text-red-600">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2" />
                      Unpaid
                    </div>
                  )}
                </td>
                <td className="px-6 py-4">₹{items.ticketPrice}</td>
                <td className="px-6 py-4">{formatDate(items.createdAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
          
      {/* Mobile View */}
      <div className="md:hidden space-y-4">
        {appointments?.map((items) => (
          <div
            key={items._id}
            className="bg-white rounded-lg shadow p-4 flex flex-col space-y-2"
          >
            <div className="flex items-center space-x-3">
              <img
                src={items.user.photo}
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-md font-semibold">{items.user.name}</h3>
                <p className="text-sm text-gray-500">{items.user.email}</p>
              </div>
            </div>

            <div className="text-sm">
              <p><span className="font-medium">Gender:</span> {items.user.gender}</p>
              <p>
                <span className="font-medium">Payment:</span>{" "}
                <span className={items.isPaid ? "text-green-600" : "text-red-600"}>
                  {items.isPaid ? "Paid" : "Unpaid"}
                </span>
              </p>
              <p><span className="font-medium">Price:</span> ₹{items.ticketPrice}</p>
              <p><span className="font-medium">Booked On:</span> {formatDate(items.createdAt)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Appointments;
