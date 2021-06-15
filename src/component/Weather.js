import React from 'react'

export class Weather extends React.Component {
    render() {
        return (
            <div style={{ color: "white" }}>
                 {
              this.props.DataOfWeather.map(value => {
                return (
                  <>
                  <p>
                  description: {value.description}
                  </p>
                  <p>
                  date: {value.date}
                  </p>
                  </>
                  
                )
              })
            }
            </div>
        )
    }
}

export default Weather
