import React from 'react'

interface MainProps {
    children: React.ReactNode
}

const Main: React.FC<MainProps> = (props) => {
    return (
        <main>
           {props.children}
        </main>
    )
}

export default Main