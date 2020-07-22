import React from 'react';
import {
  Grid,
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
import ReviewCard from './ReviewCard';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Reviews = ({ reviews }) => {
  let reviewsCard = null;
  if (reviews) {
    reviewsCard = reviews.map((review) => (
      <Grid item xs={12} sm={6} key={review.id}>
        <ReviewCard review={review} />
      </Grid>
    ));
  }

  return (
    <div style={{ maxWidth: '1300px', margin: '0 auto' }}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          style={{ backgroundColor: '#c6ff00' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography variant='h6'>Reviews</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid
            container
            spacing={3}
            justify='center'
            style={{ paddingTop: 10, maxWidth: 1300, margin: '0 auto' }}
          >
            {reviewsCard}
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default Reviews;
