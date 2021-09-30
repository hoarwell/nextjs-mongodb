import Head from 'next/head'

const Home = ({ movies }) => {
    return (
        <div className="container">
            <Head>
              <title>Create Next App</title>
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
              <p>movies</p>
            </main>
        </div>
    )
}

export default Home;
