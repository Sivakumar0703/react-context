import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { StudentState } from "../context/studentProvider";
import StudentLayout from "./studentLayout";


export default function AddStudent() {

    let { suser, setSuser } = StudentState();

    let history = useHistory();

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [batch, setBatch] = useState('');
    const [blood, setBlood] = useState('');

    const createNewStudent = () => {
        const newStudent = {
            id,
            name,
            department,
            batch,
            blood
        }
        setSuser([...suser, newStudent]);

        setId('');
        setName('');
        setDepartment('');
        setBatch('');
        setBlood('');

        history.push('/student&profile')
    }

    return (

        <StudentLayout>

            <div className="AddField ml-3 mt-3 col-12">

                <span style={{ backgroundColor: '#ed7014', fontWeight: 900, textAlign: 'justify' }}>CREATE NEW PROFILE</span> <br />

                <input placeholder="id" value={id} onChange={(e) => setId(e.target.value)} /> <br />

                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br />

                <input placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} /> <br />

                <input placeholder="Batch" value={batch} onChange={(e) => setBatch(e.target.value)} /> <br />

                <input placeholder="Blood" value={blood} onChange={(e) => setBlood(e.target.value)} /> <br />

                <button onClick={createNewStudent} style={{ backgroundColor: '#ed7014', cursor: 'pointer' }}>Add</button>
            </div>

        </StudentLayout>
    );
}