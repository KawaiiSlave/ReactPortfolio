import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(data:image/jpeg;base64,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) center / cover'}} >Project 1 Animousity</CardTitle>
            <CardText>
              This application uses the axios npm package to recommend the user anime based off of a genre of movie they like.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://i.pinimg.com/originals/67/18/22/671822c2f63dd5f65d8fd15c9710420b.jpg'}} >Project 2 Nozama</CardTitle>
            <CardText>
              Nozama is a CRUD based application that lets you search for a book in the database, and purchase it if you so choose to. Similar to that of a regular online bookstore.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '176px', background: 'url(https://i.etsystatic.com/17293330/d/il/617f17/1682935160/il_340x270.1682935160_kqp5.jpg?version=0) center / cover'}} >Project 3 Expensy</CardTitle>
            <CardText>
              Expensy keeps track of all of your expenses made, and who made them. Perfect for focus on who bought what!
            </CardText>
            <CardActions border>
              <Button href>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } 
  }



  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Past projects</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;