import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

import FormCity from './component/FormCity'

import CardsData from './component/CardsData'

import ImgMap from './component/ImgMap'

import ModelForError from './component/ModelForError'

import Weather from './component/Weather'


export class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      cityName: '',
      cityData: {},
      Data: false,
      error: false,
      massageError : '',
      DataOfWeather: '',
      lat :'',
      lon :'',
    }
  }

  inputCity = (e) => {
    this.setState({
      cityName: e.target.value
    });
  }

  close = () => {
    this.setState({
      error: false,
    })
  }



  submitForm =  (e) => {
    e.preventDefault();

    

     axios.get(`https://us1.locationiq.com/v1/search.php?key=pk.d36871f015649f915282f374cff76628&city=${this.state.cityName}&format=json`).then((axio) =>{
     
      this.setState({
        cityData: axio.data[0],
        lat :axio.data[0].lat,
        lon :axio.data[0].lon,
        
      })
  
      axios.get(`${process.env.REACT_APP_URL}/weather?lat=${this.state.lat}&lon=${this.state.lon}`).then((ApiWeather)=>{
     
        this.setState({
          DataOfWeather: ApiWeather.data,
          Data: true,
        })
        
      })
    }).catch(error=> {

      this.setState({
        
        massageError : error.message,
        error: true,
      });
    })


 
  



}



  render() {
    return (
      <div  >

        <FormCity
        submit = {this.submitForm} 
        impute = {this.inputCity} />

        {this.state.Data &&
          <div style={{ width: 960, margin: 'auto', textAlign: "center", backgroundColor: "blue" }}>
            <CardsData 
           cityNames= {this.state.cityData.display_name}
           latitude  = {this.state.cityData.lat} 
           longitude = {this.state.cityData.lon} />

            <ImgMap 
            lat = {this.state.lat}
            lon = {this.state.lon}/>
            < Weather DataOfWeather = {this.state.DataOfWeather} />
          </div>
        }
        {

          <div>
            <ModelForError
           showError= {this.state.error} 
           close = {this.close}
           massageError = { this.state.massageError} />
          </div>
        }

      </div>
    )
  }
}

export default App


