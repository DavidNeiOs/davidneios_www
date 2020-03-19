import React, { SFC } from "react"
import styled from "styled-components"

import { TextTypes, textPresets } from "../../theme"

const TextNode = styled.span``

interface TextProps {
  variant?: TextTypes
  text?: string
  style?: React.CSSProperties
  children?: React.ReactNode
  withComponent?: any
  className?: string
}

export const Text: SFC<TextProps> = ({
  text,
  children,
  style = {},
  variant = "default",
  withComponent,
  className,
}) => {
  const content = text || children
  const finalStyle = { ...textPresets[variant], ...style }

  return (
    <TextNode style={finalStyle} as={withComponent} className={className}>
      {content}
    </TextNode>
  )
}
