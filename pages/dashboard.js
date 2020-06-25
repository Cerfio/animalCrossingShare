import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Box, DataChart, Image } from "grommet";

const data = [];
for (let i = 0; i < 7; i += 1) {
    const v = Math.sin(i / 2.0);
    data.push({
        date: `2020-07-${((i % 30) + 1).toString().padStart(2, 0)}`,
		percent: Math.abs(v * 100)
	});
}

const posts = Array(5).fill({
	image : "https://cdn.vox-cdn.com/thumbor/LSeN04nyK2x1kTPJuAe3z8oPfcU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19585844/Switch_ACNH_ND0904_SCRN_11_bmp_jpgcopy.jpg",
	title : "reyesSweat",
	author: "cerfio"
});

export default function Dashboard() {
    return (
        <div className="dashboard">
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Header></Header>
            <main>
				<h1>Audience</h1>
				<DataChart data={data} chart={{ key: "percent" }} />
				<h1>Vos posts</h1>
				<div className="dashboard__posts">
					{posts.map((post, i) =>
						<img key={i} className="dashboard__posts__image" src={post.image}/>
					)}
				</div>
				<p>See all</p>
            </main>
            <Footer />
            <style jsx>{`
				.dashboard {
				}
				.dashboard__posts {
            		display: flex;
            		flex-wrap: wrap;
            		justify-content: space-around;
				}
				.dashboard__posts__image {
					width: 150px;
					heigth: auto;
					padding: 2%;
				}
                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
					align-items: center;
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