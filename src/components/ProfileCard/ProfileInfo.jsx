import React from 'react'
import styled from 'styled-components'

export default function ProfileInfo({ infoName, infoValue, inline = true }) {
    return (
        <>
            <span style={{ "fontWeight": "bold" }}>{infoName}</span>
            {inline && <span>: </span>}
            <span>{infoValue}</span>
        </>
    )
}


