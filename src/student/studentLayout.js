/*

import React from "react";
import { useHistory } from "react-router-dom";



export default function StudentLayout({ children }) {
    let history = useHistory();
    return (

        <div className="s-page col-12">

            <header className="s-header col-12" style={{ backgroundColor: 'black', height: '80px' }}>

            </header>

            <section className="mid row" >
                <div className="s-nav col-2" style={{ backgroundColor: '#fc68cf' }}>
                    <button className="btn btn-block m-2" onClick={() => history.push('/')}>DASHBOARD</button>
                    <button className="btn btn-block m-2" onClick={() => history.push('/student&profile')}>PROFILE</button>
                    <button className="btn btn-block m-2" onClick={() => history.push('/add&student')}>ADD PROFILE</button>
                </div>

                <div className="s-content col-10" style={{ backgroundColor: 'purple' }}>{children}

                </div>

            </section>

            <footer className="s-footer col-12" style={{ backgroundColor: 'black' }}>

            </footer>

        </div>

    );
} */





import React from "react";
import { useHistory } from "react-router-dom";



export default function StudentLayout({ children }) {
    let history = useHistory();
    return (

        <div className="s-page col-12">

            <header className="s-header col-12" style={{ backgroundColor: 'black', height: '80px' , color:'white' , textAlign:'center' }}> <h1>STUDENT DATABASE</h1>

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
                            <button class="nav-link  btn" onClick={() => history.push('/student&profile')}>  PROFILE </button>

                        </li>

                        <li className="nav-item">
                            <button class="nav-link btn" onClick={() => history.push('/add&student')}> ADD PROFILE </button>

                        </li>

                    </ul>
                </div>

            </nav>


            <div className="s-content col-12" style={{ backgroundColor: 'purple' }}>{children}

            </div>


            <footer className="s-footer col-12" style={{ backgroundColor: 'black' , textAlign:'center',color:'white' }}> contact us

            </footer>

        </div>

    );
}