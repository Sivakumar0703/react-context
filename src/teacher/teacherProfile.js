import React from "react";
import { useHistory } from "react-router-dom";
import { StudentState } from "../context/studentProvider";
import TeacherLayout from "./teacherLayout";


export default function TeacherProfile() {
    const { user, setUser } = StudentState()

    let history = useHistory();

    const deleteProfile = (id) => {
        let newList = user.filter(tchr => tchr.id !== id);
        setUser(newList);
    }

    return (
        <TeacherLayout>
            <div>
                <h1 style={{ textAlign: 'center' }}>TEACHER PROFILE</h1> <br />
            </div>
            <div className="thr-container">



                {user.map((teacher, index) => (

                    <div className="card  std-card" key={index} style={{ height: '18rem', width: '18rem', margin: '10px', backgroundColor: 'black' , color:'white' }}>

                        <div className="card-body" >
                            <p>NAME : {teacher.name}</p>
                            <p>DEPARTMRNT : {teacher.department}</p>
                            <p>EXPERIENCE: {teacher.experience}</p>
                            <p>EMAIL : {teacher.contact}</p>
                        </div>

                        <div className="card-footer" style={{ textAlign: 'center' }}>
                            <button className="btn btn-view btn-primary" onClick={() => history.push(`/viewTeacher&${index}`)}>View</button>
                            <button className="btn btn-edit btn-info" onClick={() => history.push(`/editTeacher${teacher.id}`)} >Edit</button>
                            <button className="btn btn-delete btn-danger" onClick={() => deleteProfile(teacher.id)}>Delete</button>
                        </div>

                    </div>

                ))}

            </div> </TeacherLayout>
    );
}








