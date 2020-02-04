import React from 'react'
import { content } from '../../redux/constant'
import Navigation from '../navigation'
import AppMessage from '../appMessage'

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = (props) => {
    return (
        <header>
            <section>
                <div>
                    <p>{content.task.title}</p>
                </div>
                <Navigation />
            </section>
            <section>
                <AppMessage />
            </section>
        </header>
    )
}

export default Header