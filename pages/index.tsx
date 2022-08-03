import type { NextPage } from 'next'
import Head from 'next/head'
import AboutPartial from '../components/about'
import ActivityFeed from '../components/activityFeed'
import Hero from '../components/hero'
import ValuesPartial from '../components/values'


const Home: NextPage = () => {
    return (
        <>
        <Head>
            <title>John Weland for Jackson</title>
                <meta property="og:title" content="John Weland for Jackson" key="title" />
                <meta name="description" content="John Weland for Jackson City Council" key="description" />
                <meta name="keywords" content="John Weland, Jackson City Council" />
                <meta name="author" content="John Weland" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
            <Hero />
            <AboutPartial />

            <ValuesPartial />

            <ActivityFeed />
        </>
    )
}

export default Home
