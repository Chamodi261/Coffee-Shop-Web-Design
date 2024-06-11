import React from 'react'

function Menuitems(props) {
  return (
    <div>
        <a href={props.url} className="link">{props.linkName}</a>
    </div>
  )
}

export default Menuitems