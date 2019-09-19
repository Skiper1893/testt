import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

export default class Main extends Component {
    render() {
        const { component: Component ,...rest} = this.props
        const test = true
        return (
            <div>
                Main
            </div>
        );
    }
}

