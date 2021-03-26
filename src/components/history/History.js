import React from 'react';

function History({ requests }) {
  return (
    <div>
      {requests.map (request => {
        return (
          <p>
            <span>METHOD : {request.method}</span><br />
            <span>URL : {request.url}</span>
          </p>
        )
      })}
    </div>
  )
}

export default History;
