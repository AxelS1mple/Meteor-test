import React from 'react'
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button, Grid } from "@mui/material";


export const Modulos = ()  => {
    return (
<section>
<Grid container spacing={3} justifyContent="center">
      {/* Card 1 */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/images/molinos.png"
              alt="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Card 2 */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/images/hacerTortillas.png"
              alt="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>

      {/* Card 3 */}
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/images/repartidor.png"
              alt="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Lizard
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Share
            </Button>
            <Button size="small" color="primary">
              Learn More
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
</section>

      );
}