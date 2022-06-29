import Alert, { AlertState } from './components/Alert'
import { Fragment } from 'react'

export default function App() {
  return (
    <Fragment>
      <Alert message="Ooops!!" status={AlertState.Error} />
      <Alert message="Sucesso!!" status={AlertState.Success} />
    </Fragment>
  )
}
