import React from 'react';
import { Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";

function PdfModal(props) {
  return (
    <div className="pdf-modal-background">
      <div className="pdf-modal-container">
        <Viewer fileUrl={props.Url} />
      </div>
    </div>
  );
}

export default PdfModal