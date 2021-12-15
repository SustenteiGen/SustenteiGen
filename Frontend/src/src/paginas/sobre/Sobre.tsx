import React from 'react';
import {Grid, Box, Typography} from '@material-ui/core';

function Sobre() {
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#FFFFFF" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Sustentei E-Commerce(a)!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "black", fontWeight: "bold" }}>Baseado no objetivo 11 de Desenvolvimento Sustentável da ONU, a Sustentei tem como missão impactar o publico com a venda de produtos sustentáveis, ecológicos e biodegradáveis, além de notificar o usuário sobre a emissão de carbono referente ao frete do(s) produto(s).</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://png.pngtree.com/png-vector/20190130/ourlarge/pngtree-hand-drawn-cartoon-meeting-room-meeting-office-staff-white-collar-elite-png-image_636347.jpg" alt="imagem Sobre Nós" width="600px" height="500px" />
                </Grid>
                <Grid item xs={6} >
                <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "black", fontWeight: "bold" }}>Equipe de Desenvolvimento(a)!</Typography>
                </Grid>
                
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
    </Grid>
    )
}

export default Sobre;