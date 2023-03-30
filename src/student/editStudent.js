//edit user

import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import StudentLayout from "./studentLayout";
import { StudentState } from "../context/studentProvider";


export default function EditStudentData() {

  let { suser, setSuser } = StudentState();
  let { id } = useParams();

  let history = useHistory();

  const [identity, setIdentity] = useState('');
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [batch, setBatch] = useState('');
  const [blood, setBlood] = useState('');

  let edit = suser.find((std) => std.id === id);


  useEffect(() => {

    setIdentity(edit.id);
    setName(edit.name);
    setDepartment(edit.department);
    setBatch(edit.batch);
    setBlood(edit.blood);

  }, [])


  const update = () => {

    let studentProfileIndex = suser.findIndex(profile => profile.id === id);

    const updatedDetail = {
      id: identity,
      name,
      department,
      batch,
      blood
    }

    suser[studentProfileIndex] = updatedDetail;
    setSuser([...suser]);
    history.push('/student&profile')
  }

  return (

    <StudentLayout>

      <h1>EDIT STUDENT DETAILS</h1>

      <div className="AddField ml-3 mt-3 col-12">

        <span style={{ backgroundColor: '#ed7014', fontWeight: 900, textAlign: 'center' }}>EDIT PROFILE</span> <br />

        <input placeholder="id" value={identity} onChange={(e) => setIdentity(e.target.value)} /> <br />

        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} /> <br />

        <input placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} /> <br />

        <input placeholder="Batch" value={batch} onChange={(e) => setBatch(e.target.value)} /> <br />

        <input placeholder="Blood Group" value={blood} onChange={(e) => setBlood(e.target.value)} /> <br />

        <button style={{ backgroundColor: '#ed7014', cursor: 'pointer' }} onClick={update}>DONE</button>
      </div>

    </StudentLayout>

  );
}