import React, { Component } from 'react';
export default class Header extends Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <React.Fragment>

            <header id="home">

               <div className="row banner">
                  <div className="banner-text">
                     <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                     <h1 className="responsive-headline">{resumeData.name}</h1>
                     
                     <h2 style={{ color: '#fff', fontFamily: 'sans-serif' }}>({resumeData.pronouns})</h2>
                     <h3 style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '20px' }}>Hi! I'm a {resumeData.role}.{resumeData.roleDescription}
                     </h3>
                     <br />
                     <h3 style={{ color: '#fff', fontFamily: 'sans-serif', fontSize: '20px' }}>Feel free to take a look at my <a className="smoothscroll" href="#portfolio">projects</a> below, check out my <a href="assets/AshleyYe-Resume.pdf" target="_">resume</a>, or <a href="mailto:ashleyye@berkeley.edu" target="_">reach out</a>!</h3>
                     <br />
                     <hr />
                     <ul className="social">
                        {
                           resumeData.socialLinks && resumeData.socialLinks.map(item => {
                              return (
                                 <li key={item.name}>
                                    <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                 </li>
                              )
                           }
                           )
                        }
                     </ul>
                  </div>
               </div>

               <p className="scrolldown">
                  <a className="smoothscroll" href="#resume"><i className="icon-down-circle"></i></a>
               </p>

            </header>
         </React.Fragment>
      );
   }
}