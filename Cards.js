
// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card, Button, Modal } from 'react-bootstrap';

// const Cards = () => {
//   const [show, setShow] = useState(false);
//   const [modalContent, setModalContent] = useState({ title: '', text: '' });
//  const [selectedFile, setSelectedFile] = useState(null); // State for the selected file

//   const handleClose = () => setShow(false);
//   const handleShow = (title, text) => {
//     setModalContent({ title, text });
//     setShow(true);
//   };

//   const cardData = [
//     {
//       image: 'https://media.istockphoto.com/id/1493574434/photo/car-rushes-along-the-highway-at-sunset-low-angle-side-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=4aKQvBk6cfHYt5IrYMI5alcs0YUNHvXEr4TizoSkhls=', 
//       title: 'CheckIn Name 1',
//       text: '12th Nov, 2022.',
//       user: 'https://th.bing.com/th?id=OIP.jQvFuRlmVesA7K6ArjfyrAHaH9&w=241&h=259&c=8&rs=1&qlt=90&r=0&o=6&dpr=2&pid=3.1&rm=2',
//       owner: 'John Doe',
//     },
//     {
//       image: 'https://media.istockphoto.com/id/1755927214/photo/ready-for-an-autumn-adventure.webp?a=1&b=1&s=612x612&w=0&k=20&c=_MX_K9cnf4xJ_l8VRDiw2uav7Q8mm6MjIKklOlhro3I=', 
//       title: 'CheckIn Name 2',
//       text: '12th Nov, 2022.',
//       user: 'https://th.bing.com/th?id=OIP.jQvFuRlmVesA7K6ArjfyrAHaH9&w=241&h=259&c=8&rs=1&qlt=90&r=0&o=6&dpr=2&pid=3.1&rm=2',
//       owner: 'John Doe',
//     },
//     {
//       image: 'https://images.unsplash.com/photo-1557657017-ffc7ea60256d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8MzAlMjBjYXJzJTIwb24lMjByb2FkfGVufDB8fDB8fHww', 
//       title: 'CheckIn Name 3',
//       text: '12th Nov, 2022.',
//       user: 'https://th.bing.com/th?id=OIP.jQvFuRlmVesA7K6ArjfyrAHaH9&w=241&h=259&c=8&rs=1&qlt=90&r=0&o=6&dpr=2&pid=3.1&rm=2',
//       owner: 'John Doe',
//     },
//     {
//       image: 'https://media.istockphoto.com/id/1707927462/photo/road-trip-romance.webp?a=1&b=1&s=612x612&w=0&k=20&c=MDijAftG7ds93OCrFRbZ6scF0xy--ayCD_jpOSUItjg=', 
//       title: 'CheckIn Name 4',
//       text: '12th Nov, 2022.',
//       user: 'https://th.bing.com/th?id=OIP.jQvFuRlmVesA7K6ArjfyrAHaH9&w=241&h=259&c=8&rs=1&qlt=90&r=0&o=6&dpr=2&pid=3.1&rm=2',
//       owner: 'John Doe',
//     },
//   ];

//   return (
//     <div className="container mt-4">
//       <h2 className="mb-4"><b>Added CheckIns</b></h2>
//       <div className="row">
//         {cardData.map((card, index) => (
//           <div className="col-md-3 mb-4" key={index}>
//             <Card style={{ width: '15rem', borderRadius: '20px', border: 'none', position: 'relative' }}>
//               <Card.Img variant="top" style={{ padding: '10px', borderRadius: '20px' }} src={card.image} />
//               <Button 
//                 variant="primary" 
//                 style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1, fontSize: '10px', borderRadius: '30px' }}
//                 onClick={() => handleShow(card.title, card.text)}
//               >
//                 Checked In
//               </Button>
//               <Card.Body>
//                 <Card.Title style={{ fontSize: '15px' }}><b>{card.title}</b></Card.Title>
//                 <Card.Text style={{ color: 'gray', fontSize: '12px' }}>{card.text}</Card.Text>
//                 <div className="d-flex align-items-center">
//                   <img 
//                     src={card.user} 
//                     alt="User" 
//                     style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} 
//                   />
//                   <b><span>Owner: {card.owner}</span></b>
//                 </div>
//               </Card.Body>
//             </Card>
//           </div>
//         ))}
//       </div>

