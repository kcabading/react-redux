import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {

    render() {
        return (
            <div className='jumbotron' >
                <h1> React Redux Home Page </h1>
                <p>Testing React Redux</p>
                <Link to='about' className='btn btn-primary btn-lg'> Learn more</Link>
            </div>
        );
    }
}

export default HomePage;