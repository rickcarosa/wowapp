import React, {Component} from 'react';
import './Home.css';
import logo from '../pictures/logo.png';
import axios from 'axios';

class Home extends Component {
    constructor(){
        super()
        this.state = {
            baseUrl: 'https://us.api.battle.net/wow',
            pictureUrl: 'http://render-us.worldofwarcraft.com/character/',
            charInput: '',
            realmInput: '',
            stats: {},
            items: {}
        }

        this.addCharacter = this.addCharacter.bind(this);
        this.addRealm = this.addRealm.bind(this);
    }

    addCharacter(value){
        this.setState({
            charInput: value
        })
    }

    addRealm(value){
        this.setState({
            realmInput: value
        })
    }

    getStats(){
        //make call to blizzard api
        axios.get(`${this.state.baseUrl}/character/${this.state.realmInput}/${this.state.charInput}?fields=stats&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
            this.setState({
                stats: res.data
            })
            console.log(this.state.stats)
            console.log(this.state.stats.level)
        })
    }

    getItems(){
        //make call to blizzard api
        axios.get(`${this.state.baseUrl}/character/${this.state.realmInput}/${this.state.charInput}?fields=items&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
            this.setState({
                items: res.data
            })
            console.log(this.state.items)
        })
    }

    render(){
        //style for avatar
        let style = {
            background: `url(${this.state.pictureUrl}${this.state.stats.thumbnail})`,
            width: '4rem',
            height: '4rem',
            backgroundPosition: 'center',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            marginLeft: '5px',
            position: 'relative',
            borderRadius: '5%',
            border: '1px solid rgba(255, 249, 6, 0.5)'
        }

        return(
            <section className='Home'>
                <img className='logo' src={logo} alt="logo"/>
                <div className='data'>
                    <input className='character' placeholder='Character Name' type="text" onChange = {(event) => this.addCharacter(event.target.value)}/>
                    <input className='realm' placeholder='Realm Name' type="text" onChange = {(event) => this.addRealm(event.target.value)}/>
                    <button className='search' onClick={() => {this.getStats(); this.getItems()}}> Search </button>
                </div>

                {/* data for player div */}
                <div className='infoBox'>

                    {/* div and svgs for closing the info container */}
                    <div className='closeBox'>
                        <div className='hexagon'>
                                <div className='x'>

                                </div>
                        </div>
                    </div>

                    <div className='statsBox'>
                        <div className='info'>

                                {/* check to see if value is true and retrun data from object */}
                                {
                                    this.state.stats.stats 
                                    ?
                                    <div className='attributes'>
                                        <h1 className='heading'> Attributes </h1>
                                        <p className='tag'> Level <span> {this.state.stats.level} </span> </p>
                                        <p className='tag'> Health <span> {this.state.stats.stats.health} </span> </p>
                                        <p className='tag'> Strength <span> {this.state.stats.stats.str} </span> </p>
                                        <p className='tag'> Agility <span style={{color: 'turquoise'}}> {this.state.stats.stats.agi} </span> </p>
                                        <p className='tag'> Intillect <span> {this.state.stats.stats.int} </span> </p>
                                        <p className='tag'> Stamina <span style={{color: 'turquoise'}}> {this.state.stats.stats.sta} </span> </p>
                                        <h1 className='heading'> Enhancements </h1>
                                            <p className='tag'> Haste <span> {this.state.stats.stats.haste.toFixed(2)}% </span> </p> 
                                    </div>
                                    :
                                    null
                                }
                        </div>
                    </div>

                    <div className='itemBox'>
                        <div className='info'>

                                {
                                    this.state.items.items
                                    ?
                                    <div className='tableContainer'> 
                                    <h1 className='itemHeading'> My Item Sets </h1>
                                    {/* avatar imgage */}
                                    <div className='picture' style={style}> <p className='pvp'> PvP </p> </div>
                                    <table className='table'>
                                        <tbody>
                                            <tr>
                                                <td> Helm </td>
                                                <td> {this.state.items.items.head.name} </td>
                                                <td> {this.state.items.items.head.itemLevel} </td>
                                            </tr>
                                            <tr>
                                                <td> Chest </td>
                                                <td> {this.state.items.items.chest.name} </td>
                                                <td> {this.state.items.items.chest.itemLevel} </td>
                                            </tr>
                                            <tr>
                                                <td> Shoulders </td>
                                                <td> {this.state.items.items.shoulder.name} </td>
                                                <td> {this.state.items.items.shoulder.itemLevel} </td>
                                            </tr>
                                            <tr>
                                                <td> Legs </td>
                                                <td> {this.state.items.items.legs.name} </td>
                                                <td> {this.state.items.items.legs.itemLevel} </td>
                                            </tr>
                                            <tr>
                                                <td> Feet </td>
                                                <td> {this.state.items.items.feet.name} </td>
                                                <td> {this.state.items.items.feet.itemLevel} </td>
                                            </tr>
                                            <tr>
                                                <td> Trinket </td>
                                                <td> {this.state.items.items.trinket1.name} </td>
                                                <td> {this.state.items.items.trinket1.itemLevel} </td>
                                            </tr>
                                            <tr>
                                                <td> Back </td>
                                                <td> {this.state.items.items.back.name} </td>
                                                <td> {this.state.items.items.back.itemLevel} </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    </div>
                                    :
                                    null
                                }
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Home;