//       {/* Modal for showing Check In details */}
//         <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Add Check In</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <h5>{modalContent.title}</h5>
//           <div className="mb-3">
//             <input 
//               type="text" 
//               placeholder="Enter title" 
//               className="form-control" 
//             />
//           </div>
//           <div 
//             className="mb-3 border border-dashed p-3 text-center"
//             onDrop={handleDrop}
//             onDragOver={handleDragOver}
//             style={{ cursor: 'pointer' }}
//           >
//             {selectedFile ? (
//               <p>{selectedFile.name}</p>
//             ) : (
//               <p>Drag and drop an image here, or click to upload</p>
//             )}
//           </div>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button 
//             variant="secondary" 
//             style={{ fontSize: '12px', borderRadius: '20px', backgroundColor: 'white', color: 'black' }} 
//             onClick={handleClose}
//           >
//             Cancel
//           </Button>
//           <Button 
//             variant="secondary" 
//             style={{ fontSize: '12px', borderRadius: '20px', backgroundColor: 'purple', color: 'white' }} 
//             onClick={handleClose}
//           >
//             Add
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Cards;


import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Modal } from 'react-bootstrap';

const Cards = () => {
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', text: '' });
  const [selectedFile, setSelectedFile] = useState(null); // State for the selected file

  const handleClose = () => {
    setShow(false);
    setSelectedFile(null); // Reset the file on close
  };

  const handleShow = (title, text) => {
    setModalContent({ title, text });
    setShow(true);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      setSelectedFile(files[0]); // Set the first file dropped
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Prevent default to allow drop
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      setSelectedFile(files[0]); // Set the first selected file
    }
  };

  const cardData = [
    {
      image: 'https://media.istockphoto.com/id/1493574434/photo/car-rushes-along-the-highway-at-sunset-low-angle-side-view.webp?a=1&b=1&s=612x612&w=0&k=20&c=4aKQvBk6cfHYt5IrYMI5alcs0YUNHvXEr4TizoSkhls=', 
      title: 'CheckIn Name 1',
      text: '12th Nov, 2022.',
      user: 'https://th.bing.com/th?id=OIP.jQvFuRlmVesA7K6ArjfyrAHaH9&w=241&h=259&c=8&rs=1&qlt=90&r=0&o=6&dpr=2&pid=3.1&rm=2',
      owner: 'John Doe',
    },
    {
      image: 'https://media.istockphoto.com/id/1755927214/photo/ready-for-an-autumn-adventure.webp?a=1&b=1&s=612x612&w=0&k=20&c=_MX_K9cnf4xJ_l8VRDiw2uav7Q8mm6MjIKklOlhro3I=', 
      title: 'CheckIn Name 2',
      text: '12th Nov, 2022.',
      user: 'https://th.bing.com/th?id=OIP.jQvFuRlmVesA7K6ArjfyrAHaH9&w=241&h=259&c=8&rs=1&qlt=90&r=0&o=6&dpr=2&pid=3.1&rm=2',
      owner: 'John Doe',
    },
    {
      image: 'https://images.unsplash.com/photo-1557657017-ffc7ea60256d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8MzAlMjBjYXJzJTIwb24lMjByb2FkfGVufDB8fDB8fHww', 
      title: 'CheckIn Name 3',
      text: '12th Nov, 2022.',
      user: 'https://th.bing.com/th?id=OIP.jQvFuRlmVesA7K6ArjfyrAHaH9&w=241&h=259&c=8&rs=1&qlt=90&r=0&o=6&dpr=2&pid=3.1&rm=2',
      owner: 'John Doe',
    },
    {
      image: 'https://media.istockphoto.com/id/1707927462/photo/road-trip-romance.webp?a=1&b=1&s=612x612&w=0&k=20&c=MDijAftG7ds93OCrFRbZ6scF0xy--ayCD_jpOSUItjg=', 
      title: 'CheckIn Name 4',
      text: '12th Nov, 2022.',
      user: 'https://th.bing.com/th?id=OIP.jQvFuRlmVesA7K6ArjfyrAHaH9&w=241&h=259&c=8&rs=1&qlt=90&r=0&o=6&dpr=2&pid=3.1&rm=2',
      owner: 'John Doe',
    },
  ];

  return (
    <div className="container mt-4">
      <h2 className="mb-4"><b>Added CheckIns</b></h2>
      <div className="row">
        {cardData.map((card, index) => (
          <div className="col-md-3 mb-4" key={index}>
            <Card style={{ width: '15rem', borderRadius: '20px', border: 'none', position: 'relative' }}>
              <Card.Img variant="top" style={{ padding: '10px', borderRadius: '20px' }} src={card.image} />
              <Button 
                variant="primary" 
                style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 1, fontSize: '10px', borderRadius: '30px' }}
                onClick={() => handleShow(card.title, card.text)}
              >
                Checked In
              </Button>
              <Card.Body>
                <Card.Title style={{ fontSize: '15px' }}><b>{card.title}</b></Card.Title>
                <Card.Text style={{ color: 'gray', fontSize: '12px' }}>{card.text}</Card.Text>
                <div className="d-flex align-items-center">
                  <img 
                    src={card.user} 
                    alt="User" 
                    style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} 
                  />
                  <b><span>Owner: {card.owner}</span></b>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

    
 
    </div>
  );
};

export default Cards;
