import React from "react";
import { data } from "../data";
import { FaRegUserCircle, FaMale } from "react-icons/fa";
import { RiEarthLine } from "react-icons/ri";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { GiHospitalCross } from "react-icons/gi";
import { TbReportMedical } from "react-icons/tb";
import SemiCircleProgressBar from "react-progressbar-semicircle";

function PatientData() {
  const {
    name,
    Gender,
    age,
    Patient_id,
    Phone_Number,
    Mail_Id,
    Affected_side,
    Condition,
    Speciality,
  } = data[0];
  return (
    <>
      <div className="p-data">
        <p>
          {`${name}, ${Gender}/${age}`} <br />
          {`Patient ID: ${Patient_id}`}
        </p>
        <div className="patient-icon">
          <FaRegUserCircle style={{ width: "50px", height: "50px" }} />
        </div>
      </div>
      <hr />

      <div className="report">
        <div className="progress">
          <h2>Goal Reached</h2>
          <br />
          <div>
            <SemiCircleProgressBar
              percentage={40}
              stroke="#FCB000"
              showPercentValue
            />
          </div>
        </div>
        <table className="Patient-report">
          <tbody>
            <tr>
              <td>Phone No.</td>
              <td>
                <BsFillTelephoneFill /> {Phone_Number}
              </td>
            </tr>
            <tr>
              <td>Mail id</td>
              <td>
                <FiMail /> {Mail_Id}
              </td>
            </tr>
            <tr>
              <td>Affected Side</td>
              <td>
                <FaMale style={{ color: "DF0100" }} /> {Affected_side}
              </td>
            </tr>
            <tr>
              <td>Condition</td>
              <td>
                <RiEarthLine /> {Condition}
              </td>
            </tr>
            <tr>
              <td>Speciality </td>
              <td>
                <GiHospitalCross /> {Speciality}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <hr style={{ width: "50%" }} />
      <div className="history" >
        <table>
            <tr>
                 <td><TbReportMedical style={{color:"#002647"}} /> Medical History{" "}</td> 
                <td> Hypertension , DM , Hypothyrodism </td>
            </tr>
        </table>
      </div>
    </>
  );
}

export default PatientData;
