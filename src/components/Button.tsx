import React from 'react'

type Props = {
    value?: string
handleOnClick?: ()=>{}| void
}


function Button({value, handleOnClick}:Props) {
  return (
      <button onClick={handleOnClick}>{ value}</button>
  )
}

export default Button