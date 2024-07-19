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
  return (
    <div className='cta'>
        <a href={CV} download className='btn' target='_blank' rel="noopener noreferrer">Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  );
}

export default CTA;
