import ePub from 'epubjs'
import React, { useState } from 'react'
import { ReactReader } from 'react-reader'

const Page = ({ selections, setSelections, location, setLocation }) => {
  // And your own state logic to persist state
  const [rendition, setRendition] = useState()
  const [page, setPage] = useState('')
  const tocRef = React.useRef(null)
  // const [firstRenderDone, setFirstRenderDone] = useState(false)
  const locationChanged = epubcifi => {
    // epubcifi is a internal string used by epubjs to point to a location in an epub. It looks like this: epubcfi(/6/6[titlepage]!/4/2/12[pgepubid00003]/3:0)
    setLocation(epubcifi);
    getContent(epubcifi)
    if (renditionRef.current && tocRef.current) {
      const { displayed } = renditionRef.current.location.start
      setPage(
        `Page ${displayed.page} of ${displayed.total} of this chapter`
      )
    }
    // if (!firstRenderDone) {
    //   setLocation(localStorage.getItem('book-progress')) // getItem returns null if the item is not found.
    //   setFirstRenderDone(true)
    //   return
    // }

    // // This is the code that runs everytime the page changes, after the initial render.
    // // Saving the current epubcifi on storage...
    // localStorage.setItem('book-progress', epubcifi)
  }
  const renditionRef = React.useRef(null)
  const getContent = (epubcifi) => {
    // Get the body element
    let body = document.body;

    // Get the content of the body element
    let content = body.innerHTML;

    // console.log(content);
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
          // console.log(cfiRange)
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
  }, [selections, rendition, location])

  return (
    <>
      <div className="react-reader-book"
        style={{ height: '80vh' }}>
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url="https://react-reader.metabits.no/files/alice.epub"
          getRendition={(_rendition) => {
            renditionRef.current = _rendition
            setRendition(_rendition)
          }}
          tocChanged={toc => (tocRef.current = toc)}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          right: '1rem',
          left: '1rem',
          textAlign: 'center',
          zIndex: 1
        }}
      >
        {page}
      </div>
    </>

  )
}

export default Page