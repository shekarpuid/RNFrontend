import React, { useState } from 'react'

const CounterHOC = OriginalComponent => {
    const NewEnhancedComponent = () => {
        const [count, setCount] = useState(0)
        const increment = () => {
            setCount(count + 1)
        }

        return (
            <OriginalComponent count={count} increment={increment} />
        )
    }
    return NewEnhancedComponent
}

export default CounterHOC