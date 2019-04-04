'use strict'

import React from 'react'
import styled from 'styled-components'
import { footerHeight } from 'utils/constants'

const MainFooter = () => (
  <Footer>
    &copy; {new Date().getFullYear()}
  </Footer>
)

const Footer = styled.footer`
  align-items: center;
  height: ${footerHeight};
  background: #333;
  display: flex;
  justify-content: center;
  color: #fff;
`

export default MainFooter
