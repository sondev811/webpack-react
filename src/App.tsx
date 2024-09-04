import { FC, useState } from 'react'
import reactLogo from './assets/images/logo.svg'
import './assets/styles/app.css'
import './assets/styles/app.scss'

const App: FC = () => {
  const [fullName] = useState('sondev')
  console.log(fullName, process.env.TEST)
  return (
    <div>
      <img src={reactLogo} alt='React Logo' width={100} height={100} />
      <h1>{fullName}</h1>
    </div>
  )
}

export default App
