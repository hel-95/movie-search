import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';

function AlertMsg(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const Alert = ({ alert }) => {
  return alert !== null && <AlertMsg severity='error'>{alert}</AlertMsg>;
};

export default Alert;
