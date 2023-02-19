import Tags from "../tags"
import {ReactComponent as ReadThreadIcon} from "../../icons/read-thread.svg"
import Messages from "./messages"
import Likes from "./likes"
import MessagesMeta from './messages-meta'
import TimeAgo from 'javascript-time-ago'
import Members from "./members"

import en from 'javascript-time-ago/locale/en'
TimeAgo.addDefaultLocale(en)


export default function Thread ({id, lastActivity, likes, members, messages, tags, title}) {
  return (
    <div className="thread">
      <div className="titleContainer">
          <div className="flex">
            <div className="m-r-10">
              <ReadThreadIcon />
            </div>
            <div className="title"><b>{title}</b></div>
          </div>
          <Tags tags={tags} />
      </div>
      <div className="body">
        {messages.data.map(messageRow => (
          <Messages key={messageRow.id} {...messageRow} />
        ))}
      </div>
      <div className="meta">
        <div className="flex">
            <div className="element">
              <Likes likes={likes} threadId={id}/>
            </div>
            <div className="element">
              <MessagesMeta count={messages.total} threadId={id}/>
            </div>
            <div className="element">
              <Activity lastActivity={lastActivity}/>
            </div>
        </div>
        <div className="flex">
          <Members threadId={id} members={members}/>
        </div>
      </div>
    </div>
  )
}

function Activity ({lastActivity}) {
  const timeAgo = new TimeAgo('en-US')
  return (
    <span className="">{timeAgo.format(lastActivity)}</span>
  )
}

