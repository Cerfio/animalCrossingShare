import { Upload, message, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useState } from 'react';

function getBase64(file)
{
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });
}
  
function beforeUpload(file)
{
    if (!file)
        return true;
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    return isJpgOrPng && isLt2M;
}

export default function UploadComponent(props) {
    const [previewVisible, setPreviewVisible] = useState(false);
    const [previewTitle, setPreviewTitle] = useState('');
    const [previewImage, setPreviewImage] = useState('');
    const [fileList, setFileList] = useState([]);

    const handleCancel = () => setPreviewVisible(false);
    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewVisible(true);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
        setPreviewImage(file.url || file.preview);
    }
    const handleChange = ({ fileList }) => {
        if (beforeUpload(fileList[0]) == false)
            return;
        setFileList(fileList);
        props.update(fileList[0], props.index);
    };
    const uploadButton = (
        <div>
          <PlusOutlined />
          <div className="ant-upload-text">Upload</div>
        </div>
      );
	return (
    	<div className="upload">
            <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleChange}
                beforeUpload={beforeUpload}
            >
                {fileList.length >= 1 ? null : uploadButton}
            </Upload>
            <Modal
                visible={previewVisible}
                title={previewTitle}
                onCancel={handleCancel}
                footer={null}
            >
                <img alt="example" style={{ width: '100%' }} src={previewImage} />
            </Modal>

    		<style jsx>{`
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
  		</div>
  	)
}