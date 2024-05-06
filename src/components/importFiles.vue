
<template>
    <div class='container'>
        <div class="title"><h2>Import</h2></div>
        <div class="tablename"><i class='bx bx-table' ></i> <div>region</div> <div><i class='bx bx-download' @click="importTable('region')"></i></div></div>
        <div class="tablename"><i class='bx bx-table' ></i> <div>supplier</div> <div><i class='bx bx-download' @click="importTable('supplier')"></i></div></div>
        <div class="tablename"><i class='bx bx-table' ></i> <div>nation</div> <div><i class='bx bx-download' @click="importTable('nation')"></i></div></div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
    name:'importFiles',
    methods:{
        importTable(tableName){
            axios({
                method:'POST',
                url:'http://10.129.152.215:8080/dataManagement/export',
                params:{tableName},
                headers: {
                'Content-Type': 'application/json',
                'token': 'zxc'
                },
                responseType:'blob'
            }).then(response => {
            // debugger
            downLoadXls(response)
            function downLoadXls(response){
            const content = response.data;
            const blob = new Blob([content]);
            const fileName =`${tableName}.xlsx`;
            if ("download" in document.createElement("a")) {
              // 非IE下载
              const elink = document.createElement("a");
              elink.download = fileName;
              elink.style.display = "none";
              elink.href = URL.createObjectURL(blob);
              document.body.appendChild(elink);
              elink.click();
              URL.revokeObjectURL(elink.href); // 释放URL 对象
              document.body.removeChild(elink);
            } else {
              // IE10+下载
              navigator.msSaveBlob(blob, fileName);
            }
          } }
                )
        }
        }
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
    margin-top: 20px;
    background: url('importFiles.jpg') no-repeat;
    }

    h2 {
        text-align:center;
        font-size: 36px;
        line-height: 64px;
    }

    .title {
        width:75%;
        height: 64px;
        margin: 0 0 24px;
    }

    .tablename {
        margin: 0 0 12px;
        border-radius: 12px;
        align-items: center;
        justify-content: space-around;
        width: 75%;
        height: 30%;
        font-size: 36px;
        display: flex;
        background: rgb(36,67,132);
        transition:  .75s;
    }

    .tablename:hover{
        background: linear-gradient(20deg, rgb(103,141,190),rgb(0,29,77));
    }

    .tablename div {
        cursor: default;
    }

    .container::-webkit-scrollbar{width:0;height:0;background-color:#fff;display:none;}
    .container::-webkit-scrollbar-thumb{background-color:#fff;display:none;}

    .bx-download {
        font-size: 36px;
        transition: .5s;
    }

    .bx-download:hover {
        font-size: 48px;
        cursor: pointer;
    }
</style>