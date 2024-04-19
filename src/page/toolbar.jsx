import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TranslateIcon from '@mui/icons-material/Translate';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Typography } from '@mui/material';


export default function PrimaryAppBar({setShowAudioCard, setVisualCard, setTranslateCard,setTextFormatCard, location}) {

    const iconStylesSx = { padding: 1, ml: 0 }

    const iconLabelFontSize = 10

    const bookmark = localStorage.getItem('book-progress')

    const [isBookmarked , setIsBookmarked] = React.useState(false)

    React.useEffect(() => {
        setIsBookmarked(bookmark === location)
    },[location])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{background: "#c7c6c6"}}>
                <Toolbar style={{ color: 'black', margin:'0.5rem 0 0.5rem 0' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="library"
                            sx={iconStylesSx}
                        >
                            <LibraryBooksIcon />
                        </IconButton>
                        <Typography fontSize={iconLabelFontSize} >
                            Library
                        </Typography>
                    </div>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex', gap: '2rem' } }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <IconButton size="large" aria-label="read aloud" color="inherit" sx={iconStylesSx} onClick={() => setShowAudioCard(true)}>
                                <GraphicEqIcon />
                            </IconButton>
                            <Typography fontSize={iconLabelFontSize} >
                                Read aloud
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <IconButton
                                size="large"
                                aria-label="visualize the page"
                                color="inherit"
                                sx={iconStylesSx}
                                onClick={() => setVisualCard(true)}
                            >
                                <VisibilityIcon />
                            </IconButton>
                            <Typography fontSize={iconLabelFontSize} >
                                Visualize
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="translate"
                                color="inherit"
                                sx={iconStylesSx}
                                onClick={() => setTranslateCard(true)}
                            >
                                <TranslateIcon />
                            </IconButton>
                            <Typography fontSize={iconLabelFontSize} >
                                Translate
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="text format"
                                color="inherit"
                                sx={iconStylesSx}
                                onClick={() => setTextFormatCard(true)}
                            >
                                <FormatColorTextIcon />
                            </IconButton>
                            <Typography fontSize={iconLabelFontSize} >
                                Text format
                            </Typography>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="bookmark"
                                color="inherit"
                                sx={iconStylesSx}
                                onClick={() => {
                                    localStorage.setItem('book-progress', location);
                                    setIsBookmarked(true)
                                }}
                            >
                                {(!isBookmarked) ? <BookmarkBorderIcon /> : <BookmarkIcon/>}
                            </IconButton>
                            <Typography fontSize={iconLabelFontSize} >
                                Bookmark
                            </Typography>
                        </div>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}