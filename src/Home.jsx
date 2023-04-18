import React, {useState} from 'react';
import Layout from './components/Layout';
import Admin from './Admin';
import Employee from './components/Employee';

const MockEmployees = [
  {
    id: 0,
    name: "mock",
    lastname: 'mocklastname',
    position: "Manager"
  },
  {
    id: 1,
    name: "employee 1",
    lastname: "em",
    position: "Engineer"
  },
  {
    id: 2,
    name: "employee 2",
    lastname: "lord",
    position: "Designer"
  }
]

const Home = () => 
{
  const [sector, setSector] = useState();
  const [database, setDatabase] = useState(MockEmployees);
  const [heading, setHeading] = useState('React - Assessment');

  const addEmployees = (newDatabase) => {
    let prevEmployees = database;
    let employees = [...prevEmployees, newDatabase ]
    setDatabase(employees);
  }

  
  return (
    <Layout>
        <div>
          <h1>Generation Thailand <br></br>{heading}</h1>
          <button onClick={() => {
            setHeading("Home - User Sector")
            setSector('user')}}>User Home Sector
          </button>
          <button onClick={() => {
            setHeading("Home - Admin Sector")
            setSector('admin')}}>Admin Home Sector
          </button>
          {
  sector === 'admin' ? <div><Admin database={database} addEmployees ={addEmployees} stateDatabase={setDatabase}/></div> 
  : sector === 'user' ? <div><Employee database={database} /></div>
  : sector === null
  }
      </div>
    </Layout>
      
  )
}

export default Home
