import React, { Fragment } from "react";

const chooseIcon = (name) => {
  switch (name) {
    case "home":
      return (
        <Fragment>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </Fragment>
      );
    case "reservation":
      return(
        <Fragment>
           <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
           <path d="M0 0h24v24H0z" fill="none"/>
        </Fragment>
      );
    case "stats":
      return(
        <Fragment>
           <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
           <path d="M0 0h24v24H0z" fill="none"/>
        </Fragment>
      );
    case "arrow-left":
      return(
        <Fragment>
          <path d="M0 0h24v24H0z" fill="none"/>
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
        </Fragment>
      );        
    case "arrow-right":
      return(
        <Fragment>
         <path d="M0 0h24v24H0z" fill="none"/>
         <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"/>
        </Fragment>
      );
      
    default:
      return <path />;
  }
};

export const IconPicker = ({
  name = "home",
  height = "24",
  width = "24"
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24">
    {chooseIcon(name)}
  </svg>
);