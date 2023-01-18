import React from "react";

const Demo = (props) => {
  console.log('Demo RUNNING');

  return (
    <p>{props.show ? 'This is new Demo' : ''}</p>
  );
}

// export default Demo;
export default React.memo(Demo);