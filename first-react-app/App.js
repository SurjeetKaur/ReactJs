//front end using JSX :javascript XML

//import react and react dom
import React from 'react';
import ReactDOM from "react-dom/client";
import myPic from './images/mypic.jpg';
import './stylesheet.css';


// JSX -> React Elements -> Parcel -> Browser Understandable Code -> Babel
// using Babel(javascript Complier), Browser undertands the React code
// In other words,Parcel use babel to convert react objects into browser understandable code

/*const heading2 = <div>
    <h1>I am heading two</h1>
</div>
console.log("heading", heading2);*/


// React Functional Component = Javascript function

// 1. variable name should be in Capital letter
// 2. Javascript funtion => arrow function
// 3. return JSX


const Portfolio=()=>{
    return(
        <div id="portfolio">
            <header>
                <h1>My portfolio</h1>
                <nav>   
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <section id="home"className="home-container"> 
                <div className="home-content-box">
                    <h2>Welcome to my portfolio!</h2>
                    <h3>I am Surjeet kaur</h3>
                </div>
                <div className="home-item">
                    <img src={myPic} alt="background-image" id="mypic"></img>
                </div>       
            </section>
            <section id="about"className="about-container">
                <div className="about-content-box">
                    <h2>About me</h2>
                    <p>I am an IT professional with a diverse background,
                        including experience in customer service and IT.
                        I have a strong passion for coding and technology,
                        and I’m continually expanding my knowledge in web development, 
                        particularly in JavaScript, React, Node.js, and MongoDB. 
                        I also have experience in creating user-friendly applications and 
                        managing backend operations. Currently, I’m preparing to transition into
                        a full-time developer role, with a focus on building efficient, 
                        scalable, and responsive web solutions. With my combined expertise in
                        IT and a customer-centric approach, I’m eager to contribute to dynamic 
                        teams and innovative projects.
                    </p>
                </div>
            </section>
        </div>
    )
}

//rendering 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Portfolio/>);

// multiple components render

// // component 1
// const Title = () => {
//     return (
//         <h1>This is the title from functional based component</h1>
//     )
// }

// // component 2
// const Heading1 = () => {
//     return (
//         <div>
//             <div>
//                 <h1 id="heading">
//                     THis is heading
//                 </h1>
//                 <Title />
//             </div>
//         </div>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // we have created a root for our react library => whatever react code we write going forward
// // would only work in this root

// // JSX - Javascript XML  

// root.render(
//     <>
//         <Heading1 />
//         <Title />
//     </>);
// // whatever we want to render inside the root just pass it