import React from 'react'
import { NextComponentType } from 'next'
import { NextJSAppContext  } from 'next-redux-wrapper'
import { connect, Dispatch } from 'react-redux'
import Layout from '../layout'
import { getInfoJSON, setEditorMode, putContentJSON, setInfoJSON } from '../redux/action'
import { Action } from '../redux/store/root-reducer'
import { InfoJSON, content } from '../redux/constant'
import SearchWidget from '../components/searchWdiget'
import Spinner from '../components/spinner'


interface EditorProps {
    infoJSON: InfoJSON
    dispatch: Dispatch<Action>
    editorMode: boolean
    loading: boolean
}

const blockName='editor-page'

const Editor: NextComponentType<NextJSAppContext, {}, EditorProps> = (props) => {
    const { infoJSON, dispatch, editorMode, loading } = props
    const [contentJSON, setContentJSON] = React.useState<InfoJSON | null>(null)

    return (
        <Layout>
            <p className={`${blockName}__message`}>{content.editorModeMessage}</p>

            {loading ? 
            <Spinner /> : 
            <SearchWidget
                infoJSON={infoJSON}
                editorMode={editorMode}
                setContentJSON={setContentJSON}
            />}

            <button
                className={`${blockName}__apply-button`}
                onClick={() => {
                    if (contentJSON !== null) {
                        dispatch(putContentJSON(contentJSON))
                        dispatch(setInfoJSON(contentJSON))
                    }
                }}
            >
                {content.applyChangeButton}
            </button>
        </Layout>
    )
}

Editor.getInitialProps = async ({ ctx }) => {
    ctx.store.dispatch(getInfoJSON())
    ctx.store.dispatch(setEditorMode(true))
}

export default connect(state => state)(Editor)
