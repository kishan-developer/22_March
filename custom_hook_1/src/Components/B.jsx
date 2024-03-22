import React from 'react'
import UseOnline from '../Utils/useOnline'

function B() {
  return (
    <div>
        B - {UseOnline() ? "Online":"Offline"}
    </div>
  )
}

export default B