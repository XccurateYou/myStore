<template >
  <div class='container'>
      <div class="roomConfig" v-for="n in 12" :key="n">
          <div class="left"><i class='bx bx-home-smile'>{{ n }}</i></div>
          <div class="right">
              <div class="room"><i class='bx bxs-circle'></i>{{ messages[n]}}<p v-if="wsConnected">WebSocket已连接</p> </div>
              <div class="ac"><i class='bx bxs-circle'></i>{{ messages[n]}}</div>
          </div>
          
      </div>
  </div>
</template>
<script>
export default {
  name:'acMonitor',
  data() {  
  return {  
    ws: null,  
    messages: [],  
    messageToSend: 'Hello, WebSocket!'  
  };  
},  
created() {  
  this.connect();  
},  
beforeDestroy() {  
  if (this.ws) {  
    this.ws.close();  
  }  
},  
methods: {  
  connect() {  
    this.ws = new WebSocket('ws://your-websocket-server-url');  

    this.ws.onopen = () => {  
      console.log('WebSocket连接已打开');  
      console.log('WebSocket连接已打开');
    };  

    this.ws.onmessage = (event) => {  
      this.messages.push(event.data);  
    };  

    this.ws.onerror = (error) => {  
      console.error('WebSocket错误:', error);  
    };  

    this.ws.onclose = (event) => {  
      if (event.wasClean) {  
        console.log('WebSocket连接已正常关闭');  
      } else {  
        console.error('WebSocket连接意外关闭');  
      }  
    };  
  },  
  sendMessage() {  
    if (this.ws.readyState === WebSocket.OPEN) {  
      this.ws.send(this.messageToSend);  
    } else {  
      console.error('WebSocket未连接');  
    }  
  }  
}  
}
</script>
<style scoped>
  *{
      color: #e4e4e4;
  }

  .container {
      -ms-overflow-style: none;  /* IE and Edge */
scrollbar-width: none;  /* Firefox */
  overflow: auto;

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

  background-size: cover;
  background-position: center;
  margin-top: 20px;
  background: url('background.jpg') no-repeat;
  }

  .container::-webkit-scrollbar{
      display: none;
  }

  .roomConfig{
      width: 30%;
      height: 40%;

      margin: 20px 0;
      backdrop-filter: blur(14px);
      display: flex;
      backdrop-filter: blur(14px);

  }

  .left{
      width: 50%;
      height: 100%;
      font-size: 48px;
      line-height: 220px;
      text-align: center;
  }

  .right{
      width: 50%;
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      justify-content: space-around;
  }

  .room {
      width: 100%;
      height: 50%;
      line-height: 110px;
      font-size: 36px;
  }

  .ac{
      width: 100%;
      height: 50%;
      line-height: 110px;
      font-size: 36px;
  }

  .bxs-circle{
      color: green;
      margin-right: 10px;
  }
</style>
