import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BootstrapDialog from './botstrapDialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IconButton } from '@mui/material';
import SwapHorizIcon from '@mui/icons-material/SwapHoriz';
import CloseIcon from '@mui/icons-material/Close';
import translateContent from '../actions/llm';

export default function DialogSelect({ open, setOpen }) {
    const [translateFrom, setTranslateFrom] = React.useState('English');
    const [translateTo, setTranslateTo] = React.useState('Hindi');


    const handleChangeTF = (event) => {
        setTranslateFrom(Number(event.target.value) || '');
    };

    const handleChangeTT = (event) => {
        setTranslateTo(Number(event.target.value) || '');
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason !== 'backdropClick') {
            setOpen(false);
        }
    };

    React.useEffect(() => {
        translateContent(
            "This ebook is for the use of anyone anywhere in the United States and most other parts of the world at no cost and with almost no restrictions whatsoever.", 
            "Hindi").then(res => console.log(res)
            )
    }, [])

    return (
        <div>
            <BootstrapDialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>
                    <div ><b>Translate</b></div>
                    <span style={{ fontSize: '12px', marginLeft: "2px" }}>Kindly select the language yoy want this to translated to.</span>
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
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                    </DialogContentText>
                    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <FormControl sx={{ m: 1, width: 200 }}>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={translateFrom}
                                onChange={handleChangeTF}

                            >
                                <MenuItem value={"English"}>English</MenuItem>
                                <MenuItem value={"Hindi"}>Hindi</MenuItem>
                                <MenuItem value={"Telugu"}>Telugu</MenuItem>
                            </Select>
                        </FormControl>
                        <IconButton aria-label="swap">
                            <SwapHorizIcon/>
                        </IconButton>
                        <FormControl sx={{ m: 1, minWidth: 200 }}>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={translateTo}
                                onChange={handleChangeTT}
                            >
                                <MenuItem value={"English"}>English</MenuItem>
                                <MenuItem value={"Hindi"}>Hindi</MenuItem>
                                <MenuItem value={"Telugu"}>Telugu</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{color : 'gray'}}>Cancel</Button>
                    <Button onClick={handleClose} sx={{color : 'gray'}}>Translate</Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}