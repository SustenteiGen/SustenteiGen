import React from 'react';
import { Typography, Box, Grid, Button, Card, CardMedia, CardActionArea, CardContent, CardActions } from '@material-ui/core';
import './Home.css'
import CarouselComponent from '../../componentes/caroussel/CarouselComponent';
function Home() {
    return (
        <>
        <CarouselComponent></CarouselComponent>
        
            <Grid container direction="row" justifyContent="center" alignItems="center" >
                <Grid xs={12} className="caixa2" direction="row" justifyContent="center" alignItems="center" >
                    <Box display="flex" justifyContent="center">
                        <Typography variant="h5" gutterBottom color="textPrimary" align="center" className='titulo'>PRODUTOS EM DESTAQUE</Typography>
                    </Box>
                    </Grid>
            </Grid>

            <Grid container direction="row" justifyContent="center" alignItems="center" className="flex-container" >

            <Grid xs={4} direction="row" justifyContent="center" alignItems="center" >
                    <Card className="margem-card">
                        <CardActionArea>
                            <CardMedia component="img"
                                alt="Copo retrátil de silicone"
                                height="495"
                                image="https://i.imgur.com/ITjLPV8.png"
                                title="Copo retrátil de silicone" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Copo retrátil de silicone
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Copo retrátil com tampa feito de polipropileno, ideal para café.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Saiba mais
                            </Button>
                        </CardActions>
                    </Card>
                    </Grid>

                    <Grid xs={4} direction="row" justifyContent="center" alignItems="center" >
                    <Card className="margem-card" >
                        <CardActionArea>
                            <CardMedia component="img"
                                alt="Canudo de Inox"
                                height="450"
                                image="https://i.imgur.com/nVYTsnu.jpg"
                                title="Canudo de Inox" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Canudo de Inox
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Canudo feito em aço inox, ideal para substituir o canudo plástico. Resistente, durável e reutilizável. Acompanha escova que facilita a limpeza e confere longa vida útil ao produto.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Saiba mais
                            </Button>
                        </CardActions>
                    </Card>
                    </Grid>
                    
                    <Grid xs={4} direction="row" justifyContent="center" alignItems="center" >
                    <Card className="margem-card" >
                        <CardActionArea>
                            <CardMedia className="card-img" component="img"
                                alt="Absorvente Reutilizável"
                                height="450"
                                image="https://i.imgur.com/TRBaca9.jpg"
                                title="Absorvente Reutilizável" />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                Absorvente Reutilizável
                                </Typography>
                                <Typography  variant="body2" color="textSecondary" component="p">
                                Absorvente com tecidos especiais que garantem a absorção, segurança e respirabilidade. Com formato anatômico e ajuste por botões.
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                Saiba mais
                            </Button>
                        </CardActions>
                    </Card>
                    </Grid>
            </Grid>
        </>
    )
}

export default Home;