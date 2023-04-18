import React from 'react';
import Layout from './components/Layout';
import myPicture from './assets/somboonnontaganok.jpeg';

const Owner = () => {
    return (
        <Layout>
            <h1>Somboon Nontaganok - Group B1 - 46</h1>
            <img src={myPicture} width={270}/>
            <h3>Short Biography:</h3>
            <p>I have experience in IT related for 4 years. I solved problem about silo management by using IoT RADAR sensor to calculate amount of remaining cement in CPAC silo  and Javascipt to query data from sql server for matching customer need.</p>
        </Layout>
        
     );
}
 
export default Owner;