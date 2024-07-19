// import React from 'react'
// import CV from "../../assets/Khushi's resume.pdf";

// const CTA = () => {
//   return (
//     <div className='cta'>
//         <a href={CV} download className='btn' target='_blank'>Download CV</a>
//         <a href='#contact' className='btn btn-primary'>Let's Talk</a>
//     </div>
//   )
// }

// export default CTA

import React from 'react';
import CV from "../../assets/Khushi's resume.pdf";

const CTA = () => {
  const handleDownloadClick = (event) => {
    event.preventDefault();
    // Open the resume in a new tab
    const newWindow = window.open(CV, '_blank');
    newWindow.opener = window;

    // Trigger the download
    const link = document.createElement('a');
    link.href = CV;
    link.download = "Khushi's resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='cta'>
        <a href={CV} className='btn' target='_blank' onClick={handleDownloadClick}>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  );
}

export default CTA;
