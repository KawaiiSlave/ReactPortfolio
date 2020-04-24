import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './Education';
import Experience from './Experience';
import Skills from './Skills';


class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://cdn2.iconfinder.com/data/icons/ux-and-ui-astute-vol-1/512/Full_Stack_Developer-512.png"
                alt="Tyler"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Tyler Goodman</h2>
            <h4 style={{ color: "grey" }}>Full Stack Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p></p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Phone</h5>
            <p>(615) 678-9049</p>
            <h5>Email</h5>
            <p>tgandle@gmail.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2019}
              endYear={2020}
              schoolName="Vanderbilt University"
              schoolDescription="Attended a coding bootcamp, and graduated the following year"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2019}
              endYear={2020}
              jobName="Homework, and Projects for school"
              jobDescription="Ive done many assignments, and a few projects similar to how the Kanban style approach to working a real job would be working with other people. I have a passion for learning new things."
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="Javascript" progress={50} />
            <Skills skill="HTML/CSS" progress={90} />
            <Skills skill="NodeJS" progress={68} />
            <Skills skill="React" progress={40} />
            <Skills skill="MongoDb" progress={45} />
            <Skills skill="Express" progress={67} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;