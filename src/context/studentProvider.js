import React, { createContext, useContext, useState } from "react";
import { data } from "../student/studentData";
import { Tdata } from "../teacher/teacherData";

const StudentContext = createContext();

export default function StudentProvider({ children }) {

    let [suser, setSuser] = useState(data);
    let [user, setUser] = useState(Tdata)

    return (

        <StudentContext.Provider
            value={{ suser, setSuser, user, setUser }} >

            {children}

        </StudentContext.Provider>

    );
}

export const StudentState = () => {
    return useContext(StudentContext)
}