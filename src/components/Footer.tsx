import React from 'react'

function Footer() {
  return (
    <>
      <footer className="footer bg-base-200 text-base-content p-10 ">
        <aside>
          <img
            src="https://ldceweb.netlify.app/img/ldce-logo.png"
            width="100"
            height="100"
            className="fill-current"
          ></img>
         
        </aside>
        <nav>
          <h6 className="footer-title">History</h6>
          <a className="link link-hover">Admission Procedure</a>
          <a className="link link-hover">Directions</a>
          <a className="link link-hover">Fees & Description</a>
          <a className="link link-hover">Commities</a>
        </nav>
        <nav>
          <h6 className="footer-title">Campus Map</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Useful Links</a>
          <a className="link link-hover">Student Induction</a>
        </nav>
        <nav>
          <h6 className="footer-title">MOU</h6>
          <a className="link link-hover">TEQIP</a>
          <a className="link link-hover">Tender Notice</a>
          <a className="link link-hover">Campus Map</a>
        </nav>
      </footer>
    </>
  );
}

export default Footer