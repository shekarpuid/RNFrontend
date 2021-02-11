import React, { useState, useEffect } from 'react'

export const UseFetch = api => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        console.log('api', api)
        setLoading(true)
        fetch(api)
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => setError(error))
            .finally(() => setLoading(false))
    }, [])

    return { loading, data, error }
}