<template>  
  <div class="container">  
    <h1>WebSocket Status: {{ connectionStatus }}</h1>  
    <div v-if="messages.length">  
      <h2>Received Messages:</h2>  
      <div v-for="(message, index) in messages" :key="index">  
        {{ message }}  {{ index }}
      </div>  
    </div>  
    <button @click="sendMessage('Hello from Vue!')">Send Message</button>  
  </div>  
</template>  
  
<script>  
export default {  
  name:'acMonitor',
  data() {  
    return {  
      socket: null,  
      messages: [],  
      connectionStatus: 'Disconnected',  
    };  
  },  
  mounted() {  
    this.connect();  
  },  
  beforeDestroy() {  
    if (this.socket) {  
      this.socket.close();  
      this.socket = null;  
    }  
  },  
  methods: {  
    connect() {  
      this.socket = new WebSocket('ws://10.129.152.215:8080/ws'); // 使用ws而不是wss  
  
      this.socket.onopen = () => {  
        this.connectionStatus = 'Connected';  
        console.log('Connected to WebSocket');  
      };  
  
      this.socket.onmessage = (event) => {  
        this.messages.push(event.data);  
        console.log('Received message:', event.data);  
      };  
  
      this.socket.onerror = (error) => {  
        this.connectionStatus = 'Error';  
        console.error('WebSocket Error:', error);  
      };  
  
      this.socket.onclose = (event) => {  
        this.connectionStatus = 'Disconnected';  
        console.log('WebSocket closed:', event);  
  
        // 如果需要，可以在这里尝试重新连接  
      };  
    },  
    sendMessage(message) {  
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {  
        this.socket.send(message);  
      } else {  
        console.error('WebSocket is not open.');  
      }  
    },  
  },  
};  
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
