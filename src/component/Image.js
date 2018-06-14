import React from 'react';

const Image = (props) => {

  const {} = props;
  // console.log(props.conditions)

    return(

     <div>
       <img src={`./image/${props.conditions}.png`} alt=''/>
     </div>
    )

}


export default Image;