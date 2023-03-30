import React from 'react';
import './ListHospitals.css';

const dummyData = [
  {
    name: "Example Hospital 1",
    address: "123 Main St, Anytown, USA",
    phone: "555-555-1234",
    specialties: "Cardiology, Oncology, Pediatrics"
  },
  {
    name: "Example Hospital 2",
    address: "456 Elm St, Anytown, USA",
    phone: "555-555-5678",
    specialties: "Orthopedics, Neurology, Psychiatry"
  },
  {
    name: "Example Hospital 3",
    address: "789 Oak St, Anytown, USA",
    phone: "555-555-9012",
    specialties: "Dermatology, Endocrinology, Gastroenterology"
  },
];

const ListHospitals = () => {
  return (
    <div className="hospital-list">
      {dummyData.map((hospital, index) => (
        <div className="hospital-item" key={index}>
          <h2 className="hospital-name">{hospital.name}</h2>
          <p className="hospital-address">{hospital.address}</p>
          <p className="hospital-phone">{hospital.phone}</p>
          <p className="hospital-specialties">
            Specialties: {hospital.specialties}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ListHospitals;
