import * as React from 'react';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import BootstrapDialog from './botstrapDialog';

export default function VisualizeCard({ open, setOpen }) {

    const [visualsesOn, SetVisaulsOn] = React.useState(false);

    const getDialogContent = () => {

        return (
            <div>
                {
                    !visualsesOn && <>
                        <DialogContent sx={{ marginBottom: '5rem' }}>
                            <DialogContentText id="alert-dialog-description">
                                You can explore our world of imagination with the aid of this tool.<br /> Enjoy your imagination and have fun.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions sx={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                            <Button variant="outlined" onClick={handleClose} sx={{ color: 'gray', borderColor: 'lightgray' }}>Cancel</Button>
                            <Button variant="contained" onClick={() => SetVisaulsOn(true)} autoFocus sx={{ background: 'lightgray', color: 'gray' }}>
                                Go ahead
                            </Button>
                        </DialogActions>
                    </>
                }
                {
                    visualsesOn && <div style={{display:'flex', justifyContent:'center'}}>
                        <img
                            src='src/assets/8ee780e2-c08c-4fca-8403-da38bf61e8ca.jpeg'
                            width={450}
                            height={450} />
                    </div>
                }
            </div>
        )

    }

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <BootstrapDialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            width='xl'
        >
            <div style={visualsesOn ? { height: '75dvh', width: '75dvh', background:'gray'} : {}}>
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
                {getDialogContent()}
            </div>
        </BootstrapDialog>
    );
}