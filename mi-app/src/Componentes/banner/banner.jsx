
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './style-banner.css'

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function BasicCard() {
    return (
        <Card className="contenedor">
            <CardContent>
                <Typography variant="h2" component="div" className="titulo">
                   Capacitaciones de Programación
                </Typography>
                <Typography variant="body2" color="text.secondary" className="info">
                   Ponemos a disposición de la comunidad las capacitaciones de Talento TEC, en Programación.
                    Te ofrecemos una variedad de cursos para que elijas el que mas se adapte a tus conocimientos o área del desarrollo de software en la que te desempeñas.
                    <br />
                    Queremos incorporar, potenciar y darle posibilidades de empleabilidad a sanjuaninos en Tecnología,
                    fortaleciendo las economías del conocimiento y así lograr mas sanjuaninos creando y programando para el mundo.
                </Typography>
            </CardContent>
        </Card>
    );
}
