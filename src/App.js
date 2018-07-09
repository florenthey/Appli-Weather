import React, { Component } from 'react'
import './style/App.css'
import Search from './component/Search'
import Infos from './component/Infos'
import axios from 'axios';


const key = 'f0fa246a92eacb18326af7323cf0d4f7'

class App extends Component {

  state = {
    input: '',
    json: {},
    error: '',
    lockRequest: false
  }


//active la fonction getDataApi avant l'affichage
componentWillMount() {
    this.getDataApi();
  }


//then capture la réponse et remplace le state json par ma reponse
getDataApi = () => {
  axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ this.state.input === '' ? 'Saigon' : this.state.input }&appid=${key}`)
  .then((response) => {
    console.log(response)
  this.setState({ json: response, error:'' }, () => {
    
  })
  })

  .catch((error) => {
    this.setState({ error: 'ça existe pas' }, () => {
    
    })
    console.log(error);
  } )
}


inputStock = (event) => {
  this.setState({input: event.target.value}, () => {
    if(!this.state.lockRequest){
      this.setState({lockRequest: true})
    setTimeout(() => {
      this.clickSearch()
      this.setState({lockRequest: false})
    },2000)
  }
 })
}


clickSearch = () => {
  this.getDataApi()
}


  render() {

    const renderInfo = () => {
      if(this.state.json.data) {
        return <Infos info={this.state.json.data} />
      }
    }

    return (

      <div className="App">
        <Search search={ this.inputStock } click={this.clickSearch } />
        { renderInfo() }
        <p>{ this.state.error }</p>
      </div>
    );
  }
}

export default App;
