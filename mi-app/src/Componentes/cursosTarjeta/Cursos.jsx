
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './style-tarjetaPrueba.css'
import cursos from './dataTarjeta2';
import Modal from './Modal';
import ContList from './contenido';



export default function BasicCard() {

    return (
        <>
            <div className="container_card">
                {cursos.map(item => (
                    <Card className="tarjeta">
                        <CardContent className="content">
                            <div id="cabecera">
                                <Typography variant="h4" component="div">
                                    {item.nombre}
                                </Typography>
                                <br />
                                <Typography variant="body2" id="pregunta">
                                    ¿Qué Incluye?
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary" id="lista">
                                    <ContList />

                                </Typography>
                                <Typography variant="body2">
                                    {item.duracion}
                                </Typography>
                            </div>
                            <hr />
                            <div id="pie">
                                <br />
                                <Typography variant="body2">
                                    <strong>{item.requisitos}</strong>
                                    <br />
                                    Hasta 12 cuotas sin interés
                                </Typography>
                                <Typography variant="h4" component="div">
                                    {item.precio}
                                </Typography>
                                <br />
                                <CardActions className='boton'>
                                    <Modal />
                                </CardActions>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </>
    );
}


/*
{contenidos.map(cont => (
    <ul>
        <li>{cont.contenido}</li>
    </ul>
))}




    <li>{item.contenido[1]}</li>
                                                <li>{item.contenido[2]}</li>
                                                <li>{item.contenido[3]}</li>







                                                      {lista.map(item2 => (
                                        <ul>
                                            <li>{item2.lista}</li>
                                        </ul>
                                    ))}
*/

