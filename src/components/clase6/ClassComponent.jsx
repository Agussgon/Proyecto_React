import React, { Component } from 'react';

export default class ClassComponent extends Component {
render() {
return (
<li>{this.props.nombre} {this.props.estaEnLista ? "esta"
: "no está"}</li>
)
}
}