export default function Likes ({likes, threadId}) {
  const handleLikeClick = ev => {
    const threadId = ev.target.dataset.id
  }
  return (
    <div data-id={`like_${threadId}`} onClick={handleLikeClick}>
      <span className="m-r-5">&#128512;</span>
      <span>{likes > 1 ? likes : ''}</span>
    </div>
  )
}