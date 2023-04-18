import React from 'react';
import Layout from './Layout';
import myPicture from './assets/somboonnontaganok.jpeg';

const Owner = () => {
    return (
        <Layout>
            <h1>Somboon Nontaganok - Group B1 - 46</h1>
            <img src={myPicture} width={270}/>
            <h3>Short Biography:</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Layout>
        
     );
}
 
export default Owner;