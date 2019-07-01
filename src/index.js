import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header"


const App = ()=>{
    return(
        <>
            <Header/>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
        </>

    )
}



ReactDOM.render(<App />, document.getElementById('root'));

