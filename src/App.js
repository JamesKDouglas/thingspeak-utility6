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
    startDate: '',
    endDate: '',
    yaxismax: '',
    // downsample: '',
    filterLower: '',
  }



  buildURL = () => {
    let channel = this.state.channel;
    let readAPI = this.state.readAPI;
    let numPoints = this.state.numPoints;
    let fieldID = this.state.fieldID;
    let startDate = this.state.startDate;
    let endDate = this.state.endDate;
    let yaxismax = this.state.yaxismax;
    // let downsample = this.state.downsample;
    let filterLower = this.state.filterLower;

    let url = 'https://thingspeak.com/channels/' + channel + '/charts/' + fieldID + '?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=' + numPoints + '&type=line&api_key=' + readAPI;

    //note that all fields get downloaded, not just one chart. Cool.
    let downloadURL = 'https://api.thingspeak.com/channels/' + channel + '/feeds.csv?api_key=' + readAPI + '&results=' + numPoints;
    // + '&min=' + filterLower;
    
    if (startDate && endDate) {
      url = url + '&start=' + startDate + '%20' + '00:00:00' + '&end=' + endDate + '%20' + '00:00:00' + '&dynamic=false';
      downloadURL = downloadURL + '&start=' + startDate + '%20' + '00:00:00' + '&end=' + endDate + '%20' + '00:00:00';
    }

    if (yaxismax) {
      url = url + '&yaxismax=' + yaxismax;
    }

    if (filterLower) {
      url = url + '&min=' + filterLower;
    }

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
        <table>
            <tr>
              <td>
                <Form.Group controlId = "channel" style = {style_input} >
                <Form.Label>Channel </Form.Label><br/>
                <Form.Control type = "text" 
                  defaultValue = {this.state.channel}
                  name = "channel"
                  required
                  onChange = {this.handleInputChange}
                  />
                </Form.Group>
              </td>
              <td>
                <Form.Group controlId = "readAPI" style = {style_input}>
                <Form.Label>readAPI </Form.Label><br/>
                <Form.Control type = "text" 
                  defaultValue = {this.state.readAPI}
                  name = "readAPI"
                  required
                  onChange = {this.handleInputChange}
                  />
                </Form.Group> 
            </td>
            </tr>
            <tr>
              <td>
                <Form.Group controlId = "numPoints" style = {style_input}>
                <Form.Label># of points to chart </Form.Label><br/>
                <Form.Control type = "text" 
                  defaultValue = {this.state.numPoints}
                  name = "numPoints"
                  required
                  onChange = {this.handleInputChange}
                  />
                </Form.Group></td>
              <td>
                <Form.Group controlId = "fieldID" style = {style_input}>
                <Form.Label>Field ID </Form.Label><br/>
                <Form.Control type = "text" 
                defaultValue = {this.state.fieldID}
                name = "fieldID"
                required
                onChange = {this.handleInputChange}
                />
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group controlId = "startDate" style = {style_input}>
                <Form.Label>Start date (YYYY-MM-DD) </Form.Label><br/>
                <Form.Control type = "text" 
                  defaultValue = {this.state.startDate}
                  name = "startDate"
                  required
                  onChange = {this.handleInputChange}
                  />
                </Form.Group>
              </td>
              <td>
                <Form.Group controlId = "endDate" style = {style_input}>
                <Form.Label>End date (YYYY-MM-DD) </Form.Label><br/>
                <Form.Control type = "text" 
                  defaultValue = {this.state.endDate}
                  name = "endDate"
                  required
                  onChange = {this.handleInputChange}
                  />
                </Form.Group>
              </td>
            </tr>
            <tr>
              <td>
                <Form.Group controlId = "yaxismax" style = {style_input}>
                <Form.Label>Y axis max </Form.Label><br/>
                <Form.Control type = "text" 
                  defaultValue = {this.state.yaxismax}
                  name = "yaxismax"
                  required
                  onChange = {this.handleInputChange}
                  />
                </Form.Group>
              </td>
              <td>
                <Form.Group controlId = "filterLower" style = {style_input}>
                <Form.Label>Filter out values below: </Form.Label><br/>
                <Form.Control type = "text" 
                  defaultValue = {this.state.filterLower}
                  name = "filterLower"
                  required
                  onChange = {this.handleInputChange}
                  />
                </Form.Group>
              </td>
            </tr>
        </table>

        </Form>

      <div align = "left">
      <br/>
      "Y axis max" sets the magnitude of the y axis.
      <br/>
      <br/>
      Field ID numbers:
      <ol align = "left">
        <li>mass reading (g)</li>
        <li>mass reading with temperature noise minimized (g)</li>
        <li>temperature (deg C)</li>
        <li>battery voltage)</li>
      </ol>
      </div>

        <Button variant = "primary" onClick = {this.buildURL}>Chart</Button>
        
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

