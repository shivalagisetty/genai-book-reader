import React from "react";
import Page from "./page";
import PrimaryAppBar from "./toolbar";
import AudioCard from "../common/audioCard";
import VisualizeCard from "../common/visualizeCard";
import TranaslateCard from "../common/translateCard";

function Paper() {
    const [showAudioCard, setShowAudioCard] = React.useState(false)
    const [showVisualCard, setShowVisualCard] = React.useState(false)
    const [showTranslateCard, SetShowTranslateCard] = React.useState(false)

    return (
        <>
        <PrimaryAppBar setShowAudioCard={setShowAudioCard} setVisualCard={setShowVisualCard} setTranslateCard={SetShowTranslateCard}/>
        {showAudioCard && <AudioCard/>}
        {showVisualCard && <VisualizeCard open={showVisualCard} setOpen={setShowVisualCard}/>}
        {showTranslateCard && <TranaslateCard open={showTranslateCard} setOpen={SetShowTranslateCard}/>}
        <Page/>
        </>
    )
}

export default Paper