import ePub from 'epubjs'
import React, { useState } from 'react'
import { ReactReader } from 'react-reader'
import { translateInnerHTML } from '../actions/llm'

const Page = ({ selections, setSelections, location, setLocation, fontStyles, setPageContent, pageContent }) => {

  const [rendition, setRendition] = useState()
  const [page, setPage] = useState('')
  const tocRef = React.useRef(null)

  const renditionRef = React.useRef(null)

  
  const getContent = () => {
    let body = document.getElementsByTagName('iframe');
    let content = body[0].srcdoc;
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const abody = doc.querySelector("body");
    if(pageContent !== abody.textContent) setPageContent(abody.textContent)
  }
  
  const locationChanged = epubcifi => {
    setLocation(epubcifi);
    getContent();
    if (renditionRef.current && tocRef.current) {
      const { displayed } = renditionRef.current.location.start
      setPage(
        `Page ${displayed.page} of ${displayed.total} of this chapter`
      )
    }
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
        }
      }
      rendition.on('selected', setRenderSelection)
      rendition.themes.font(fontStyles.font)
      rendition.themes.fontSize(fontStyles.fontSize)
      rendition.themes.override('font-weight', `${fontStyles.fontWeight}`)
      // document.querySelector("iframe").setAttribute('srcDoc', "<div>Hi<div/>")
      return () => {
        rendition?.off('selected', setRenderSelection)
      }
    }
  }, [selections, rendition, location, fontStyles])

  return (
    <>
      <div id="react-reader-book"
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
          className='react-reader-content'
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