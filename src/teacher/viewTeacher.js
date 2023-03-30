import React from "react";
import { useParams } from "react-router-dom";
import TeacherLayout from "./teacherLayout";
import { StudentState } from "../context/studentProvider";



export default function ViewTeacher({/* {user} */ }) {

    const { user } = StudentState();

    let { id } = useParams();

    let teacher = user[id];

    return (

        <TeacherLayout>

            <div className="view-card">
                <div className="card" style={{ height: '12rem' }}>
                    <div className="card-body" >
                        <p>NAME : {teacher.name}</p>
                        <p>DEPARTMENT : {teacher.department}</p>
                        <p>EXPERIENCE : {teacher.experience}</p>
                        <p>EMAIL : {teacher.contact}</p>
                    </div> </div>
            </div>

        </TeacherLayout>

    );
}