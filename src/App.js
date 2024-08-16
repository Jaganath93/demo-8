import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
     
    </div>
  );
}

export default App;


// import { useState } from "react";
// import { CloseButton, Col, Container, Row } from "react-bootstrap";
// import Modal from "react-bootstrap/Modal";
// import styles from "../../styles/auth/forgotpassword.module.css";
// import Image from "next/image";
// import ThirdYearOfCeleb from "../../assets/images/Thirdyear-celebration.png";
// import Link from "next/link";

// const Third_YearOf_Celebration = () => {
//   const [show, setShow] = useState(true);

//   const handleClose = () => setShow(false);
//   return (
//     <>
//       <Modal show={show} onHide={handleClose} centered className="mt-5 mt-md-3">
//         <div className="border-0 px-4 d-flex text-muted justify-content-end mt-3 mb-0">
//           <p
//             className="fontFam_montserrat px-1 fw_600 fs_xs_12 fs_12"
//             role="button"
//             onClick={handleClose}
//           >
//             DISMISS
//             <CloseButton className="fw_600 fs_xs_9 fs_11 ms-1" />
//           </p>
//         </div>
//         <div className="d-flex flex-column">
//           <p
//             className={`text-center ${styles.forgotpass_color_navyblue} fontFam_montserrat fs_xs_22 fs_27 fw_700 mb-0`}
//           >
//             Power Of Three!
//           </p>
//           <p
//             className={`text-center ${styles.forgotpass_color_navyblue} fontFam_montserrat fs_xs_14 fs_19 fw_500 text-balance`}
//           >
//             Celebrating smarter wealth creation!
//           </p>
//         </div>
//         <div className="text-center">
//           <Image
//             src={ThirdYearOfCeleb}
//             height={210}
//             width={250}
//             className=" p-md-0"
//             alt=""
//           />
//         </div>
//         <Modal.Body
//           className={`text-center border border-0 mx-2 ms-4 px-3 ${styles.forgotpass_color_navyblue} fontFam_montserrat fs_xs_12 fs_16 fw_500`}
//         >
//           Get select benefits whether you've been with us for these 3 years or
//           are just beginning your journey!
//         </Modal.Body>
//         <Modal.Footer className="border-0 mb-1">
//           <Container>
//             <Row>
//               <Col sm={12} md={6}>
//                 <Link href="/invite-you">
//                   <button
//                     className={`w-100 mb-1 mb-md-0 secondary_bg primary_color text-center  fw_600 fs_xs_11 fs_14 fontFam_montserrat border-0 rounded-2 py-2 px-2`}
//                     onClick={handleClose}
//                   >
//                     ACCESS BENEFITS
//                   </button>
//                 </Link>
//               </Col>
//               <Col sm={12} md={6}>
//                 <Link href="/auth/sign-up/select-profile-type?comingFrom=">
//                   <button
//                     className={`w-100 mt-1 mt-md-0 primary_bg ${styles.forgotpass_color_navyblue} fw_600 fs_xs_11 fs_14 fontFam_montserrat border-0 rounded-2 py-2 px-2`}
//                     onClick={handleClose}
//                   >
//                     SIGN UP TO UNLOCK
//                   </button>
//                 </Link>
//               </Col>
//             </Row>
//           </Container>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default Third_YearOf_Celebration;
