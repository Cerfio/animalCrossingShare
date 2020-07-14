import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Button, DataChart } from "grommet";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

const data = [];

for (let i = 0; i < 7; i += 1) {
    const v = Math.sin(i / 2.0);
    data.push({
        date: `2020-07-${((i % 30) + 1).toString().padStart(2, 0)}`,
		percent: Math.abs(v * 100)
	});
}

export default function Dashboard() {
    const [images, setImages] = useState([]);
    useEffect(() => {
        async function fetchMyAPI() {
            try {
                const responseUpload = await axios.get(process.env.NEXT_PUBLIC_BACK_HOST + '/post/get/limit', {
                    params: {
                        many: 5,
                        offset: 0
                    },
                    headers: {
                        Authorization: 'Bearer ' + Cookies.get(process.env.NEXT_PUBLIC_COOKIE_NAME),
                    }
                });
                const decodedImages = [];
                responseUpload.data.forEach((element) => {
                    decodedImages.push(Buffer.from(element.data).toString('base64'));
                });
                setImages(decodedImages);
            }catch(e) {
            }
        }
        fetchMyAPI()
      }, [])
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
                    {images.map((image, i) =>
                        <img key={i} className="dashboard__posts__image" src={`data:image/jpeg;base64,${image}`} />
					)}
				</div>
                <Button primary label="See all" onClick={() => {}}/>
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