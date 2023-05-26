import React, { Component } from 'react';

const AvatarImg = (props) => {
    return (
      <div>
        <img src={props.src} alt={props.alt} style={props.style} />
      </div>
    );
  };
  
  export default AvatarImg;