


import React from 'react'
import Alert from 'react-bootstrap/Alert'

const AlertMessage = ({ message, show }) => {
    // console.log(message, show)
    return (
        <Alert
            show={show}
            variant={message?.success?.colorAlert === 'success' ? message?.success?.colorAlert : message?.error?.colorAlert}
        >
            <span style={{fontSize:"1rem"}}>
                {message?.success?.msg}
                {message?.error?.msg}
            </span>
        </Alert>
    )
}

export default AlertMessage
