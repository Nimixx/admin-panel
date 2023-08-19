
import React from 'react'

type BtnProps = {
  onClick: () => void
}

export default function Switch({ onClick }: BtnProps) {
  return <button onClick={onClick}>Switch</button>
}
