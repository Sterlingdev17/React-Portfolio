import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
    render() {
        return (
            <div style={{ width: "100%", margin: "auto", position: 'relative'}} >
                <Grid className="land-grid">
                    <Cell col="12">
                        <div className="pic">
                        <img 
                        src="./pic/sterling.jpg"
                        alt="sterling"
                        className="sterling-pic" 
                        />
                        </div>
                        <div className="pic-text">
                            <h1>  Full Stack Web Developer</h1>
                            <hr/>
                            <p> HTML/CSS | Javascript | React | NodeJs | MongoDB | MySQL </p>

                            <div className="social-media">
                            {/* linkedIn */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-linkedin-square" aria-hidden="true" />
                            </a>
                              {/* GithUb */}
                              <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                            <i className="fa fa-github-square" aria-hidden="true" />
                            </a>
                             
                        </div>
                        </div>

                        

                    </Cell>
                </Grid>
            </div>
        )
    }

}

export default Landing;