import React from 'react'
import Image from 'react-bootstrap/Image'


export class ImgMap extends React.Component {
    render() {
        return (
            <div>
                <Image src={`https://maps.locationiq.com/v3/staticmap?key=pk.d36871f015649f915282f374cff76628&q&center=${this.props.lat},${this.props.lon}&zoom=15`} roundedCircle style={{ margin: 'auto' }} />

            </div>
        )
    }
}

export default ImgMap
