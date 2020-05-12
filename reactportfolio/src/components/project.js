import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton } from "react-mdl";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    // selections for projects
    projectOptions() {
        if (this.state.activeTab === 0) {
            return (
                <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                    <CardTitle style={{color: "#fff", height: "176px", background: "url() center/ cover"}}> React Project </CardTitle>

                    <CardText>
                    Just use top:0; and left: 0; and you can also eliminate padding: 0. Don't use top: 0; for other div except top, use left: 0; for other div for eliminate the left space.
                    </CardText>
                    <CardActions border>
                        <Button colored> Github </Button>
                        <Button colored> LiveDemo </Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" />
                        
                    </CardMenu>


                </Card>
            )

        } else if (this.state.activeTab === 1) {
            return (
                <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                    <CardTitle style={{color: "#fff", height: "176px", background: "url() center/ cover"}}> MongoDB Project </CardTitle>

                    <CardText>
                    Just use top:0; and left: 0; and you can also eliminate padding: 0. Don't use top: 0; for other div except top, use left: 0; for other div for eliminate the left space.
                    </CardText>
                    <CardActions border>
                        <Button colored> Github </Button>
                        <Button colored> LiveDemo </Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" />
                        
                    </CardMenu>


                </Card>
            )

        } else if (this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                <CardTitle style={{color: "#fff", height: "176px", background: "url() center/ cover"}}> MySQL Project </CardTitle>

                <CardText>
                Just use top:0; and left: 0; and you can also eliminate padding: 0. Don't use top: 0; for other div except top, use left: 0; for other div for eliminate the left space.
                </CardText>
                <CardActions border>
                    <Button colored> Github </Button>
                    <Button colored> LiveDemo </Button>
                </CardActions>
                <CardMenu style={{color: "#fff"}}>
                    <IconButton name="share" />
                    
                </CardMenu>


            </Card>
            )

        } else if (this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{minWidth: "450", margin: "auto"}}>
                    <CardTitle style={{color: "#fff", height: "176px", background: "url() center/ cover"}}> Express Project </CardTitle>

                    <CardText>
                    Just use top:0; and left: 0; and you can also eliminate padding: 0. Don't use top: 0; for other div except top, use left: 0; for other div for eliminate the left space.
                    </CardText>
                    <CardActions border>
                        <Button colored> Github </Button>
                        <Button colored> LiveDemo </Button>
                    </CardActions>
                    <CardMenu style={{color: "#fff"}}>
                        <IconButton name="share" />
                        
                    </CardMenu>


                </Card>
            )

        }


    }

    render() {
        return (
            <div className="tab-category">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>React</Tab>
                    <Tab>MongoDB</Tab>
                    <Tab>MySQL</Tab>
                    <Tab>Express</Tab>
                </Tabs>

                {/* options for project */}
                <section className="project-sections">
                    <Grid>
                        <Cell col={12}>
                          <div>  {this.projectOptions()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>

        )


    }

}

export default Projects;