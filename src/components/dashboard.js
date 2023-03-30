/*
import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "./layout";

export default function Dashboard() {
    let history = useHistory();
    return (

        <Layout>

            <div className="dashboard" style={{ backgroundColor: 'yellowgreen'}}>

                <h2 style={{ textAlign: 'center' }}>DASHBOARD</h2>

                <div className="partition d-flex">

                    <div className="card student m-3">
                        <div className="card-header" style={{ textAlign: 'center', fontWeight: 900, fontSize: '25px', backgroundColor: 'black', color: 'white' }}>STUDENT </div>
                        <div className="card-body" style={{ backgroundColor: 'black' }}><img src="https://th.bing.com/th/id/OIP.bTg2BYZlCME7QWdiQZj-2gHaE8?pid=ImgDet&w=1536&h=1024&rs=1" alt="student" /></div>
                        <div className="card-footer" style={{ textAlign: 'center', backgroundColor: 'black' }}>
                            <button className="btn btn-success" onClick={() => history.push('/student&profile')}>CLICK ME</button></div>
                    </div>

                    <div className="card teacher m-3">
                        <div className="card-header" style={{ textAlign: 'center', fontWeight: 900, fontSize: '25px', backgroundColor: 'black', color: 'white' }}>TEACHER </div>
                        <div className="card-body" style={{ backgroundColor: 'black' }}><img src="https://img.freepik.com/vecteurs-libre/smart-teacher-debout-devant-tableau_38747-193.jpg?size=626&ext=jpg" alt="teacher" /></div>
                        <div className="card-footer" style={{ textAlign: 'center', backgroundColor: 'black' }}>
                            <button className="btn btn-danger" onClick={() => history.push('/teacher&profile')}>CLICK ME</button></div>
                    </div>

                </div>

            </div>

        </Layout>

    );
}
*/

import React from "react";
import { useHistory } from "react-router-dom";
import Layout from "./layout";

export default function Dashboard() {
    let history = useHistory();
    return (

        <Layout>

            <div className="dashboard" style={{ backgroundColor: 'yellowgreen'}}>

                <h2 style={{ textAlign: 'center' }}>DASHBOARD</h2>

                <div className="partition">

                    <div className="card student m-3" >
                        <div className="card-header" style={{ textAlign: 'center', fontWeight: 900, fontSize: '25px', backgroundColor: 'black', color: 'white' }}>STUDENT </div>
                        <div className="card-body db-img" style={{ backgroundColor: 'black' }}><img src="https://th.bing.com/th/id/OIP.bTg2BYZlCME7QWdiQZj-2gHaE8?pid=ImgDet&w=1536&h=1024&rs=1" alt="student" /></div>
                        <div className="card-footer" style={{ textAlign: 'center', backgroundColor: 'black' }}>
                            <button className="btn btn-success" onClick={() => history.push('/student&profile')}>CLICK ME</button></div>
                    </div>

                    <div className="card teacher m-3">
                        <div className="card-header" style={{ textAlign: 'center', fontWeight: 900, fontSize: '25px', backgroundColor: 'black', color: 'white' }}>TEACHER </div>
                        <div className="card-body" style={{ backgroundColor: 'black' }}><img src="https://img.freepik.com/vecteurs-libre/smart-teacher-debout-devant-tableau_38747-193.jpg?size=626&ext=jpg" alt="teacher" /></div>
                        <div className="card-footer" style={{ textAlign: 'center', backgroundColor: 'black' }}>
                            <button className="btn btn-danger" onClick={() => history.push('/teacher&profile')}>CLICK ME</button></div>
                    </div>

                </div>

            </div>

        </Layout>

    );
}