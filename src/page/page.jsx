import React, { useState } from 'react'
import { ReactReader } from 'react-reader'

const Page = ({selections, setSelections}) => {
  // And your own state logic to persist state
  const [location, setLocation] = useState(null)
  const [rendition, setRendition] = useState()  
  const locationChanged = epubcifi => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi)
  }

  React.useEffect(() => {
    if (rendition) {
      function setRenderSelection(cfiRange, contents) {
        if (rendition) {
          setSelections([])
          setSelections((list) =>
            list.concat({
              text: rendition.getRange(cfiRange).toString(),
              cfiRange,
            })
          )
          // rendition.annotations.add(
          //   'highlight',
          //   cfiRange,
          //   {},
          //   undefined,
          //   'hl',
          //   { fill: 'none', 'fill-opacity': '0.5', 'mix-blend-mode': 'multiply' }
          // )
          // const selection = contents.window.getSelection()
          // selection?.removeAllRanges()
        }
      }
      rendition.on('selected', setRenderSelection)
      return () => {
        rendition?.off('selected', setRenderSelection)
      }
    }
  }, [selections, rendition])

  return (
    <div style={{ height: '80vh' }}>
      <ReactReader
        showToc = {false} 
        location={location}
        locationChanged={locationChanged}
        url="https://react-reader.metabits.no/files/alice.epub"
        getRendition={(_rendition) => {
          setRendition(_rendition)
        }}
      />
    </div>
  )
}

export default Page