//edit user

import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import TeacherLayout from "./teacherLayout";
import { StudentState } from "../context/studentProvider";


export default function EditTeacherData() {

    const { user, setUser } = StudentState();
    let { id } = useParams();

    let history = useHistory();

    const [identity, setIdentity] = useState('');
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [experience, setExperience] = useState('');
    const [contact, setEmail] = useState('');

    let edit = user.find((tchr) => tchr.id === id);


    useEffect(() => {

        setIdentity(edit.id);
        setName(edit.name);
        setDepartment(edit.department);
        setExperience(edit.experience);
        setEmail(edit.contact);

    }, [])


    const update = () => {

        let teacherProfileIndex = user.findIndex(profile => profile.id === id);

        const updatedDetail = {
            id: identity,
            name,
            department,
            experience,
            contact
        }

        user[teacherProfileIndex] = updatedDetail;
        setUser([...user]);
        history.push('/teacher&profile')
    }

    return (

        <TeacherLayout>

            <h1>EDIT TEACHER DETAILS</h1>

            <div className="AddField ml-3 mt-3 col-12">

                <span style={{ backgroundColor: '#ed7014', fontWeight: 900, textAlign: 'justify' }}>CREATE NEW PROFILE</span> <br />

                <input placeholder="id" value={identity} onChange={(e) => setIdentity(e.target.value)} /> <br />

                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br />

                <input placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} /> <br />

                <input placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} /> <br />

                <input placeholder="Email" value={contact} onChange={(e) => setEmail(e.target.value)} /> <br />

                <button onClick={update} style={{ backgroundColor: '#ed7014', cursor: 'pointer' }}>DONE</button>
            </div>

        </TeacherLayout>

    );
}