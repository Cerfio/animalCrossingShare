import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'


export default function Home() {
    return (
        <div className="list">
            <Head>
                <title>ListPost</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Header></Header>
            <main>          
            </main>
            <Footer />
            <style jsx>{`
                .list__body {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
			        padding-left: 20%;
                }
		        .list__body__item {
			        flex: 1 1 20%;
		        }
		        .list__header__searchbar {
			        flex: 10;
  			        display: flex;
  			        justify-content: center;
			        align-items: center;
		        }
                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }
                code {
                    background: #fafafa;
                    border-radius: 5px;
                    padding: 0.75rem;
                    font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
                }
            `}</style>
            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                    sans-serif;
                }
                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    )
}