import React, { Component } from "react";
import { Grid, Cell, } from "react-mdl";

class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-div">
                    <Cell col={6}> 
                    <h2>Sterling Etienne</h2>
                    <img 
                    src="./pic/sterling.jpg"
                    alt="sterling"
                    style={{height: "270px"}}
                    />
                    <p style={{width: "75%", margin: "auto", paddingTop: "1em"}}>Line 26:15:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md </p>
                    </Cell>
                    <Cell col={6}> 
                    <h2>Contact Me</h2>
                    <hr/>
                    
                    
                    </Cell>

                </Grid>

                
            </div>
        )
    }
     
}

export default Contact;