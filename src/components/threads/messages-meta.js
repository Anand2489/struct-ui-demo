import {ReactComponent as MessageIcon} from "../../icons/message.svg"

export default function MessagesMeta ({count, threadId}) {
  return (
    <div className="flex" data-id={`count_${threadId}`}>
      <div className="m-r-5">
        <MessageIcon />
      </div>
      <div>{count}</div>
    </div>
  )
}