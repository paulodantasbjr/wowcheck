import React from 'react'
import PropTypes from 'prop-types'

// import Image from 'next/image';

import { SubTitle, Title } from '../styles/pages/index';

function index(props) {
  return (
    <>
      <Title>My page</Title>
      {/* <Image alt="teste" src="/images/logo.jpg" width={500} height={500} /> */}
      <SubTitle>Testando</SubTitle>
    </>
  )
}

index.propTypes = {

}

export default index


