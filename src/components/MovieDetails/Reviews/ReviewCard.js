import React from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';

const ReviewCard = ({review}) => {

    return (
        <Card style={{height: '280px'}}>
            <CardContent>
                <Typography gutterBottom style={{borderBottom: '1px solid black'}} >
                    A review by {review.author}
                </Typography>
                <Typography color="textSecondary" component="div" style={{maxHeight: 200, overflow: 'auto'}}>
                    {review.content}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default ReviewCard;