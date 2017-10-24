import React, { Component } from 'react';
import { Navigator } from 'react-navigation';


export const isLoggedIn = () =>{
  return false;
}


class EnsureLoggedInContainer extends Component {
    componentDidMount() {
      const { dispatch, currentURL } = this.props

      //React.setRedirectUrl();
  
      if (!isLoggedIn) {
        // set the current url/path for future redirection (we use a Redux action)
        // then redirect (we use a React Router method)
        dispatch(React.setRedirectUrl(currentURL))
        Navigator.browserHistory.replace("/login")
      }
    }
  
    render() {
      if (isLoggedIn) {
        return this.props.children
      } else {
        return null
      }
    }
  }
  
  // Grab a reference to the current URL. If this is a web app and you are
  // using React Router, you can use `ownProps` to find the URL. Other
  // platforms (Native) or routing libraries have similar ways to find
  // the current position in the app.
  /* eslint */
  // function mapStateToProps(state, ownProps) {
  //   return {
  //     isLoggedIn: state.loggedIn,
  //     currentURL: ownProps.location.pathname
  //   }
  // }
  
  //export default connect(mapStateToProps)(EnsureLoggedInContainer)
  export default EnsureLoggedInContainer;