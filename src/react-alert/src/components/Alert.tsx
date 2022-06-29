import React from 'react'

export enum AlertState {
  Error,
  Success
}

type AlertProps = {
  message: string
  status: AlertState
}

const Alert: React.FC<AlertProps> = ({ message, status }) => {
  return (
    <div>
      {status === AlertState.Error && <span style={{ color: 'red' }}>{message}</span>}
      {status === AlertState.Success && <span style={{ color: 'green' }}>{message}</span>}
    </div>
  )
}

export default Alert
