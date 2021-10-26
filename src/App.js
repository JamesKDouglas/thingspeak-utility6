import './App.css';
import { Form, Button } from 'react-bootstrap';
import Iframe from 'react-iframe';
import React, { Component } from 'react';

class App extends Component {
 
  state = {
    channel: '',
    readAPI: '',
    numPoints: '',
    fieldID: '',
    url: '',
    downloadURL: '',
  }



  buildURL = () => {
    let channel = this.state.channel;
    let readAPI = this.state.readAPI;
    let numPoints = this.state.numPoints;
    let fieldID = this.state.fieldID;

    let url = 'https://thingspeak.com/channels/' + channel + '/charts/' + fieldID + '?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=' + numPoints + '&type=line&api_key=' + readAPI;
    

    //note that all fields get downloaded, not just one chart. Cool.
    let downloadURL = 'https://api.thingspeak.com/channels/' + channel + '/feeds.csv?api_key=' + readAPI + '&results=' + numPoints;
    
    console.log('The chart URL is:' + url);
    this.setState({url: url});

    console.log('the download URL is: ' + downloadURL);
    this.setState({downloadURL: downloadURL});
    // example <iframe width="450" height="250" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/CHANNEL_ID/charts/FIELD_ID?api_key=XXXXXXXXXXXXX"></iframe>

  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  
  render () {
    const style_input = {
      display: 'block',
      paddingTop: 0,
      textAlign: 'left',
      pointerEvents: 'auto',
    };

      return (
      <div className="App">
        <Form>
            <Form.Group controlId = "channel" style = {style_input} >
                <Form.Label>Channel</Form.Label>
                <Form.Control type = "text" 
                defaultValue = {this.state.channel}
                name = "channel"
                required
                onChange = {this.handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId = "readAPI" style = {style_input}>
                <Form.Label>readAPI</Form.Label>
                <Form.Control type = "text" 
                defaultValue = {this.state.readAPI}
                name = "readAPI"
                required
                onChange = {this.handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId = "numPoints" style = {style_input}>
                <Form.Label># of points to chart:</Form.Label>
                <Form.Control type = "text" 
                defaultValue = {this.state.numPoints}
                name = "numPoints"
                required
                onChange = {this.handleInputChange}
                />
            </Form.Group>
            <Form.Group controlId = "fieldID" style = {style_input}>
                <Form.Label>Field ID </Form.Label>
                <Form.Control type = "text" 
                defaultValue = {this.state.fieldID}
                name = "fieldID"
                required
                onChange = {this.handleInputChange}
                />
                <br/>
                <br/>
                Field ID numbers:
                  <ol>
                    <li>mass reading (g)</li>
                    <li>mass reading with temperature noise minimized (g)</li>
                    <li>temperature (deg C)</li>
                    <li>battery voltage)</li>
                  </ol>
                
            </Form.Group>
        </Form>

        <Button variant = "priamry" onClick = {this.buildURL}>Chart</Button>
        
        <Iframe 
          url = {this.state.url}
          width = "450px"
          height = "260px"
          id = "chart"
        />

        download URL:
        <a href={this.state.downloadURL}>{this.state.downloadURL}</a>
      </div>
    );
  }
}

export default App;
