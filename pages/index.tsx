import React from 'react'
import { NextPage } from 'next'
import { connect, Dispatch } from 'react-redux'
import Layout from '../layout'
import { getInfoJSON } from '../redux/action'
import { Action } from '../redux/store/root-reducer'
import { infoJSONurl } from '../redux/constant'


interface HomeProps {
    luckyNumber: number
    dispatch: Dispatch<Action>
}

const Home: NextPage<HomeProps> = (props) => {
    const { luckyNumber } = props
    console.log(props)

    const putJSON = () => {
        fetch(infoJSONurl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'text/plain',
            },
            body: JSON.stringify({ some: 'ai nane nane' }),
        })
    }

    return (
        <Layout>
            <p>{luckyNumber}</p>
            <button
                onClick={() => props.dispatch(getInfoJSON())}
            >
                {`GET`}
            </button>

            <button
                onClick={() => putJSON()}
            >
                {`PUT`}
            </button>
        </Layout>
    )
}

export default connect(state => state)(Home)
