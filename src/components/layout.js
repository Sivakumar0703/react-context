import React from "react";


export default function Layout({ children }) {

    return (

        <div className="container-fluid layout">

            <header className="header col-12">DASHBOARD</header>

        
            <div className="content col-12">
                {children}
            </div>


            <footer className="footer col-12" style={{height:'55px'}}>
            
            </footer>


        </div>


    );
}