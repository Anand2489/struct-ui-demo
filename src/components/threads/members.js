import {LazyLoadImage} from 'react-lazy-load-image-component'
const SLICE_COUNT = 4

export default function Members ({members, threadId}) {
  const {total, data} = members
  const extraMembers = total - SLICE_COUNT

  return (
    <div className="members flex">
      {data.slice(0, SLICE_COUNT).map(member => (
        <LazyLoadImage 
          alt={member.userName}
          className="member"
          key={member.user_id}
          height={40}
          src={require(`../../icons/${member.photo_url}`)}
          width={40}
        />
      ))}
      {extraMembers > 0 ? (
        <div className='member extra-counter'>+{extraMembers}</div>
      ) : null}
    </div>
  )
}