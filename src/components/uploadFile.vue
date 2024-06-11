<template>
    <div class="container">
        <h2>文件上传</h2>
        <input type="file" @change="onFileChange" />
        <button @click="uploadFile">上传</button>
        <div v-if="showProgress">
            <progress :value="progressPercentage" max="100"></progress>
            <p>上传进度: {{ progressPercentage }}%</p>
        </div>
        <p v-if="uploadStatus">{{ uploadStatus }}</p>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'uplaodFile',
    data() {
        return {
            selectedFile: null,
            progressPercentage: 0,
            showProgress: false,
            uploadStatus: '',
        };
    },
    methods: {
        onFileChange(e) {
            this.selectedFile = e.target.files[0];
            this.uploadStatus = '';
        },
        uploadFile() {
            if (!this.selectedFile) {
                this.uploadStatus = '请先选择一个文件';
                return;
            }

            const formData = new FormData();
            formData.append('file', this.selectedFile);

            this.showProgress = true;

            axios.post('http://10.129.152.215:8080/dataManagement/import?tableName=customer', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'token': 'zxc'
                },
                onUploadProgress: (progressEvent) => {
                    this.progressPercentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                },
            })
                .then(response => {
                    this.uploadStatus = '文件上传成功！';
                    this.showProgress = false;
                    console.log(response)
                    // 你可以在这里处理上传后的数据  
                })
                .catch(error => {
                    console.error('文件上传失败:', error);
                    this.uploadStatus = '文件上传失败，请重试';
                    this.showProgress = false;
                });
        },
    },
}





</script>
<style scoped>
* {
    margin: 0;
    padding: 0;
}

.container {
    overflow: auto;
    color: #e4e4e4;
    /* 相对于body元素的absolute属性 */
    position: absolute;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 550px;

    background-size: cover;
    background-position: center;
    border-radius: 20px;
    /* margin-top: 20px; */
}

/* 标题样式 */
.container h2 {
    text-align: center;
    margin-bottom: 20px;
}

/* 文件输入框样式 */
.container input[type="file"] {
    display: block;
    margin: 0 auto;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
    max-width: 300px;
}

/* 上传按钮样式 */
.container button {
    display: block;
    margin: 10px auto;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

/* 进度条样式 */
.container progress {
    width: 100%;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    height: 20px;
}

/* 进度文本样式 */
.container p {
    text-align: center;
    margin: 5px 0;
}
</style>