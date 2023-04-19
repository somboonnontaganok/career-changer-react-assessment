import React, { useState } from 'react';
import Layout from './components/Layout';

const Admin = ({database, addEmployees, stateDatabase}) => {

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [position, setPosition] = useState('');
    const [id, setId] = useState(database.length);

    const create = (name, lastname, position) => {
        let prevId = id;
        prevId = prevId +1
        setId(prevId);
        addEmployees({id:id, name: name, lastname: lastname, position: position});
    }

    const deleteTableRows = (id) => {
        // alert ('You will detroy your data');
        const rows = [...database];
        rows.splice(id, 1);
        stateDatabase([...rows]);
    }

    const confirmDelete = (id) => {
        let text = "Press a button!\nEither OK or Cancel.";
        if (confirm(text) == true) {
            deleteTableRows(id);
        } else {
            alert("You canceled!");
        }

        
    }

    const deleteAllTableRows = () => {
        $('#table').detach();
        $("#GFG_DOWN").text
            ("All rows of the table are deleted.");
    }

    

    return ( 
        <div>
            <h4>Create User Here</h4>
            <div>
                <input type='text' placeholder='name' onChange={(e) => setName(e.target.value)} />
                <input type='text' placeholder='lastname' onChange={(e) => setLastname(e.target.value)} />
                <input type='text' placeholder='position' onChange={(e) => setPosition(e.target.value)} />
                <button onClick={() => {
              
              create(name, lastname, position)
              }}>Save</button>
            </div>
            <table id='table'>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                    <th>Action</th>
                </tr>
                {database.map((item, id) =>{
                        return (
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.lastname}</td>
                                <td>{item.position}</td>
                                <td><button onClick={() => {
                                    confirmDelete(id)
                                }}>Delete</button></td>
                            </tr>
                        )
                    })}
                </table>  
        </div>
     );
}
 
export default Admin;