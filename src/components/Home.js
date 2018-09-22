import React, {Component} from 'react';
import './Home.css';
import logo from '../pictures/logo.png';

class Home extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        return(
            <div ClassName='Home'>
                <img className='logo' src={logo} alt="logo"/>
            </div>
        )
    }
}

export default Home;