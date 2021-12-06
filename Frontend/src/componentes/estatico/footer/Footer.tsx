import React from "react";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Grid, Box, Typography } from "@material-ui/core";
import './Footer.css';


function Footer() {
    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box style={{backgroundColor:'#067302', height:'30px'}}>

                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://web.telegram.org/k/" target="_blank">
                                <TelegramIcon className='redes' />
                            </a>
                            <a href="https://www.linkedin.com/school/generationbrasil/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                            <a href="https://www.facebook.com/generationbrasil?_rdc=1&_rdr" target="_blank">
                                <FacebookIcon className='redes' />
                            </a>
                            <a href="https://github.com/SustenteiGen" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
                            <a href="https://www.instagram.com/generationbrasil/" target="_blank">
                                <InstagramIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={2}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >Sustentei ©2021 - Todos os direitos reservados</Typography>
                        </Box>

                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Footer;