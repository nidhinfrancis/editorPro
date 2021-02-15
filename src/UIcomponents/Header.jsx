import React, {Component} from 'react';
import 'styles/header.scss';

const Header = (ComposedComponent) => class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render () {
    return (
      <div>
        <div className={"header"}></div>
        <ComposedComponent/>
      </div>
    )
  }
}

export default Header