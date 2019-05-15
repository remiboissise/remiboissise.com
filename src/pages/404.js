import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
    <Layout>
        <SEO title="404" />
        <div className='container page-404'>
            <div className='inner-container'>
                <div className='row'>
                    <span className='number'>4</span>
                    <span className='letters'>page</span>
                </div>
                <div className='row second'>
                    <span className='letters'>n</span>
                    <span className='number'>0</span>
                    <span className='letters'>t</span>
                </div>
                <div className='row'>
                    <span className='letters'>found</span>
                    <span className='number'>4</span>
                </div>
            </div>
        </div>
    </Layout>
)

export default NotFoundPage
