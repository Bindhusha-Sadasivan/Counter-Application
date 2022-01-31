// import React from "react";
// class Navbar extends React.Component {
//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-light bg-light">
//           <div className="container-fluid">
//             <a className="navbar-brand" href="#">
//               Navbar
//               <span className="badge bg-pill bg-secondary">
//                 {this.props.totalCounters}
//               </span>
//             </a>
//           </div>
//         </nav>
//       </div>
//     );
//   }
// }

// export default Navbar;

// ==================================================================================

import React from "react";

const Navbar = ({ totalCounters }) => {
  // console.log("Nav Rendered");
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
            <span className="badge bg-pill bg-secondary">{totalCounters}</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
