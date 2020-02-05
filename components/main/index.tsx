import React from 'react'

interface MainProps {
    children: React.ReactNode
}

const blockName = 'main'

const Main: React.FC<MainProps> = (props) => {
    return (
        <main className={blockName}>
           {props.children}
        </main>
    )
}

export default Main