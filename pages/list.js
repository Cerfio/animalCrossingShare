import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Card from '@components/Card'
import SearchBar from '@components/SearchBar'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie'

export default function Home() {
	const [images, setImages] = useState([]);
	useEffect(() => {
        async function fetchMyAPI() {
            try {
                const responseUpload = await axios.get(process.env.NEXT_PUBLIC_BACK_HOST + '/post/get/limit', {
                    params: {
                        many: 20,
                        offset: 0
                    },
                    headers: {
                        Authorization: 'Bearer ' + Cookies.get(process.env.NEXT_PUBLIC_COOKIE_NAME),
                    }
                });
                const decodedImages = responseUpload;
                decodedImages.data.forEach((element, index) => {
					if (element.buffer[0] != 'error')
						decodedImages.data[index].image = 'data:image/jpeg;base64,' + Buffer.from(element.buffer[0].data).toString('base64');
				});
				setImages(decodedImages.data);
            }catch(e) {
            }
        }
        fetchMyAPI()
      }, [])
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
					{images.map((post, index) =>
						<div key={index} className="list__body__item">
							<Card image={post.image} title={post.name_post} author={post.user.pseudo}/>
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
