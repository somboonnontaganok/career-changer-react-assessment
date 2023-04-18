import React , { useState }from 'react';
import Admin from './Admin';
import NormalUser from './NormalUser';
import User from './User'
const Sector = (props) => {
    const _sector = this.props.sector;
    return (
  
    <div className="Sector">
      
      {(() => {
        switch (_sector) {
          case 'sectorAdmin':
            return <Admin/>
          case 'sectorNormalUser':
            return <NormalUser />
          
          default:
            return null
          
        }
      }) ()}
    </div>
    )
}
 
export default Sector;