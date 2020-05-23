import React from "react"
//@ts-ignore
import BasePortableText from "@sanity/block-content-to-react"

interface PortableTextProps {
  blocks: any[]
}

export const PortableText: React.FC<PortableTextProps> = ({ blocks }) => (
  <BasePortableText blocks={blocks} />
)
