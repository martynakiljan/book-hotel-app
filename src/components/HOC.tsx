/** @format */

import React from "react";
import { HotelProps } from "../type/type";
import Highlight from "./Highlight";

const withHighlight = (
  WrappedComponent: React.FC<{ hotel: HotelProps }>
): React.FC<{ hotel: HotelProps }> => {
  const WithFeaturedHighlight: React.FC<{ hotel: HotelProps }> = ({
    hotel,
  }) => {
    if (hotel.featured) {
      return (
        <Highlight>
          <WrappedComponent hotel={hotel} />
        </Highlight>
      );
    } else {
      return <WrappedComponent hotel={hotel} />;
    }
  };

  return WithFeaturedHighlight;
};

export default withHighlight;



// const withHighlight = (WrappedComponent) => {
//   const WithFeaturedHighlight = ({ hotel }) => {
//     // Logika HOC
//     if (hotel.featured) {
//       return (
//         <Highlight>
//           <WrappedComponent hotel={hotel} />
//         </Highlight>
//       );
//     } else {
//       return <WrappedComponent hotel={hotel} />;
//     }
//   };

//   return WithFeaturedHighlight;
// };
