import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SeasonDisplay from './SeasonDisplay';
//revisando el uso de props pero en clases no funciones
class App extends React.Component{
  
    state ={
      lat:null,
      errorMessage:''};

    
    
    componentDidMount(){
      console.log('componentDid mount')
      window.navigator.geolocation.getCurrentPosition(
        position => {this.setState({lat: position.coords.latitude})},
        e =>{this.setState({errorMessage:e.message});
          }
        );
    }
  render(){
    console.log('render');
    if (this.state.errorMessage !== ''){
    return <div>Error: {this.state.errorMessage}</div>
    }
    if(this.state.lat !== null){
    return <SeasonDisplay lat={this.state.lat}/>
    }
    return <div>loading....</div>
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));