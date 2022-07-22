import React from 'react'

export default function ProfileInfo({ infoName, inline = true, children}) {
    return (
        <>
            <span style={{ "fontWeight": "bold" }}>{infoName}</span>
            {inline && <span style={{ "fontWeight": "bold" }}>: </span>}
            {children}
        </>
    )
}


