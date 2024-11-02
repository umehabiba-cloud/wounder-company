

import { getFirestore, collection, addDoc } from "firebase/firestore"; 

import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Main = () => {
  const [show, setShow] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [title, setTitle] = useState('');

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setSelectedFile(event.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleAdd = () => {
    if (selectedFile && title) {
      console.log("Title:", title);
      console.log("Selected File:", selectedFile);
      
      // Here you can add logic to handle the file and title, 
      // like sending it to another API or processing it

      // Reset the form
      setSelectedFile(null);
      setTitle('');
      handleClose();
    } else {
      alert("Please enter a title and select a file.");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission
    handleAdd();
  };

  return (
    <div
      className="container"
      style={{
        backgroundImage: 'url(https://media.istockphoto.com/id/157523701/photo/sports-car-on-country-road.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZYvA3OckVRKedCaflh-7oW0-Gq91dHYezhcUxqYKndk=)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '350px',
        borderRadius: '20px'
      }}
    >
      <div className="row h-100 align-items-center">
        <div className="col-md-6 text-white">
          <h1 style={{ color: 'white', marginLeft: '20px' }}>Hi! James Doe</h1>
          <p style={{ color: 'white', marginLeft: '20px' }}>
            Lorem ipsum dolor sit amet, something important to say here
          </p>
          <button
            onClick={handleShow}
            style={{
              color: 'white',
              backgroundColor: '#6a5acd',
              borderRadius: '20px',
              padding: '10px 20px',
              border: 'none',
              cursor: 'pointer',
              marginLeft: '20px',
            }}
          >
            Add Check In
          </button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Check In</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <h5>Title</h5>
            <div className="mb-3">
              <input 
                type="text" 
                placeholder="Enter title" 
                className="form-control" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            
            <h5>Upload Image</h5>
            <div 
              className="mb-3 border border-dashed p-3 text-center"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              style={{ cursor: 'pointer' }}
            >
              {selectedFile ? (
                <p>{selectedFile.name}</p>
              ) : (
                <>
                  <img 
                    src="https://th.bing.com/th?id=OIP.tYoZDaFuXWkTOUzy5sxUWAHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=2&pid=3.1&rm=2"
                    alt="Upload icon"
                    style={{ width: '50px', marginBottom: '8px' }}
                  />
                 <b><p style={{ marginBottom: '4px' }}>Click or drag and drop an image here to upload</p></b>
                 <p style={{ marginBottom: '4px',fontSize:'12px',color:'gray' }}>Support for a single or bulk upload. stricklypohibit fromuploading complete data or other bard files</p>
              </>
              )}
              <input 
                type="file"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="fileUpload"
              />
              <label htmlFor="fileUpload" style={{ cursor: 'pointer' }}>
                <p className="mt-2" style={{fontSize:'12px'}}>Choose file</p>
              </label>
            </div>
           
          </form>
        </Modal.Body>
        <Modal.Footer>
                 <Button 
              variant="primary" 
              type="submit"
            >
              Add
            </Button>
          <Button 
            variant="secondary" 
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Main;







// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
// import React, { useState } from 'react';
// import { Modal, Button } from 'react-bootstrap';

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC2sdx5i3NC1rXZkAuexNeRKlND__X-RBs",
//   authDomain: "cardsdata-f734e.firebaseapp.com",
//   projectId: "cardsdata-f734e",
//   storageBucket: "cardsdata-f734e.appspot.com",
//   messagingSenderId: "320616615751",
//   appId: "1:320616615751:web:617f25257cb4ac35560662",
//   measurementId: "G-4886CSKYY6"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const storage = getStorage(app); // Initialize Storage

// const Main = () => {
//   const dbref = collection(db, "hello");
//   const [show, setShow] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [title, setTitle] = useState('');

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleDrop = (event) => {
//     event.preventDefault();
//     if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
//       setSelectedFile(event.dataTransfer.files[0]);
//     }
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const uploadFile = async (file) => {
//     const storageRef = ref(storage, `images/${file.name}`);
//     await uploadBytes(storageRef, file);
//     const fileURL = await getDownloadURL(storageRef);
//     return fileURL;
//   };

//   const handleAdd = async () => {
//     if (selectedFile && title) {
//       try {
//         const uploadedFileUrl = await uploadFile(selectedFile);
//         await addDoc(dbref, {
//           title: title,
//           imageUrl: uploadedFileUrl,
//           createdAt: new Date(),
//         });
//         alert("Successfully added");
//         // Reset the form
//         setSelectedFile(null);
//         setTitle('');
//         handleClose();
//       } catch (e) {
//         console.error("Error adding document: ", e);
//         alert("Error adding document, check the console.");
//       }
//     } else {
//       alert("Please enter a title and select a file.");
//     }
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     handleAdd();
//   };

//   return (
//     <div
//       className="container"
//       style={{
//         backgroundImage: 'url(https://media.istockphoto.com/id/157523701/photo/sports-car-on-country-road.webp?a=1&b=1&s=612x612&w=0&k=20&c=ZYvA3OckVRKedCaflh-7oW0-Gq91dHYezhcUxqYKndk=)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         height: '350px',
//         borderRadius: '20px'
//       }}
//     >
//       <div className="row h-100 align-items-center">
//         <div className="col-md-6 text-white">
//           <h1 style={{ color: 'white', marginLeft: '20px' }}>Hi! James Doe</h1>
//           <p style={{ color: 'white', marginLeft: '20px' }}>
//             Lorem ipsum dolor sit amet, something important to say here
//           </p>
//           <button
//             onClick={handleShow}
//             style={{
//               color: 'white',
//               backgroundColor: '#6a5acd',
//               borderRadius: '20px',
//               padding: '10px 20px',
//               border: 'none',
//               cursor: 'pointer',
//               marginLeft: '20px',
//             }}
//           >
//             Add Check In
//           </button>
//         </div>
//       </div>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Check In</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleSubmit}>
//             <h5>Title</h5>
//             <div className="mb-3">
//               <input 
//                 type="text" 
//                 placeholder="Enter title" 
//                 className="form-control" 
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//             </div>
            
//             <h5>Upload Image</h5>
//             <div 
//               className="mb-3 border border-dashed p-3 text-center"
//               onDrop={handleDrop}
//               onDragOver={handleDragOver}
//               style={{ cursor: 'pointer' }}
//             >
//               {selectedFile ? (
//                 <p>{selectedFile.name}</p>
//               ) : (
//                 <>
//                   <img 
//                     src="https://th.bing.com/th?id=OIP.tYoZDaFuXWkTOUzy5sxUWAHaHa&w=250&h=250&c=8&rs=1&qlt=90&r=0&o=6&dpr=2&pid=3.1&rm=2"
//                     alt="Upload icon"
//                     style={{ width: '50px', marginBottom: '8px' }}
//                   />
//                   <b><p style={{ marginBottom: '4px' }}>Click or drag and drop an image here to upload</p></b>
//                   <p style={{ marginBottom: '4px',fontSize:'12px',color:'gray' }}>Support for a single or bulk upload. stricklypohibit fromuploading complete data or other bard files</p>
//                 </>
//               )}
//               <input 
//                 type="file"
//                 onChange={handleFileChange}
//                 style={{ display: 'none' }}
//                 id="fileUpload"
//               />
//               <label htmlFor="fileUpload" style={{ cursor: 'pointer' }}>
//                 <p className="mt-2">Choose file</p>
//               </label>
//             </div>
            
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
        //  <Button 
        //       variant="primary" 
        //       type="submit"
        //     >
        //       Add
        //     </Button>
//           <Button 
//             variant="secondary" 
//             onClick={handleClose}
//           >
//             Cancel
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Main;
