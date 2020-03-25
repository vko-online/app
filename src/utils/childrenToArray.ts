import React, { ReactElement } from 'react'

// eslint-disable-next-line
type ChildElement = ReactElement<any> | null

const childrenToArray = (children: ChildElement[]): ChildElement[] => {
  const result: ChildElement[] = []

  React.Children.forEach(children, (element: ChildElement): void => {
    result.push(element)
  })

  return result
}

export default childrenToArray
