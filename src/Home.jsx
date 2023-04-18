import React, {useState} from 'react';
import Layout from './Layout';
import User from './User';
import Admin from './Admin';


const Home = () => {
  const [sector, setSector] = useState();

  return (
    <Layout>
        <User/>
    </Layout>
      
  )
}




export default Home
