import React, {Component} from 'react';
import './Home.css';
import logo from '../pictures/logo.png';
import axios from 'axios';
import {Hexagon, Close} from '../pictures/close.js'

class Home extends Component {
    constructor(){
        super()
        this.state = {
            baseUrl: 'https://us.api.battle.net/wow',
            pictureUrl: 'http://render-us.worldofwarcraft.com/character/',
            charInput: '',
            realmInput: '',
            stats: {},
            items: {},
            dataDiv: false,
            tom: {},
            john: {},
            mark: {},
            alex: {},
            nick: {},
            mike: {}
        }
    }

    // on page load, avatars are loaded for 6 comparable players
    componentDidMount(){
        axios.get(`${this.state.baseUrl}/character/arygos/tom?fields=stats&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
            axios.get(`${this.state.baseUrl}/character/arygos/john?fields=stats&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
                axios.get(`${this.state.baseUrl}/character/arygos/mark?fields=stats&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
                    axios.get(`${this.state.baseUrl}/character/arygos/alex?fields=stats&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
                        axios.get(`${this.state.baseUrl}/character/arygos/nick?fields=stats&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
                            axios.get(`${this.state.baseUrl}/character/arygos/mike?fields=stats&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
                                this.setState({
                                    mike: res.data
                                })
                            })
                            this.setState({
                                nick: res.data
                            })
                        })
                        this.setState({
                            alex: res.data
                        })
                    })
                    this.setState({
                        mark: res.data
                    })
                })
                this.setState({
                    john: res.data
                })
            })
            this.setState({
                tom: res.data
            })
        })
    }

    //add character when typed in input value, i used bob
    addCharacter(value){
        this.setState({
            charInput: value
        })
    }

    //add realm when typed in input value, i used arygos
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
            // console.log(this.state.stats)
            // console.log(this.state.stats.level)
        })
    }

    getItems(){
        //make call to blizzard api
        axios.get(`${this.state.baseUrl}/character/${this.state.realmInput}/${this.state.charInput}?fields=items&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
            this.setState({
                items: res.data
            })
            // console.log(this.state.items)
        })
    }

    //conditional rendering the info and stats div
    closeDiv(){
        this.setState({
            dataDiv: !this.state.dataDiv
        })
    }

    //methods for 6 hardcoded characters to compare to get stats, when picture is clicked it will pull stats
    getTom(){
        axios.get(`${this.state.baseUrl}/character/arygos/tom?fields=stats&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
            axios.get(`${this.state.baseUrl}/character/arygos/tom?fields=items&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
                this.setState({
                    items: res.data
                })
            })
            this.setState({
                stats: res.data
            })
        })
    }

    getJohn(){
        axios.get(`${this.state.baseUrl}/character/arygos/john?fields=stats&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
            axios.get(`${this.state.baseUrl}/character/arygos/john?fields=items&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
                this.setState({
                    items: res.data
                })
            })
            this.setState({
                stats: res.data
            })
        })
    }

    getMark(){
        axios.get(`${this.state.baseUrl}/character/arygos/mark?fields=stats&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
            axios.get(`${this.state.baseUrl}/character/arygos/mark?fields=items&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
                this.setState({
                    items: res.data
                })
            })
            this.setState({
                stats: res.data
            })
        })
    }

    getAlex(){
        axios.get(`${this.state.baseUrl}/character/arygos/alex?fields=stats&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
            axios.get(`${this.state.baseUrl}/character/arygos/alex?fields=items&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
                this.setState({
                    items: res.data
                })
            })
            this.setState({
                stats: res.data
            })
        })
    }

    getNick(){
        axios.get(`${this.state.baseUrl}/character/arygos/nick?fields=stats&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
            axios.get(`${this.state.baseUrl}/character/arygos/nick?fields=items&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
                this.setState({
                    items: res.data
                })
            })
            this.setState({
                stats: res.data
            })
        })
    }

    getMike(){
        axios.get(`${this.state.baseUrl}/character/arygos/mike?fields=stats&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
            axios.get(`${this.state.baseUrl}/character/arygos/mike?fields=items&locale=en_US&apikey=${process.env.REACT_APP_API_KEY}`).then( res => {
                this.setState({
                    items: res.data
                })
            })
            this.setState({
                stats: res.data
            })
        })
    }

    render(){

         // destructuring to keep code a little shorter where possible
         const {stats} = this.state
         const {items} = this.state

        //style for avatar that is searched for
        let style = {
            background: `url(${this.state.pictureUrl}${this.state.stats.thumbnail})`,
            width: '4rem',
            height: '4rem',
            marginLeft: '5px',
            position: 'relative',
            borderRadius: '5%',
            border: '1px solid rgba(255, 249, 6, 0.5)',
            backgroundPosition: 'center',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
        }

        //styles for 6 comarable avatars...since it's hardcoded it needs to be 6 individual styles :( I didn't see anything from the api that pulled a list of characters in the game
        let styleOne = {
            background: `url(${this.state.pictureUrl}${this.state.tom.thumbnail})`,
            width: '4rem',
            height: '4rem',
            backgroundPosition: 'center',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            marginLeft: '5px',
            position: 'relative',
            borderRadius: '5%',
            cursor: 'pointer'
        }

        let styleTwo = {
            background: `url(${this.state.pictureUrl}${this.state.john.thumbnail})`,
            width: '4rem',
            height: '4rem',
            backgroundPosition: 'center',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            marginLeft: '5px',
            position: 'relative',
            borderRadius: '5%',
            cursor: 'pointer'
        }

        let styleThree = {
            background: `url(${this.state.pictureUrl}${this.state.mark.thumbnail})`,
            width: '4rem',
            height: '4rem',
            backgroundPosition: 'center',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            marginLeft: '5px',
            position: 'relative',
            borderRadius: '5%',
            cursor: 'pointer'
        }

        let styleFour = {
            background: `url(${this.state.pictureUrl}${this.state.alex.thumbnail})`,
            width: '4rem',
            height: '4rem',
            backgroundPosition: 'center',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            marginLeft: '5px',
            position: 'relative',
            borderRadius: '5%',
            cursor: 'pointer'
        }

        let styleFive = {
            background: `url(${this.state.pictureUrl}${this.state.nick.thumbnail})`,
            width: '4rem',
            height: '4rem',
            backgroundPosition: 'center',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            marginLeft: '5px',
            position: 'relative',
            borderRadius: '5%',
            cursor: 'pointer'
        }

        let styleSix = {
            background: `url(${this.state.pictureUrl}${this.state.mike.thumbnail})`,
            width: '4rem',
            height: '4rem',
            backgroundPosition: 'center',
            backgroundSize: '100%',
            backgroundRepeat: 'no-repeat',
            marginLeft: '5px',
            position: 'relative',
            borderRadius: '5%',
            cursor: 'pointer'
        }

        return(
            <section className='Home'>
                {/* reload page when logo is clicked */}
                <a href='/'> <img className='logo' src={logo} alt="logo"/> </a>
                <div className='data'>
                    <input className='character' placeholder='Character Name' type="text" onChange = {(event) => this.addCharacter(event.target.value)}/>
                    <input className='realm' placeholder='Realm Name' type="text" onChange = {(event) => this.addRealm(event.target.value)}/>
                    <button className='search' onClick={() => {this.getStats(); this.getItems(); this.closeDiv()}}> Search </button>
                </div>

                {/* data for player div */}
                {/* infoBox will be displayed if dataDiv is true when search bar is clicked and close by clicking the x */}
                { this.state.dataDiv 
                &&
                <div className='infoBox'>

                    {/* div and svgs for closing the info container, on click closes the data section*/}
                    <div className='closeBox'>
                        <div className='hexagon' onClick={() => this.closeDiv()}>
                            <Hexagon/>
                                <div className='x'>
                                    <Close/>
                                </div>
                        </div>
                    </div>

                    <div className='statsBox'>
                        <div className='info'>

                                {/* check to see if value is true and retrun data from object */}
                                {
                                    stats.stats 
                                    ?
                                    <div className='dataContainer'>
                                        <div className='attributes'>
                                            <h1 className='heading'> Attributes </h1>
                                            <p className='tag'> Level <span> {stats.level} </span> </p>
                                            <p className='tag'> Health <span> {stats.stats.health} </span> </p>
                                            <p className='tag'> Strength <span> {stats.stats.str} </span> </p>
                                            <p className='tag'> Agility <span style={{color: 'turquoise'}}> {stats.stats.agi} </span> </p>
                                            <p className='tag'> Intillect <span> {stats.stats.int} </span> </p>
                                            <p className='tag'> Stamina <span style={{color: 'turquoise'}}> {stats.stats.sta} </span> </p>
                                            <h1 className='heading'> Enhancements </h1>
                                                <p className='tag'> Haste <span> {stats.stats.haste.toFixed(2)}% </span> </p> 
                                                <p className='tag'> Crit <span> {stats.stats.crit.toFixed(2)}% </span> </p> 
                                        </div>
                                            <h1 className='headingTwo'> Compare Stats </h1>
                                        <div className='compare'>
                                                <div className='picture' style={styleOne} onClick={() => this.getTom()}> </div>
                                                <div className='picture' style={styleTwo} onClick={() => this.getJohn()}> </div>
                                                <div className='picture' style={styleThree} onClick={() => this.getMark()}> </div>
                                                <div className='picture' style={styleFour} onClick={() => this.getAlex()}> </div>
                                                <div className='picture' style={styleFive} onClick={() => this.getNick()}> </div>
                                                <div className='picture' style={styleSix} onClick={() => this.getMike()}> </div>
                                        </div>
                                    </div>
                                    :
                                    null
                                }
                        </div>
                    </div>
                    
                    {/* get items listed and level needed for that item */}
                    <div className='itemBox'>
                        <div className='info'>

                                {
                                    items.items
                                    ?
                                    <div className='tableContainer'> 
                                    <h1 className='itemHeading'> My Item Sets </h1>
                                    {/* avatar imgage */}
                                    <div style={style}> <p className='pvp'> PvP </p> </div>
                                    <table className='table'>
                                        <tbody>
                                            <tr>
                                                <td> Helm </td>
                                                <td> {items.items.head.name} </td>
                                                <td> {items.items.head.itemLevel} </td>
                                            </tr>
                                            <tr>
                                                <td> Chest </td>
                                                <td> {items.items.chest.name} </td>
                                                <td> {items.items.chest.itemLevel} </td>
                                            </tr>
                                            <tr>
                                                <td> Shoulders </td>
                                                <td> {items.items.shoulder.name} </td>
                                                <td> {items.items.shoulder.itemLevel} </td>
                                            </tr>
                                            <tr>
                                                <td> Legs </td>
                                                <td> {items.items.legs.name} </td>
                                                <td> {items.items.legs.itemLevel} </td>
                                            </tr>
                                            <tr>
                                                <td> Feet </td>
                                                <td> {items.items.feet.name} </td>
                                                <td> {items.items.feet.itemLevel} </td>
                                            </tr>
                                            <tr>
                                                <td> Trinket </td>
                                                <td> {items.items.trinket1.name} </td>
                                                <td> {items.items.trinket1.itemLevel} </td>
                                            </tr>
                                            <tr>
                                                <td> Back </td>
                                                <td> {items.items.back.name} </td>
                                                <td> {items.items.back.itemLevel} </td>
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
                }
            </section>
        )
    }
}

export default Home;