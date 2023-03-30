import React from "react";
import { useHistory } from "react-router-dom";
import StudentLayout from "./studentLayout";
import { StudentState } from "../context/studentProvider";


export default function StudentProfile() {
    const { suser, setSuser } = StudentState()
    let history = useHistory();

    const deleteProfile = (id) => {
        let newList = suser.filter(std => std.id !== id);
        setSuser(newList);
    }

    return (

        <StudentLayout>
            <div>
                <h1 style={{ textAlign: 'center' }}>STUDENT PROFILE</h1> <br />
            </div>
            <div className="std-container">



                {suser.map((student, index) => (

                    <div className="card  std-card" key={index} style={{ height: '18rem', width: '18rem', margin: '10px', backgroundColor:'black' , color:'white' }}>

                        <div className="card-body" >
                            <p>NAME : {student.name}</p>
                            <p>DEPARTMENT : {student.department}</p>
                            <p>BATCH : {student.batch}</p>
                            <p>BLOOD GROUP : {student.blood}</p>
                        </div>

                        <div className="card-footer" style={{ textAlign: 'center' }}>
                            <button className="btn btn-view btn-primary" onClick={() => history.push(`/viewStudent&${index}`)}>View</button>
                            <button className="btn btn-edit btn-info" onClick={() => history.push(`/editStudent${student.id}`)} >Edit</button>
                            <button className="btn btn-delete btn-danger" onClick={() => deleteProfile(student.id)}>Delete</button>
                        </div>

                    </div>

                ))}

            </div> </StudentLayout>
    );
}








