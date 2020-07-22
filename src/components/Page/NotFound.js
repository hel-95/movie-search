import React from 'react';
import Typography from '@material-ui/core/Typography';

const NotFound = () => {
  return (
    <div style={{ padding: '30px' }}>
      <Typography variant='h2' gutterBottom>
        Not Found
      </Typography>
      <Typography variant='h6' gutterBottom>
        The page you are looking for does not exist...
      </Typography>
    </div>
  );
};

export default NotFound;
