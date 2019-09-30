import React from 'react'
import { Demo, Exercise, Final } from '../../../components/Demo'
import { FilmList } from './class-components-exercise'
import { FilmList as Solution } from './class-components-solution'

import films from './sampleData.json'

const ClassComponentsDemo = () => {
  return (
    <Demo title="Class Components">
      <Exercise>{FilmList ? <FilmList films={films} /> : null}</Exercise>
      <Final>
        <Solution films={films} />
      </Final>
    </Demo>
  )
}
export default ClassComponentsDemo
