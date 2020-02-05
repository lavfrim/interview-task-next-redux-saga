import React from 'react'
import Link from 'next/link'
import { content } from '../../redux/constant'

interface NavigationProps {
    blockName: string
}

const Navigation: React.FC<NavigationProps> = (props) => {
    return (
        <nav className={props.blockName}>
            <ul className={'navigation__list'}>
                <li className={'navigation__item'}>
                    <Link href="/"><a>{content.nav.forUser.toUpperCase()}</a></Link>
                </li>
                <li  className={'navigation__item'}>
                    <Link href="/editor"><a>{content.nav.forEditor.toUpperCase()}</a></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation