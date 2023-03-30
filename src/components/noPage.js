import React from "react";
import { useHistory } from "react-router-dom";


export default function NoPage() {

    let history = useHistory();

    return (
        <div>
            <p>hello</p>
            <p>think you are lost</p>

            <button onClick={() => history.push('/')}>DASHBOARD</button>

        </div>
    );
}