import React, { ReactNode } from "react"
import Helmet from 'react-helmet'

import "./layout.scss"

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return(
      <>
        <main>{children}</main>
      </>
    )
  }

export default Layout
