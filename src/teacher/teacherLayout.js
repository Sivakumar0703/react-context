/*
import React from "react";
import { useHistory } from "react-router-dom";



export default function TeacherLayout({ children }) {
    let history = useHistory();
    return (

        <div className="t-page col-12">

            <header className="t-header col-12" style={{ backgroundColor: 'hotpink', height: '50px' }}>

            </header>

            <section className="mid row">
                <div className="t-nav col-2" style={{ backgroundColor: 'green' }}>
                    <button className="btn btn-block m-2" onClick={() => history.push('/')}>DASHBOARD</button>
                    <button className="btn btn-block m-2" onClick={() => history.push('/teacher&profile')}>PROFILE</button>
                    <button className="btn btn-block m-2" onClick={() => history.push('/add&teacher')}>ADD PROFILE</button>

                </div>

                <div className="t-content col-10" style={{ backgroundColor: 'yellow' }}>{children}

                </div>

            </section>

            <footer className="t-footer col-12" style={{ backgroundColor: 'orange' }}>

            </footer>

        </div>

    );
}

*/


import React from "react";
import { useHistory } from "react-router-dom";



export default function TeacherLayout({ children }) {
    let history = useHistory();
    return (

        <div className="t-page col-12">

            <header className="t-header col-12" style={{ backgroundColor: 'black', height: '50px' , color:'white' , textAlign:'center' }}> <h1>TEACHER DATABASE</h1>

            </header>


            <nav className="navbar navbar-expand-md col-12 " style={{backgroundColor:'plum'}}>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#openclose">

                    <span className="navbar-toggler-icon"> </span>

                </button>



                <div className="navbar-collapse collapse" id="openclose">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <button className="nav-link  btn" onClick={() => history.push('/')}> DASHBOARD </button>

                        </li>

                        <li className="nav-item">
                            <button class="nav-link  btn" onClick={() => history.push('/teacher&profile')}>  PROFILE </button>

                        </li>

                        <li className="nav-item">
                            <button class="nav-link btn" onClick={() => history.push('/add&teacher')}> ADD PROFILE </button>

                        </li>

                    </ul>
                </div>

            </nav>


            <div className="t-content col-12" style={{ backgroundColor: 'purple' }}>{children}

            </div>


            <footer className="s-footer col-12" style={{ backgroundColor: 'black' , color:'white' ,display:'flex',justifyContent:'space-between'}}> 
            <div>Contact us :</div> 
            <div>
                ADDRESS 
             </div> 

            </footer>

        </div>

    );
}