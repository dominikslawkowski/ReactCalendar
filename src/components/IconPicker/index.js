import React, { Fragment } from "react";

const chooseIcon = (name) => {
  switch(name) {
    case "home":
      return (
        <Fragment>
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
          <path d="M0 0h24v24H0z" fill="none"/>
        </Fragment>
      );
    case "calendar":
      return(
        <Fragment>
           <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
           <path d="M0 0h24v24H0z" fill="none"/>
        </Fragment>
      );
    case "reservation":
      return(
        <Fragment>
          <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z"/>
          <path d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
        </Fragment>
      );
    case "teams":
      return (
        <Fragment>
         <path d="M0 0h24v24H0z" fill="none"/>
         <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/> 
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
    case "add":
      return(
        <Fragment>
         <path d="M0 0h24v24H0z" fill="none"/>
         <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
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