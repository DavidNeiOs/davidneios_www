import React, { SFC } from "react"
import styled from "styled-components"
import merge from "lodash/merge"

import { TextTypes, textPresets } from "../../Theme/typography"

const TextNode = styled.span``

interface TextProps {
  variant?: TextTypes
  text?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  withComponent?: any
}

const Text: SFC<TextProps> = ({
  text,
  children,
  style = {},
  variant = "default",
  withComponent,
}) => {
  const content = text || children
  const finalStyle = merge({}, textPresets[variant], style)

  return (
    <TextNode style={finalStyle} as={withComponent}>
      {content}
    </TextNode>
  )
}

export default Text
