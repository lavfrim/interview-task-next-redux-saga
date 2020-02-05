import React from 'react'
import { NextComponentType } from 'next'
import { connect } from 'react-redux'
import Layout from '../layout'
import { getInfoJSON, setEditorMode } from '../redux/action'
import { InfoJSON } from '../redux/constant'
import SearchWidget from '../components/searchWdiget'
import { NextJSAppContext  } from 'next-redux-wrapper'
import Spinner from '../components/spinner'

interface HomeProps {
    infoJSON: InfoJSON
    editorMode: boolean
    loading: boolean
}


const Home: NextComponentType<NextJSAppContext, {}, HomeProps> = (props) => {
    const { editorMode, infoJSON, loading } = props

    return (
        <Layout>
            {loading ? 
            <Spinner /> : 
            <SearchWidget
                infoJSON={infoJSON}
                editorMode={editorMode}
            />}
        </Layout>
    )
}


Home.getInitialProps = async ({ ctx }) => {
    ctx.store.dispatch(getInfoJSON())
    ctx.store.dispatch(setEditorMode(false))
}

export default connect(state => state)(Home)
