import { useState } from 'react'
import './button.css'

type ButtonProps = {
  primary?: boolean
}

export const Button = ({
  primary = true,
}: ButtonProps) => {
  const [isToggleOn, setIsToggleOn] = useState(true)

  const className = primary ? 'primary' : 'secondary'

  return (
    <button
      className={className}
      onClick={() => setIsToggleOn((prev) => !prev)}
    >
      {isToggleOn ? 'ON' : 'OFF'}
    </button>
  )
}
