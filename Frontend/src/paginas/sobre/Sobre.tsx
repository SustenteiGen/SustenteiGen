import React from 'react';
import { Grid, Box, Typography, CardActionArea, CardMedia, CardContent, CardActions, Button, Card } from '@material-ui/core';
import './Sobre.css';
import { borders } from '@material-ui/system';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';


function Sobre() {

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#FFFFFF" }}>
            <Grid alignItems="center" item xs={6}>
                <Box paddingX={8.7} >
                    <Typography className="nome2" variant="h4" gutterBottom color="textPrimary" component="h4" align="center" >QUAL O NOSSO OBJETIVO? </Typography>
                    <Typography className="fonte1"variant="h5" gutterBottom color="textPrimary" component="h5" align="justify" >Baseado no objetivo 11 de Desenvolvimento Sustentável da ONU, a SUSTENTEI tem como missão impactar o público com a venda de produtos sustentáveis, ecológicos e biodegradáveis, além de notificar o usuário sobre a emissão de carbono referente ao frete do(s) produto(s).</Typography>
                </Box>
                <Box display="flex" justifyContent="center">
                    <Box marginRight={1}>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={6} >
                <img src="https://i.imgur.com/mUeVyLW.png" alt="imagem Sobre Nós" width="500px" height="500px" />
            </Grid>
            <Grid item xs={4}>
                <Box className='sobre'>
                    <Typography className='nome2' variant="h3" gutterBottom color="textPrimary" component="h3" align="center"  >QUEM SOMOS?</Typography>
                </Box>

            </Grid>

            <Grid xs={12} style={{ backgroundColor: "white" }}>
            </Grid>

            <Grid xs={4} direction="row" justifyContent="center" alignItems="center" >

                <Card className="margem-card" >

                    <CardActionArea>

                        <CardMedia component="img"

                            alt="Diego"
                            height="400"
                            image="https://i.imgur.com/iccJMHy.png"
                            title="Diego" />

                        <CardContent>
                            <Typography className="nome" gutterBottom variant="h5" component="h2" align="center">
                                Diego Britto
                            </Typography>
                            <Typography className="fonte2" variant="body2" color="textSecondary" align="justify" component="p">
                                Olá! Me chamo Diego, tenho 21 anos, e sou Desenvolvedor Full Stack Java Jr, formado pela Generation Brasil. Precisa de algo? Me chama aqui em alguma das minhas redes sociais:
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                    <CardActions>

                        <Box className='icones'>

                            <Box display="flex" alignItems="center" justifyContent="center">

                                <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                    <LinkedInIcon className='redes1' />
                                </a>
                                <a href="https://www.facebook.com/generationbrasil?_rdc=1&_rdr" target="_blank">
                                    <FacebookIcon className='redes1' />
                                </a>
                                <a href="https://github.com/SustenteiGen" target="_blank">
                                    <GitHubIcon className='redes1' />
                                </a>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='redes1' />
                                </a>
                            </Box>
                        </Box>
                    </CardActions>

                </Card>

            </Grid>

            <Grid xs={4} direction="row" justifyContent="center" alignItems="center" >

                <Card className="margem-card" >
                    <CardActionArea>

                        <CardMedia component="img"

                            alt="Fernando"
                            height="400"
                            image="https://i.imgur.com/ZTINcI1.png"
                            title="Fernando" />

                        <CardContent>
                            <Typography className="nome" gutterBottom variant="h5" component="h2" align="center">
                                Fernando Cardoso
                            </Typography>
                            <Typography  className="fonte2" variant="body2" color="textSecondary" align="justify" component="p">
                                Olá! Me chamo Fernando, tenho 27 anos, e sou Desenvolvedor Full Stack Java Jr, formado pela Generation Brasil. Precisa de algo? Me chama aqui em alguma das minhas redes sociais:
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <Box className='icones'>

                            <Box display="flex" alignItems="center" justifyContent="center">

                                <a href="https://www.linkedin.com/in/fernando-cardoso-ab4469226/" target="_blank">
                                    <LinkedInIcon className='redes1' />
                                </a>
                                <a href="https://www.facebook.com/generationbrasil?_rdc=1&_rdr" target="_blank">
                                    <FacebookIcon className='redes1' />
                                </a>
                                <a href="https://github.com/SustenteiGen" target="_blank">
                                    <GitHubIcon className='redes1' />
                                </a>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='redes1' />
                                </a>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
            <Grid xs={4} direction="row" justifyContent="center" alignItems="center" >

                <Card className="margem-card" >
                    <CardActionArea>

                        <CardMedia component="img"

                            alt="Maria"
                            height="400"
                            image=" https://i.imgur.com/hNJqX2Q.png"
                            title="Maria" />

                        <CardContent>
                            <Typography className="nome" gutterBottom variant="h5" component="h2" align="center">
                                Maria Carolina
                            </Typography>
                            <Typography  className="fonte2" variant="body2" color="textSecondary" align="justify" component="p">
                                Olá! Me chamo Maria, tenho 26 anos, e sou Desenvolvedora Full Stack Java Jr, formado pela Generation Brasil. Precisa de algo? Me chama aqui em alguma das minhas redes sociais:
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <Box className='icones'>

                            <Box display="flex" alignItems="center" justifyContent="center">

                                <a href="https://www.linkedin.com/in/maria-carolina-s-n-xavier-05340b191/" target="_blank">
                                    <LinkedInIcon className='redes1' />
                                </a>
                                <a href="https://www.facebook.com/generationbrasil?_rdc=1&_rdr" target="_blank">
                                    <FacebookIcon className='redes1' />
                                </a>
                                <a href="https://github.com/SustenteiGen" target="_blank">
                                    <GitHubIcon className='redes1' />
                                </a>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='redes1' />
                                </a>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
            <Grid xs={4} direction="row" justifyContent="center" alignItems="center" >

                <Card className="margem-card" >
                    <CardActionArea>

                        <CardMedia component="img"

                            alt="Talita"
                            height="400"
                            image=" https://i.imgur.com/kZ8TF47.png"
                            title="Talita" />

                        <CardContent>
                            <Typography className="nome" gutterBottom variant="h5" component="h2" align="center">
                                Talita Ribeiro
                            </Typography>
                            <Typography  className="fonte2" variant="body2" color="textSecondary" align="justify" component="p" >
                                Olá! Me chamo Talita, tenho 28 anos, e sou Desenvolvedora Full Stack Java Jr, formado pela Generation Brasil. Precisa de algo? Me chama aqui em alguma das minhas redes sociais:
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <Box className='icones'>

                            <Box display="flex" alignItems="center" justifyContent="center">

                                <a href="https://www.linkedin.com/in/talita-ribeiro-b5a105186/" target="_blank">
                                    <LinkedInIcon className='redes1' />
                                </a>
                                <a href="https://www.facebook.com/generationbrasil?_rdc=1&_rdr" target="_blank">
                                    <FacebookIcon className='redes1' />
                                </a>
                                <a href="https://github.com/SustenteiGen" target="_blank">
                                    <GitHubIcon className='redes1' />
                                </a>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='redes1' />
                                </a>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
            <Grid xs={4} direction="row" justifyContent="center" alignItems="center" >

                <Card className="margem-card" >
                    <CardActionArea>

                        <CardMedia component="img"

                            alt="Vinicius"
                            height="400"
                            image="https://i.imgur.com/85gQQoh.png"
                            title="Vinicius" />

                        <CardContent>
                            <Typography className="nome" gutterBottom variant="h5" component="h2" align="center" >
                                Vinicius Eidi
                            </Typography>
                            <Typography  className="fonte2" variant="body2" color="textSecondary" component="p" align="justify">
                                Olá! Me chamo Vinicius, tenho 22 anos, e sou Desenvolvedor Full Stack Java Jr, formado pela Generation Brasil. Precisa de algo? Me chama aqui em alguma das minhas redes sociais:
                            </Typography>
                        </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <Box className='icones'>

                            <Box display="flex" alignItems="center" justifyContent="center">

                                <a href="https://www.linkedin.com/in/vinicius-eidi-sato/" target="_blank">
                                    <LinkedInIcon className='redes1' />
                                </a>
                                <a href="https://www.facebook.com/generationbrasil?_rdc=1&_rdr" target="_blank">
                                    <FacebookIcon className='redes1' />
                                </a>
                                <a href="https://github.com/SustenteiGen" target="_blank">
                                    <GitHubIcon className='redes1' />
                                </a>
                                <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                    <InstagramIcon className='redes1' />
                                </a>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
)
}



export default Sobre;