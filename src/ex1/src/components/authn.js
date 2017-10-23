import React, { Component } from 'react';

class Authn extends Component {
  constructor(){
    super();
    this.state = { authnStatus:  { hasRun: false, loggedOn : false, token: '' } };
  }

  componentWillMount(){
    console.log(`WillMount current state is: ${JSON.stringify(this.state)}`);
  }

  componentDidMount() {
    console.log(`DidMount current state is: ${JSON.stringify(this.state)}`);  
  }

  render() {
    return (
      <div className="authn">
          <Showit {...this.state.authnStatus} />
      </div>
    );
  }

}

const Showit = (obj) => {
  return <div>{JSON.stringify(obj)}</div>
}

export default Authn;