import React, { useEffect } from 'react'

export default function AddTitle({ children, title }) {
    useEffect(() => {
        document.title = title
    }, [])

    return children
}
