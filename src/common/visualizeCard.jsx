import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function VisualizeCard({ open, setOpen }) {

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"Visualize this scenario"}
            </DialogTitle>
            <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                    position: 'absolute',
                    right: 8,
                    top: 8,
                }}
            >
                <CloseIcon />
            </IconButton>
            <DialogContent sx={{ marginBottom: '5rem' }}>
                <DialogContentText id="alert-dialog-description">
                    You can explore our world of imagination with the aid of this tool.<br /> Enjoy your imagination and have fun.
                </DialogContentText>
            </DialogContent>
            <DialogActions sx={{marginLeft: '1rem', marginBottom: '1rem'}}>
                <Button variant="outlined" onClick={handleClose} sx={{color: 'gray', borderColor:'lightgray'}}>Cancel</Button>
                <Button variant="contained" onClick={handleClose} autoFocus sx={{background: 'lightgray', color: 'gray'}}>
                    Go ahead
                </Button>
            </DialogActions>
        </Dialog>
    );
}