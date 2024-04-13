import React from "react";
import Page from "./page";
import PrimaryAppBar from "./toolbar";
import AudioCard from "../common/audioCard";
import VisualizeCard from "../common/visualizeCard";

function Paper() {
    const [showAudioCard, setShowAudioCard] = React.useState(false)
    const [showVisualCard, setShowVisualCard] = React.useState(false)

    return (
        <>
        <PrimaryAppBar setShowAudioCard={setShowAudioCard} setVisualCard={setShowVisualCard} />
        {showAudioCard && <AudioCard/>}
        {showVisualCard && <VisualizeCard open={showVisualCard} setOpen={setShowVisualCard}/>}
        <Page/>
        </>
    )
}

export default Paper