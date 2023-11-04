import React from 'react'
import { data } from '../data'
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <>
    <div className='patient-dash flex'> <h1>Patient Logs</h1> </div>
    <table className='table-style' >
        <thead>
            <tr>
                <th>Sr. No.</th>
                <th>Patient Name</th>
                <th>Age</th>
                <th>Patient ID</th>
            </tr>
        </thead>
        <tbody>
          {data.map((patient, index) => (
            <tr key={index}>
               <td>{index + 1}</td> 
              <td>{patient.name}</td>
              <td>{patient.age}</td>
             <td>
                <Link to="/profile"  className="link-styling" >{patient.Patient_id}</Link>
             </td> 
            </tr>
          ))}
        </tbody>
        </table>
    </>
  )
}

export default Dashboard