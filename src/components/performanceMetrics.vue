<template>
    <div class="container">

        <div class="dbsetting setting">
            <div class="icon">
                <i class='bx bx-history'></i>
            </div>
            <div class="settingdetail">
                <div class="describe">totalRequestCount</div>
                <div class="data">Tpc-h={{ $store.state.totalRequestCount }}</div>
                <div class="data">Tpc-c={{ $store.state.totalRequestCount_c }}</div>
            </div>
        </div>

        <div class="dbsetting setting">
            <div class="icon">
                <i class='bx bx-time-five'></i>
            </div>
            <div class="settingdetail">
                <div class="describe">totalProcessingTime</div>
                <div class="data">Tpc-h={{ $store.state.totalProcessingTime }}</div>
                <div class="data">Tpc-c={{ $store.state.totalProcessingTime_c }}</div>
            </div>
        </div>

        <div class="dbsetting setting">
            <div class="icon">
                <i class='bx bx-list-ol'></i>
            </div>
            <div class="settingdetail">
                <div class="describe">concurrentRequests</div>
                <div class="data">Tpc-h={{ $store.state.concurrentRequests }}</div>
                <div class="data">Tpc-c={{ $store.state.concurrentRequests_c }}</div>
            </div>
        </div>


        <div class="dbsetting setting">
            <div class="icon">
                <i class='bx bx-signal-5'></i>
            </div>
            <div class="settingdetail">
                <div class="describe">averageLatency</div>
                <div class="data">Tpc-h={{ ($store.state.averageLatency).toFixed(2) }}</div>
                <div class="data">Tpc-c={{ ($store.state.averageLatency_c).toFixed(2) }}</div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'performanceMetrics',
}
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
    text-decoration: none;
}

.container {
    /* 相对于body元素的absolute属性 */
    display: flex;
    flex-wrap: wrap;
    position: absolute;
    justify-content: space-around;
    align-items: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 75%;
    height: 550px;
    background-color: skyblue;
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    margin-top: 20px;
    background: url('setting.jpg') no-repeat;
}

.dbsetting.title {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    width: 45%;
    height: 45%;
    background-color: rgb(181, 218, 233);
    background: transparent;
}

.dbsetting.title .icon {
    color: #81a6d8;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 144px;
    width: 100%;
}

.dbsetting.title .icon .bx.bx-cog {
    transition: .5s;
}

.dbsetting.title .icon .bx.bx-cog:hover {
    font-size: 196px;
    cursor: pointer;
}

.dbsetting.setting {
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
    width: 45%;
    height: 45%;
    font-size: 24px;
    color: #B6DBF2;
    background-color: #77C3F2;
    background: transparent;
    backdrop-filter: blur(14px);
}


.dbsetting.setting .icon {
    display: flex;
    height: 90%;
    width: 45%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 72px;
    background-color: #30588C;
    border-radius: 24px;
}

.dbsetting.setting .settingdetail {
    flex-direction: column;
    display: flex;
    width: 45%;
    height: 90%;
    justify-content: space-around;
    align-items: center;
}

.dbsetting.setting .settingdetail .describe {
    line-height: 64px;
    text-align: center;
    border-radius: 24px;
    padding: 16px;
    /* width: 80%; */
    background-color: #30588C;
}

.dbsetting.setting .settingdetail .data {
    line-height: 36px;
    border-radius: 24px;
    text-align: center;
    width: 80%;
    background-color: #30588C;
    margin-top: 10px;
}
</style>