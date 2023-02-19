import mockData from '../../data.json'
import Thread from './thread'
import "./style.scss"

export default function Threads (props) {
  console.log(mockData)
  return (
    <div className='threads-container'>
      {mockData.map((data) => (<Thread key={data.id} {...data}/>))}
    </div>
  )
}