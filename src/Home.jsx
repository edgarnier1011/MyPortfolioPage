import { useState } from 'react'
import Gallery from './SermonAudio.jsx'

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <section id="center">
                {/* <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div> */}
                <div>
                    {/* <Header /> */}
                    <h1>Welcome to my Page</h1>
                    <p>Thank you for visting my portfolio page. Feel free to explore and learn more about my work by using the navigation links above.</p>
                    <p>
                        Edit <code>src/App.jsx</code> and save to test 1<code>HMR</code>
                    </p>
                </div>
                <button
                    type="button"
                    className="counter"
                    onClick={() => setCount((count) => count + 1)}
                >
                    Count is {count}
                </button>
                {/* <MultipleArticles
          articles={[
            { title: 'Article 1', text: 'This is the first article.' },
            { title: 'Article 2', text: 'This is the second article.' },
            { title: 'Article 3', text: 'This is the third article.' },
          ]}
        />
        <Footer /> */}
            </section>

            {/* <Gallery /> */}

            <div className="ticks"></div>
        </>
    )
}

export default Home