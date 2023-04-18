import React from 'react';

const Employee = ({database}) => {
    return ( 
        <>
            <table>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                </tr>
                {database.map(item => 
                    <tr>
                        <td>{item.name}</td>
                        <td>{item.lastname}</td>
                        <td>{item.position}</td>
                    </tr>
                )}
            </table>
        </>
     );
}
 
export default Employee;