<template>
    <div class="container">
        <form >
        <input type="file" name="file" id="files" />
        <button type="submit" @click.prevent="upload">上传文件</button>
        </form>
        <div class="tosee"></div>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name:'uplaodFile',
    methods:{
        upload(){
            let  forms = new FormData();
            let filesInput = document.getElementById('files');
            let file = filesInput.files[0]
            forms.append('file',file)
            console.log(forms)
            const options = {
            method:'POST',
            headers:{
                'content-type':'multipart/form-data',
                'token':'zxc'
            },
            data:forms,
            url:"http://10.129.152.215:8080/dataManagement/import?tableName=customer"
            }
            axios(options)
        }
    }
}





</script>
<style  scoped>

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
    align-items:center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 550px;
    background-color:skyblue; 
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    /* margin-top: 20px; */
    background-color:rgb(36,67,132)
    }

    form {
        margin-top: 10px;
        align-self: self-start;
    }

    input {
        background-color: rgb(211,227,253);
        margin-right: 10px;
        color: black;
    }

    .tosee{
        width: 100%;
        height: 500px;
        background-color: rgb(211,227,253);
        margin: 0 6px 6px;
        border-radius: 20px;
    }

    input#file-upload-button {
        margin-right: 10px;
    }
</style>