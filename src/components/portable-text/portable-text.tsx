import React from "react"
//@ts-ignore
import BasePortableText from "@sanity/block-content-to-react"
import { Link } from "../link"

interface PortableTextProps {
  blocks: any[]
}

const serializers = {
  marks: {
    link: (props: any) => <Link to={props.mark.href}>{props.children}</Link>,
  },
}

export const PortableText: React.FC<PortableTextProps> = ({ blocks }) => (
  <BasePortableText blocks={blocks} serializers={serializers} />
)
