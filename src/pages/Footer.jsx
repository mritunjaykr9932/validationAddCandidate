import React, { useContext } from 'react';
import './footer.css'
import { Navigate } from 'react-router-dom';



 

function Footer() {
    // const history = Navigate();
   const handle = () => {
    //  props.setPage((currentPage) => currentPage + 1);

        // history(-1);
     
   };
    
  return (
    <div>
      <div className="footer">
       
        <button
          className="footer-button"
        //   disabled={props.page === props.formtitle.length - 1}
          // onClick={() => {
          //   setPage((currentPage) => currentPage + 1);
          // }}

          onClick={handle}
        >
          Finish
        </button>
      </div>
    </div>
  );
}

export default Footer
