import React from 'react'
import Link from 'next/link'
import { content } from '../../redux/constant'

interface NavigationProps {

}

const Navigation: React.FC<NavigationProps> = (props) => {
    return (
        <nav>
            <ul>
                <li><Link href="/"><a>{content.nav.forUser}</a></Link></li>
                <li><Link href="/editor"><a>{content.nav.forEditor}</a></Link></li>
            </ul>
        </nav>
    )
}

export default Navigation