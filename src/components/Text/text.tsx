import React, { SFC } from "react"
import styled, { Keyframes } from "styled-components"
import merge from "lodash/merge"

import { TextTypes, textPresets } from "../../theme"

const TextNode = styled.span<{ animation?: Keyframes }>`
  animation: ${props => props.animation} 1s ease-in;
`

interface TextProps {
  variant?: TextTypes
  text?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  withComponent?: any
  animation?: Keyframes
}

export const Text: SFC<TextProps> = ({
  text,
  children,
  style = {},
  variant = "default",
  withComponent,
  animation,
}) => {
  const content = text || children
  const finalStyle = merge({ margin: "8px 0" }, textPresets[variant], style)

  return (
    <TextNode style={finalStyle} as={withComponent} animation={animation}>
      {content}
    </TextNode>
  )
}
