import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Dropdown, Nav, Collapse } from "reactstrap";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";

import logo from "./img/logo1.png";


var ps;

function Sidebar(props) {
  const location = useLocation();
  const sidebar = React.useRef();
  // verifies if routeName is the one active (in browser input)
  const activeRoute = (routeName) => {
    return location.pathname.indexOf(routeName) > -1 ? "active" : "";
  };
  React.useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(sidebar.current, {
        suppressScrollX: true,
        suppressScrollY: false,
      });
    }
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
    };
  });
  return (
    <div
      className="sidebar"
      data-color={props.bgColor}
      data-active-color={props.activeColor}
    >
      <div className="logo">
        <a href="#" className="simple-text logo-mini"  style={{height:'90%',width:'90%'}}>
          <div className="logo-img">
            <img src={logo} alt="react-logo" id="dilhak_logo"/>
          </div>
        </a>
        {/* <a
          href="https://www.creative-tim.com"
          className="simple-text logo-normal"
        >
          <Creative Tim>
        </a> */}
      </div>
      <div className="sidebar-wrapper" ref={sidebar}>
        <Nav>
          {props.routes.map((prop, key) => {
            return (
              <li className={activeRoute(prop.path) + (prop.pro ? " active-pro" : "")}key={key}>
                <NavLink to={prop.layout + prop.path} className="nav-NavLink">
                  <i className={prop.icon}/>
                  <p>{prop.name}</p>  
                  <Dropdown>
                    <ul style={{listStyleType:'none'}}>
                      <li>{prop.name}</li>
                    </ul>
                  </Dropdown>
                </NavLink>  
              </li>
            );
          })}
        </Nav>
      </div>
    </div>
  );
}

export default Sidebar;

// #############################################################################################################################################

// import React from "react";
// import { NavLink, useLocation } from "react-router-dom";
// import { Dropdown, Nav, Collapse } from "reactstrap";
// import PerfectScrollbar from "perfect-scrollbar";
// import logo from "./img/logo1.png";

// var ps;

// function Sidebar(props) {
//   const location = useLocation();
//   const sidebar = React.useRef();

//   const activeRoute = (routeName) => {
//     return location.pathname.indexOf(routeName) > -1 ? "active" : "";
//   };

//   React.useEffect(() => {
//     if (navigator.platform.indexOf("Win") > -1) {
//       ps = new PerfectScrollbar(sidebar.current, {
//         suppressScrollX: true,
//         suppressScrollY: false,
//       });
//     }
//     return function cleanup() {
//       if (navigator.platform.indexOf("Win") > -1) {
//         ps.destroy();
//       }
//     };
//   });

//   return (
//     <div className="sidebar" data-color={props.bgColor} data-active-color={props.activeColor}>
//       <div className="logo">
//         <a href="#" className="simple-text logo-mini"  style={{height:'90%',width:'90%'}}>
//           <div className="logo-img">
//             <img src={logo} alt="react-logo" id="dilhak_logo"/>
//           </div>
//         </a>
//       </div>
//       <div className="sidebar-wrapper" ref={sidebar}>
//         <Nav>
//           {props.routes.map((prop, key) => {
//             if (prop.subRoutes) {
//               return (
//                 <li key={key}>
//                   <Dropdown isOpen={activeRoute(prop.path) === "active"} toggle={() => {}} className="nav-link">
//                     <NavLink to="#" className={`nav-link ${activeRoute(prop.path)}`} onClick={(e) => e.preventDefault()}>
//                       <i className={prop.icon} />
//                       <p>{prop.name}</p>
//                     </NavLink>
//                     <Collapse isOpen={activeRoute(prop.path) === "active"}>
//                       <Nav>
//                         {prop.subRoutes.map((subProp, subKey) => (
//                           <li key={subKey} className={activeRoute(subProp.path)}>
//                             <NavLink to={subProp.layout + subProp.path} className="nav-link">
//                               <span className="sidebar-mini-icon"><i className={subProp.icon}/></span>
//                               <span className="sidebar-normal">{subProp.name}</span>
//                             </NavLink>
//                           </li>
//                         ))}
//                       </Nav>
//                     </Collapse>
//                   </Dropdown>
//                 </li>
//               );
//             } else {
//               return (
//                 <li className={activeRoute(prop.path)} key={key}>
//                   <NavLink to={prop.layout + prop.path} className="nav-link">
//                     <i className={prop.icon} />
//                     <p>{prop.name}</p>  
//                   </NavLink>  
//                 </li>
//               );
//             }
//           })}
//         </Nav>
//       </div>
//     </div>
//   );
// }

// export default Sidebar;

