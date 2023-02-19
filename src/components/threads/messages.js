import {LazyLoadImage} from 'react-lazy-load-image-component'

export default function Messages ({userName, photo_url, msg}) {
  return (
    <div className="flex message-row">
      <div className="m-r-5">
        <LazyLoadImage 
          alt='user profile image'
          height={30}
          src={require(`../../icons/${photo_url}`)}
          width={30}
        />
      </div>
      <div className="message-line">
        <span className="user-name">{userName}: </span>
        <span >{msg}</span>
      </div>
    </div>
  )
}