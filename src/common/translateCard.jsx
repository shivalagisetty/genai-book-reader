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
import {translateContent} from '../actions/llm';

export default function DialogSelect({ open, setOpen, highlihghtedContent , setGlbTranslateTo, setHighlightedContent, setTranslationTrigger  }) {
    const [translateFrom, setTranslateFrom] = React.useState('English');
    const [translateTo, setTranslateTo] = React.useState('Hindi');
    const [translatedContent, setTranslatedContent] = React.useState("");
    const [referenceContent, setReferenceContent] = React.useState('')


    const handleChangeTF = (event) => {
        setTranslateFrom(event.target.value);
    };

    const handleChangeTT = (event) => {
        setTranslateTo(event.target.value);
    };

    const handleSwap = () => {
        const tF = translateFrom
        const tt = translateTo
        setTranslateFrom(tt);
        setTranslateTo(tF);
    };

    const handleClose = () => {
            setOpen(false);
            setHighlightedContent([])
    };

    React.useEffect(() => {
        setReferenceContent(highlihghtedContent[0]?.text);
    }, [])

    const onClickTranslateContent = () => {
        if(!highlihghtedContent.length){
            setGlbTranslateTo(translateTo)
            setTranslationTrigger(Math.random());
            handleClose()
        }
       if(highlihghtedContent.length){
        translateContent(referenceContent, translateTo).then(llmOutput => {
            setTranslatedContent(JSON.parse(llmOutput).translatedContent)
        })
       }
    }

    return (
        <div>
            <BootstrapDialog disableEscapeKeyDown open={open} onClose={handleClose}>
                <DialogTitle>
                    <div ><b>Translate {!highlihghtedContent.length && 'the page'}</b></div>
                    {!highlihghtedContent.length && <span style={{ fontSize: '12px', marginLeft: "2px" }}>Kindly select the language you wish to have this translated to.</span>}
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
                        <FormControl sx={{ m: 1, width: 230 }}>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={translateFrom}
                                onChange={handleChangeTF}

                            >
                                <MenuItem value={"English"}>English</MenuItem>
                                <MenuItem value={"Hindi"}>Hindi</MenuItem>
                                <MenuItem value={"Spanish"}>Spanish</MenuItem>
                                <MenuItem value={"Bengali"}>Bengali</MenuItem>
                                <MenuItem value={"Odia"}>Odia</MenuItem>
                                <MenuItem value={"Japanese"}>Japanese</MenuItem>

                            </Select>
                        </FormControl>
                        <IconButton aria-label="swap"  onClick={handleSwap}>
                            <SwapHorizIcon/>
                        </IconButton>
                        <FormControl sx={{ m: 1, minWidth: 230, ml:'10px' }}>
                            <Select
                                labelId="demo-dialog-select-label"
                                id="demo-dialog-select"
                                value={translateTo}
                                onChange={handleChangeTT}
                            >
                                <MenuItem value={"English"}>English</MenuItem>
                                <MenuItem value={"Hindi"}>Hindi</MenuItem>
                                <MenuItem value={"Spanish"}>Spanish</MenuItem>
                                <MenuItem value={"Bengali"}>Bengali</MenuItem>
                                <MenuItem value={"Odia"}>Odia</MenuItem>
                                <MenuItem value={"Japanese"}>Japanese</MenuItem>

                            </Select>
                        </FormControl>
                        {highlihghtedContent && <div style={{display:'flex', flexDirection:'row', gap:'1.5rem'}}>
                            <div style={{width:'230px',padding:'1rem'}}>
                                {referenceContent}
                            </div>
                            <div style={{width:'230px',padding:'1rem'}}>
                                {translatedContent}
                            </div>
                        </div> }
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} sx={{ color: 'gray' }}>Cancel</Button>
                    <Button onClick={onClickTranslateContent} sx={{ color: 'gray' }}>Translate</Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}