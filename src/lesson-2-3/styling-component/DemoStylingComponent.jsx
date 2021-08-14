import React, { Component } from 'react'

// External style (Global style)
import './ExternalStyle.css';

// Styling with module (Local style)
// classes là object
import classes from './StylingWithModule.module.css';

export default class DemoStylingComponent extends Component {
    render() {
        // Inline style phải là object
        const headingStyles = {
            backgroundColor: 'red', 
            color: 'white'
        }

        console.log(classes);

        return (
            <div>
                {/* Inline style */}
                <h1 style={headingStyles}>Demo Inline Style</h1>

                {/* External style */}
                <h1 className="heading">Demo External Style</h1>

                {/* Styling with module */}
                <h1 className={`${classes.blueBackground} ${classes.textWhite}`}>Demo Styling With Module</h1>
            </div>
        )
    }
}
