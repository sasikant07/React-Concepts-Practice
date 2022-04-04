import React, { useState } from 'react'
import useDocumentTitle from '../hooks/DocumentTitle'

function DocTitleOne() {
    const [count, setCount] = useState(0)
    useDocumentTitle(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}</button>
        </div>
    )
}

export default DocTitleOne