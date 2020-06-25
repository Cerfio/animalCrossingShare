import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Card from '@components/Card'
import SearchBar from '@components/SearchBar'

const posts = Array(20).fill({
	image : "https://cdn.vox-cdn.com/thumbor/LSeN04nyK2x1kTPJuAe3z8oPfcU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19585844/Switch_ACNH_ND0904_SCRN_11_bmp_jpgcopy.jpg",
	title : "reyesSweat",
	author: "cerfio"
});

export default function Home() {
	return (
		<div className="list">
      		<Head>
        		<title>ListPost</title>
        		<link rel="icon" href="/favicon.png"/>
      		</Head>
	  		<Header></Header>
	    	<div className="list__searchbar">
	  	  		<SearchBar/>
			</div>
      		<main>          
        		<div className="list__body">
					{posts.map((post, i) =>
						<div className="list__body__item">
							<Card image={post.image} title={post.title} author={post.author} key={i} />
						</div>
					)}
        		</div>
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
				.list__searchbar {
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
