import React from "react";
import BootstrapDialog from './botstrapDialog';
import { Box, Button, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, IconButton, MenuItem, Select, Slider } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';


export default function TextFormatDialog({ open, setOpen, styles, setStyles }) {

    const [size, setSize] = React.useState(styles?.fontSize)
    const [bold, setBold] = React.useState(styles?.fontWeight)
    const [font, setFont] = React.useState(styles?.font)

    const handleClose = () => {
        setOpen(false);
    };

    function valuetext(value) {
        setBold(value);
      }

    function onApply() {
        setStyles({
            font : font,
            fontWeight : bold,
            fontSize : size
        });
        handleClose();
    }

    return (
        <div>
            <BootstrapDialog fullWidth maxWidth="sm" open={open} onClose={handleClose}>
                <DialogTitle>
                    <div ><b>Text format</b></div>
                    <span style={{ fontSize: '12px', marginLeft: "2px" }}>Personalise your experience by customising the text style to suit your preferences.</span>
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
                    <Box component="form" sx={{ display: 'flex', flexDirection: 'column' }}>
                        <FormControl fullWidth sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: '1rem', m: '0 1.5rem 1.5rem 1.5rem' }}>
                            Font Family
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={font}
                                onChange={(event) => setFont(event.target.value)}
                                sx={{ minWidth: '15rem' }}

                            >
                                <MenuItem value={"calibri"}>Calibri</MenuItem>
                                <MenuItem value={"times new roman"}>Times New Roman</MenuItem>
                                <MenuItem value={"Spanish"}>Spanish</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '4rem', m: '0 1.5rem 1.5rem 1.5rem' }}>
                        Bold
                        <Slider
                            aria-label="Bold"
                            defaultValue={bold}
                            getAriaValueText={valuetext}
                            shiftStep={30}
                            step={200}
                            marks
                            min={200}
                            max={1000}
                            sx={{width:'25rem'}}
                        />
                        </FormControl>
                        <FormControl sx={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', gap: '4rem', m: '0 1.5rem 1.5rem 1.5rem', }}>
                            Size
                            <Select
                                labelId="font-size-select-label"
                                id="font size"
                                value={size}
                                sx={{ minWidth: '15rem' }}
                                onChange={(event) => setSize(event.target.value)}
                            >
                                <MenuItem value={"100%"}>22</MenuItem>
                                <MenuItem value={"110%"}>24</MenuItem>
                                <MenuItem value={"120%"}>26</MenuItem>
                                <MenuItem value={"130%"}>28</MenuItem>
                                <MenuItem value={"140%"}>30</MenuItem>
                                <MenuItem value={"150%"}>32</MenuItem>
                                <MenuItem value={"160%"}>34</MenuItem>

                            </Select>
                        </FormControl>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{ color: 'gray' }}>Cancel</Button>
                    <Button onClick={onApply} sx={{ color: 'gray' }}>Apply</Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    )
}