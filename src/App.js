import React, { Component } from 'react';
import {
  Jumbotron, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Container, Row, Col, Button
} from 'reactstrap';
import info from './info.json';
import clockface from './images/clockface.png'

class App extends Component {
  render() {
    return (
      <div>
        <Jumbotron>
          <h1 className='display-3 center'>Donald Linnell</h1>
          <h2 className='display-4 center'>Portfolio</h2>
        </Jumbotron>
        <Container>
          <Row>
            {info.map(site => (
              <Col xs='6'>
                <Card  className='cardPad' inverse style={{backgroundColor:'#333'}}>
                  <CardImg src={require(`${site.image}`)} />
                  <CardTitle>{site.title}</CardTitle>
                  <CardText>{site.desc}</CardText>
                  <a href={site.link}><Button>Visit the site</Button></a>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
