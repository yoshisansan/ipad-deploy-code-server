/** @jsx jsx */
import React from 'react'
import { css, jsx } from '@emotion/react';

type SquareT = {
  value: null | String,
  onClick: () => void
}

const Square = (props: SquareT) => {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square