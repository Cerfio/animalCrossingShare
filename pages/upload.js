import Head from 'next/head';
import Header from '@components/Header';
import Footer from '@components/Footer';
import UploadComponent from '@components/UploadImage';
import { Button, TextInput, Box, TextArea } from "grommet";
import { useState } from 'react';


export default function UploadPage() {
    const [value, setValue] = useState({ title: '', description: ''});
    const [listFiles, setListFiles] = useState([null, null, null, null, null]);
    const [langage, setLangage] = useState(1);
    const onChange = (e) => {
        const valueTmp = e.target.value;
        setValue({
          ...value,
          [e.target.name]: valueTmp
        });
    }
    const changeList = (newValue, index) => {
        let copyListFiles = [...listFiles];

        copyListFiles[index] = newValue === undefined ? null : newValue;
        setListFiles(copyListFiles);
    };

    return (
        <div className="upload">
            <Head>
                <title>Upload</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Header></Header>
            <main>
                <div className="upload__body">
                    <div className="upload__body__upload-list">
                    {listFiles.map((file, i) =>
                        <div key={i} className="upload__body__upload-list__card">
                            <UploadComponent update={changeList} index={i}/>
                            <p>{listFiles[i] === null ? '' : listFiles[i].name}</p>
                        </div>
                    )}
                    </div>
                    <div className="upload__body__upload-info">
                        <div className="upload__body__upload-info__button-langage">
                            {langage === 1 ? <Button primary label="Français" onClick={() => {setLangage(1)}}/> : <Button label="Français" onClick={() => {setLangage(1)}}/>}
                            {langage === 2 ? <Button primary label="English" onClick={() => {setLangage(2)}}/> : <Button label="English" onClick={() => {setLangage(2)}}/>}
                        </div>
                        <Box style={{marginLeft: '28%'}} margin="large" width="medium">
                            <TextInput name="title" placeholder="Title" value={value.title} onChange={onChange} />
                        </Box>
                        <Box margin="large" width="large">
                            <TextArea name="description" placeholder="Description" size="xlarge" value={value.description} onChange={onChange} />
                        </Box>
                        <div className="upload__body__upload-info__button-upload">
                            <Button primary label="Upload" onClick={() => {}}/>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <style jsx>{`
                .upload__body {
                    display: flex;
                }
                .upload__body__upload-list {
                    flex-direction: column;
                }
                .upload__body__upload-list__card {
                    display: flex;
                    align-items: center;
                }
                .upload__body__upload-info {
                    flex-direction: column;
                    margin-top: 5%;
                    margin-left: 15%;
                }
                .upload__body__upload-info__button-langage {
                    display: flex;
                    justify-content: space-evenly;
                }
                .upload__body__upload-info__button-upload {
                    display: flex;
                    justify-content: center;
                    margin-top: 13%;
                }
                main {
                    padding: 5% 15%;
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
                .upload__card {
                    float : none !important;
                    width: 104px;
                }

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