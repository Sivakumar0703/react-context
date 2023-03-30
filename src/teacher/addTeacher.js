import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { StudentState } from "../context/studentProvider";
import TeacherLayout from "./teacherLayout";


export default function AddTeacher(/* {user , setUser} */) {

    const { user, setUser } = StudentState();

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [experience, setExperience] = useState('');
    const [contact, setEmail] = useState('');

    let history = useHistory();

    const createNewTeacher = () => {
        const newTeacher = {
            id,
            name,
            department,
            experience,
            contact
        }
        setUser([...user, newTeacher]);

        setId('');
        setName('');
        setDepartment('');
        setExperience('');
        setEmail('');

        history.push('/teacher&profile')
    }

    return (

        <TeacherLayout>

            <div className="AddField ml-3 mt-3 col-12">

                <span style={{ backgroundColor: '#ed7014', fontWeight: 900, textAlign: 'justify' }}>CREATE NEW PROFILE</span> <br />

                <input placeholder="id" value={id} onChange={(e) => setId(e.target.value)} /> <br />

                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br />

                <input placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} /> <br />

                <input placeholder="Experience" value={experience} onChange={(e) => setExperience(e.target.value)} /> <br />

                <input placeholder="Email" value={contact} onChange={(e) => setEmail(e.target.value)} /> <br />

                <button onClick={createNewTeacher} style={{ backgroundColor: '#ed7014', cursor: 'pointer' }}>Add</button>
            </div>

        </TeacherLayout>
    );
}