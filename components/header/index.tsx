import React from 'react'
import { content } from '../../redux/constant'
import Navigation from '../navigation'
import AppMessage from '../appMessage'
import '../../style/style.scss'

const blockName = 'header'

const Header: React.FC = () => {
    return (
        <header className={blockName}>
            <section className={`${blockName}__main-section`}>
                <div className={`${blockName}__main-section__app-name`}>
                    <p>{content.task.title}</p>
                </div>
                <Navigation blockName={`${blockName}__main-section__navigation`}/>
            </section>
            <section className={`${blockName}__message-section`}>
                <AppMessage />
            </section>
        </header>
    )
}

export default Header