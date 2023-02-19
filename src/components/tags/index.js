import './style.scss'

export default function Tags ({tags}) {
  return (
    <div className='flex'>
      {tags.map(tag => (
        <span key={tag} className='tag'>#{tag}</span>
      ))}
    </div>
  )
}