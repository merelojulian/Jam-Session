import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './style-modal.css'
import { fontStyle } from '@mui/system';



export default function ModalBox() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className="card-body">
            <Button className="boton" onClick={handleOpen}><font color="#2b2d42">Inscribirse</font></Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="box">
                    <form>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            <h3>Registrate</h3>
                        </Typography>
                        <Typography sx={{ mt: 2 }}>
                            <p>Llená el formulario</p>
                        </Typography>
                        <Divider />
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <input type="text" name="name" placeholder="Nombre" id="input" />
                            <br />
                            <input type="text" name="lastName" placeholder="Apellido" id="input" />
                            <br />
                            <input type="text" name="dateOfBirth" placeholder="aaaa/mm/dd" id="input" />
                            <br />
                            <input type="email" name="email" placeholder="Mail" id="input" />
                            <br />                      
                            <button type="submit" className="boton">Enviar</button>
                        </Typography>
                    </form>
                </Box>
            </Modal>
        </div>
    );

}
