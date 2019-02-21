import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const Item = (props) => {
    console.log(props.Content)
    return(
        <div>
                <Card>
                <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                        image={props.Content.ImageUrl}
                        title={props.Content.ItemTitle}
                        />

                   <CardContent>
                        <Typography gutterBottom variant="headline" component="h2">
                            {props.Content.ItemTitle}
                        </Typography>
                        <Typography component="p">
                            {props.Content.ItemDetails}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" href={`/Content/${props.Content.content_id}`} color="primary" className="button">
                        Order Now
                       </Button>
                    </CardActions>
                </Card>
        </div>
    )
}
export default Item
