import React from 'react'
import Card from 'react-bootstrap/Card'

export class Move extends React.Component {




    render() {
        return (
            <div>
                <Card style={{ width: '18rem' ,margin: 'auto', textAlign: "center", backgroundColor: "blue" ,color : 'white' }} >
                    <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${this.props.DataOfMove.image_url}`} alt={this.props.DataOfMove.title} style={{ width : '18rem'}} />
                    <Card.Body>
                        <Card.Title>title={this.props.DataOfMove.title}</Card.Title>
                        <Card.Text style={{ height : 200 , overflow : 'auto'}}>
                        overview={this.props.DataOfMove.overview} 
                        </Card.Text>
                        <Card.Text>
                        average_votes={this.props.DataOfMove.average_votes}
                        </Card.Text>
                        <Card.Text>
                        total_votes={this.props.DataOfMove.total_votes}
                        </Card.Text>
                        <Card.Text>
                        popularity={this.props.DataOfMove.popularity}
                        </Card.Text>
                        <Card.Text>
                        released_on={this.props.DataOfMove.released_on}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Move
