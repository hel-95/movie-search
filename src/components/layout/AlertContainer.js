import React from 'react';
import { connect } from 'react-redux';
import Alert from './Alert';

class AlertContainer extends React.Component {
  render() {
    return <Alert alert={this.props.alert} />;
  }
}

let mapStateToProps = (state) => {
  return {
    alert: state.movies.alert,
  };
};

export default connect(mapStateToProps, {})(AlertContainer);
