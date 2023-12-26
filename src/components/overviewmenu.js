import { useState,useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CloseButton from 'react-bootstrap/CloseButton';

export default function Overviewmenu() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className='position-absolute top-0 start-0' style={{backgroundColor:'#000',border:'none'}}>
       <span class="navbar-toggler-icon"></span>
      </Button>

      <Offcanvas show={show} scroll={true} placement='top' className='text-bg-dark' style={{height:'100vh',opacity:'0.6'}}>
        <Offcanvas.Header>
          {/* <Offcanvas.Title>Offcanvas</Offcanvas.Title> */}
          <CloseButton onClick={handleClose} className='text-bg-dark' />
        </Offcanvas.Header>
        <Offcanvas.Body className='bg-dark text-center'>
          <ul className='overviecanvas'>
            <li><a href='#cms'>CMS</a></li>
            <li><a href='#'>Swasti</a></li>
            <li><a href='#'>Vrutti</a></li>
            <li><a href='#'>Fuzhio</a></li>
            <li><a href='#'>GREEN Foundation</a></li>
            <li><a href='#'>Catalyst Foundation</a></li>
            <li><a href='#upfront' data-bs-dismiss="offcanvas">Upfront</a></li>
            <li><a href='#'>Community Action Collab</a></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
