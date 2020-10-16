import React from 'react';

const MainContent = (props) => {
  return (
    <React.Fragment>
      <div className='container'>{props.children}</div>
    </React.Fragment>
  );
};

export default MainContent;
