import React, { Component } from 'react';

export class Authentication extends Component {
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

export const Showit = (obj) => {
  return <div>{JSON.stringify(obj)}</div>
}

