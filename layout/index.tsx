import React from 'react'
import Head from 'next/head'
import { content } from '../redux/constant'
import Header from '../components/header'
import Main from '../components/main'
import '../style/reset-browser.scss'
import '../style/style.scss'


interface LayoutProps {
    children?: React.ReactNode
}

const Layout: React.FC<LayoutProps> = (props) => {
    const { children } = props
    return (
        <>
            <Head>
                <title>
                    {content.task.title}
                </title>
            </Head>
            <Header />
            <Main>
                {children}
            </Main>
        </>
    )
}

export default Layout

