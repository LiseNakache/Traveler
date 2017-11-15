import React from 'react';
import CreateEventForm from './CreateEventForm'
import EventsListBox from './EventsListBox'
import axios from 'axios'
import Logout from './Logout';


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { events: [] };
    this.createEvent = this.createEvent.bind(this);
    this.setEvents = this.setEvents.bind(this);
  }


  componentWillMount() {
    window.scrollTo(0, 0)
    let currentComponent = this;
    axios.get("/event")
        .then(function (response) {
            console.log(response.data);
            currentComponent.setState({ events: response.data })
            console.log(currentComponent.state)
        }).catch(function (error) {
            console.log(error);
        });
}


  createEvent(event) {
    this.setState({ events: this.state.events.concat(event) })
  }



  setEvents(events){    
    this.setState({ events:events});
  }
 


  render() {
    return (
      <div id="homepage" className="main-container">
        <div className="create-event-form">
          <CreateEventForm createEvent={this.createEvent}/>
        </div>   
        <EventsListBox events={this.state.events}/>
      </div>
    );
  }
}


export default Homepage;
