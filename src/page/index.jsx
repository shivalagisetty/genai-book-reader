import React from "react";
import Page from "./page";
import PrimaryAppBar from "./toolbar";
import AudioCard from "../common/audioCard";
import VisualizeCard from "../common/visualizeCard";
import TranaslateCard from "../common/translateCard";
import TextFormatDialog from "../common/textFormatDialog";
import { translateInnerHTML } from "../actions/llm";

function Paper() {
    const [showAudioCard, setShowAudioCard] = React.useState(false)
    const [showVisualCard, setShowVisualCard] = React.useState(false)
    const [showTranslateCard, setShowTranslateCard] = React.useState(false)
    const [showTextFormatDialog, setShowTextFormatDialog] = React.useState(false)
    const [selections, setSelections] = React.useState([])
    const [location, setLocation] = React.useState(null)
    const [fontStyles, setFontStyles] = React.useState({
        font: 'times new roman',
        fontSize: '110%',
        fontWeight: 100
    })
    const [glbTranslateTo, setGlbTranslateTo] = React.useState(null);
    const [pageContent, setPageContent] = React.useState("")
    const [translationTrigger, setTranslationTrigger] = React.useState(false)

    React.useEffect(() => {
        if (localStorage.getItem('book-progress')) {
            setLocation(localStorage.getItem('book-progress'))
        }
    }, [])

    React.useEffect(() => {
        if (!selections.length && glbTranslateTo) {
            let body = document.getElementsByTagName('iframe');
            let content = body[0].srcdoc;
            const parser = new DOMParser();
            const doc = parser.parseFromString(content, "text/html");
            const abody = doc.querySelector("body");
            const innerT = abody.innerHTML;
            translateInnerHTML(innerT, glbTranslateTo).then(res => {
                abody.innerHTML = res
                document.querySelector("iframe").setAttribute('srcdoc', new XMLSerializer().serializeToString(doc))
            })
        }
    }, [translationTrigger])

    return (
        <>
            <PrimaryAppBar setShowAudioCard={setShowAudioCard} setVisualCard={setShowVisualCard} setTranslateCard={setShowTranslateCard} setTextFormatCard={setShowTextFormatDialog} location={location} />
            {showAudioCard && <AudioCard pageContent={pageContent} />}
            {showVisualCard && <VisualizeCard open={showVisualCard} setOpen={setShowVisualCard} />}
            {showTranslateCard && <TranaslateCard open={showTranslateCard} setOpen={setShowTranslateCard} highlihghtedContent={selections} setGlbTranslateTo={setGlbTranslateTo} setHighlightedContent={setSelections} setTranslationTrigger={setTranslationTrigger}/>}
            {showTextFormatDialog && <TextFormatDialog open={showTextFormatDialog} setOpen={setShowTextFormatDialog} styles={fontStyles} setStyles={setFontStyles} />}
            <Page selections={selections} setSelections={setSelections} location={location} setLocation={setLocation} fontStyles={fontStyles} setPageContent={setPageContent} pageContent={pageContent} />
        </>
    )
}

export default Paper