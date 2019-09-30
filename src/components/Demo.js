import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 20px;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  text-align: center;
`

const Exercises = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`

const ExerciseWrapper = styled.div`
  flex-basis: 50%;
  width: 50%;
  padding: 10px;
  height: 100%;

  > h3 {
    position: relative;
  }

  > h3:after {
    content: '';
    width: 80%;
    border-bottom: 1px solid #ccc;
    position: absolute;
    left: 10%;
    top: 100%;
  }

  & + div {
    border-left: 2px solid #ccc;
  }
`

const ExerciseInner = styled.div`
  padding: 10px;
  border: 1px solid azure;
`

const ExerciseContainer = ({ title, children }) => {
  return (
    <ExerciseWrapper>
      <h3>{title}</h3>
      <ExerciseInner>{children}</ExerciseInner>
    </ExerciseWrapper>
  )
}

export const Exercise = ({ title, children, component: Component }) => (
  <ExerciseContainer title={title || 'Exercise'}>{Component ? <Component /> : children}</ExerciseContainer>
)

export const Final = ({ title, children, component: Component }) => (
  <ExerciseContainer title={title || 'Final'}>{Component ? <Component /> : children}</ExerciseContainer>
)

export const Demo = ({ title, children }) => {
  return (
    <Wrapper>
      <h1>{title}</h1>
      <Exercises>{children}</Exercises>
    </Wrapper>
  )
}
