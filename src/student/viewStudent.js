import React from "react";
import { useParams } from "react-router-dom";
import { StudentState } from "../context/studentProvider";
import StudentLayout from "./studentLayout";


export default function ViewStudent() {

    let { suser } = StudentState();
    let { id } = useParams();

    let student = suser[id];

    return (

        <StudentLayout>

            <div className="view-card">
                <div className="card" style={{ height: '12rem' }}>
                    <div className="card-body" >
                        <p>NAME : {student.name}</p>
                        <p>DEPARTMENT : {student.department}</p>
                        <p>BATCH : {student.batch}</p>
                        <p>BLOOD GROUP : {student.blood}</p>
                    </div> </div>
            </div>

        </StudentLayout>

    );
}