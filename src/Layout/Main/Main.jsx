// import React, { useEffect, useState } from "react";
// import movieTrailer from 'movie-trailer';

// const Main = () => {
//   const [trailerUrl, setTrailerUrl] = useState('');

//   useEffect(() => {
//     const fetchTrailer = async () => {
//       try {
//         const response = await movieTrailer('Up');
//         const urlParams = new URLSearchParams(new URL(response).search);
//         setTrailerUrl(urlParams.get('v'));
//       } catch (error) {
//         console.error('Error fetching trailer:', error);
//       }
//     };

//     fetchTrailer();
//   }, []);

//   return (
//     <div>
//       {trailerUrl && (
//         <iframe
//           width="100%"
//           height="685"
//           src={`https://www.youtube.com/embed/${trailerUrl}`}
//           title="YouTube video player"
//           frameBorder="0"
//           allowFullScreen
//         />
//       )}
//     </div>
//   );
// };

// export default Main;
