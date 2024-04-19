import React from "react";
import Page from "./page";
import PrimaryAppBar from "./toolbar";
import AudioCard from "../common/audioCard";
import VisualizeCard from "../common/visualizeCard";
import TranaslateCard from "../common/translateCard";
import TextFormatDialog from "../common/textFormatDialog";

function Paper() {
    const [showAudioCard, setShowAudioCard] = React.useState(false)
    const [showVisualCard, setShowVisualCard] = React.useState(false)
    const [showTranslateCard, setShowTranslateCard] = React.useState(false)
    const [showTextFormatDialog, setShowTextFormatDialog] = React.useState(false)
    const [selections, setSelections] = React.useState([])
    const [location, setLocation] = React.useState(null)
    const [fontStyles, setFontStyles] = React.useState({
        font : 'times new roman',
        fontSize : '110%',
        fontWeight : 100
    })
   React.useEffect(()=> {
    if(localStorage.getItem('book-progress')){
        setLocation(localStorage.getItem('book-progress'))
    }
   }, [])
   
    return (
        <>
        <PrimaryAppBar setShowAudioCard={setShowAudioCard} setVisualCard={setShowVisualCard} setTranslateCard={setShowTranslateCard} setTextFormatCard={setShowTextFormatDialog} location={location}/>
        {showAudioCard && <AudioCard/>}
        {showVisualCard && <VisualizeCard open={showVisualCard} setOpen={setShowVisualCard}/>}
        {showTranslateCard && <TranaslateCard open={showTranslateCard} setOpen={setShowTranslateCard} highlihghtedContent={selections}/>}
        {showTextFormatDialog && <TextFormatDialog open={showTextFormatDialog} setOpen={setShowTextFormatDialog} styles={fontStyles} setStyles={setFontStyles}/>}
        <Page selections={selections} setSelections={setSelections} location={location} setLocation={setLocation} fontStyles={fontStyles}/>
        </>
    )
}

export default Paper