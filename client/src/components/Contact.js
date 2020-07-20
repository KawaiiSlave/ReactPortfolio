import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Tyler Goodman</h2>
            <img
              src="data:image/jpeg;base64,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"
              alt="blank"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Feel free to contact me anytime. Im most available from 3pm-9pm weekdays, and 10am to 10pm weekends.</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    (615) 678-9049
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (615) 678-9049
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    tgandle@gmail.com
                  </ListItemContent>
                </ListItem>

                


              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact;