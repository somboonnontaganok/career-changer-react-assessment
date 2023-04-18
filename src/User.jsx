import React, { useState } from 'react';
import Sector from './Sector';

const User = () => {
    const [sector, setSector] = useState('');
    const handleClick = (sectorState) => {
        setSector(sectorState)
      }
    //   console.log({sector})
    return (
        <>
            <hr />
            <h1>Generation Thailand</h1>
            <h1>React-Assessment</h1>
            <button onClick={() => handleClick('normalUser') }>User Home Sector</button>
            
            <button onClick={() => handleClick('admin')}>Admin Home Sector</button>
            {/* <button onClick={ () => props.handleClick('lost')}>Lost the Game</button> */}
            <Sector />
        </>
            
    )
}

export default User