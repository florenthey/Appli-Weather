import React from 'react';
import Image from './Image'

const Infos = (props) => {
  //console.log(props.info)

    return(

      <div>
        <h3>Location: { props.info.name }</h3>
        <h3>Humidity: { props.info.main.humidity }%</h3>
        <h3>Temperature: { Math.floor(props.info.main.temp -273.15) }°C</h3>
        <h3>Condition: { props.info.weather[0].main }</h3>
        <Image conditions={ props.info.weather[0].main } />
      </div>
    )


}


export default Infos;