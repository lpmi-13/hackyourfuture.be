import React from "react"
import styled from "styled-components"

import { MEDIA_QUERY } from "../../../utils/constants"

export const LeftContainer = styled(({ isReverse, ...rest }) => (
  <div {...rest} />
))`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 50px 0 0;
  width: 50%;
  order: ${({ isReverse }) => (isReverse ? 2 : 1)};

  > p {
    margin-bottom: 30px;
  }

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    order: 2;
    padding: 50px 0 0 0;
  }
`

export const RightContainer = styled(({ isReverse, ...rest }) => (
  <div {...rest} />
))`
  width: 50%;
  height: 100%;
  min-height: 400px;
  order: ${({ isReverse }) => (isReverse ? 1 : 2)};

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    width: 100%;
    order: 1;
  }
`

export const Container = styled.div`
  width: 100%;
  display: flex;

  @media ${MEDIA_QUERY.TABLET_AND_DOWN} {
    flex-direction: column;
  }
`