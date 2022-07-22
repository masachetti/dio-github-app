import React from 'react'

export default function ProfileInfo({ infoName, infoValue, inline = true }) {
    return (
        <>
            <span style={{ "fontWeight": "bold" }}>{infoName}</span>
            {inline && <span style={{ "fontWeight": "bold" }}>: </span>}
            <span>{infoValue}</span>
        </>
    )
}


