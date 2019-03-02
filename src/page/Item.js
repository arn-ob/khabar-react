// import React from 'react'
// import Card from '@material-ui/core/Card'
// import CardActions from '@material-ui/core/CardActions'
// import CardContent from '@material-ui/core/CardContent'
// import CardMedia from '@material-ui/core/CardMedia'
// import Button from '@material-ui/core/Button'
// import Typography from '@material-ui/core/Typography'

// const Item = (props) => {
//     console.log(props.Content)
//     return(
//         <div>
//                 <Card>
//                 <CardMedia style={{height: 0, paddingTop: '56.25%'}}
//                         image={props.Content.ImageUrl}
//                         title={props.Content.ItemTitle}
//                         />

//                    <CardContent>
//                         <Typography gutterBottom variant="headline" component="h2">
//                             {props.Content.ItemTitle}
//                         </Typography>
//                         <Typography component="p">
//                             {props.Content.ItemDetails}
//                         </Typography>
//                     </CardContent>
//                     <CardActions>
//                         <Button variant="contained" href={`/Content/${props.Content.content_id}`} color="primary" className="button">
//                         Order Now
//                        </Button>
//                     </CardActions>
//                 </Card>
//         </div>
//     )
// }
// export default Item

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button'

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };


  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              K
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.Content.ItemTitle}
          subheader="September 14, 2016"
        />
        <CardMedia
          className={classes.media}
          image={this.props.Content.ImageUrl}
          title="Paella dish"
        />
        <CardContent>
          <Typography component="p">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <Button variant="contained" href={`/Content/${this.props.Content.content_id}`} color="primary" className="button">
             Order Now
          </Button>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
  }
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RecipeReviewCard);