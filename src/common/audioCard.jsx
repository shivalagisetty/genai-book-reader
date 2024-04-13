import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import LinearProgress from '@mui/material/LinearProgress';
import PauseIcon from '@mui/icons-material/Pause';
import Forward10Icon from '@mui/icons-material/Forward10';
import Replay10Icon from '@mui/icons-material/Replay10';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function AudioCard() {
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [cardWidth, setCardWidth] = React.useState('47vh');
    const [showCard, setShowCard] = React.useState(true);
    const [marginLeft, setMarginLeft] = React.useState('0.5rem');
    const [borderRadius, setBorderRadius] = React.useState('1rem');


    const onClose = () => {
        setCardWidth('3rem');
        setMarginLeft('0');
        setBorderRadius('0 1rem 1rem 0')
        setShowCard(false);
    }

    const onOpen = () => {
        setCardWidth('47vh');
        setMarginLeft('0.5rem')
        setBorderRadius('1rem')
        setShowCard(true);
    }

    return (
        <Card sx={{
            zIndex: 3, position: 'absolute', display: 'flex',
            backgroundColor: 'lightgrey', width: cardWidth, borderRadius: borderRadius,
            marginTop: '3rem', marginLeft:marginLeft
        }}>
            {showCard && <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto', display: 'flex' }}>
                    <img
                        src='src/assets/8ee780e2-c08c-4fca-8403-da38bf61e8ca.jpeg'
                        width={150}
                        height={150} />
                    <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
                        <Typography component="div" variant="h6" aria-label='title'>
                            <b> Alice in the wonderland </b>
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" aria-label='chapter'>
                            Chapter 1
                        </Typography>
                    </div>
                </CardContent>
                <LinearProgress variant="determinate" color="inherit" value={50} sx={{ ml: 1, mr: 1, borderRadius: 10 }} />
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, justifyContent: 'center' }}>
                    <IconButton aria-label="previous">
                        <Replay10Icon />
                    </IconButton>
                    <IconButton aria-label="play/pause" onClick={() => setIsPlaying(!isPlaying)}>
                        {isPlaying ?
                            <PlayArrowIcon sx={{ height: 38, width: 38 }} /> :
                            <PauseIcon sx={{ height: 38, width: 38 }} />
                        }
                    </IconButton>
                    <IconButton aria-label="next">
                        <Forward10Icon />
                    </IconButton>
                </Box>
            </Box>}
            {showCard && <div>
                <IconButton aria-label="close" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            </div>}
            {!showCard && <Box>
                <IconButton aria-label="close" onClick={onOpen} sx={{height:'15rem'}}>
                    <ArrowForwardIosIcon />
                </IconButton>
            </Box>}
        </Card>
    );
}

// import React from 'react';
// import useAudio from '../hooks/useAudio';
// export default function Player() {
    
//   const { element, state, controls } = useAudio({
//     src:
//       'https://files.ceenaija.com/wp-content/uploads/music/2021/12/Jenn_Johnson_Bethel_-_Who_You_Are_CeeNaija.com_.mp3',
//   });

//   return (
//     <div>
//       {element}
//       <button onClick={() => controls.seek(state.time - 10)}>-10 sec</button>
//       <button
//         onClick={() => {
//           state.paused ? controls.play() : controls.pause();
//         }}
//       >
//         {state.paused ? 'play' : 'pause'}
//       </button>
//       <button onClick={() => controls.seek(state.time + 10)}>+10 sec</button>
//       <br />
//       {Math.round(state.time)} / {Math.round(state.duration)}
//       <br />
//       Playback Speed (100 = 1)
//       <br />
//       <input
//         onChange={e => controls.setPlaybackRate(e.target.value / 100)}
//         type="number"
//         value={state.playbackRate * 100}
//       />
//     </div>
//   );
// };