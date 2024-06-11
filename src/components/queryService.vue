<template>
  <div class='container'>
    <div class="header">
      <div class="headeritem datalist-container">
        <label for="nationSelect">国家</label>
        <select v-model="$store.state.nation_select" style="width: 136px;">
          <option v-for="(option, index) in this.$store.state.nation_list" :key=index>
            {{ option }}
          </option>
        </select>
      </div>




      <div class="headeritem">
        <label for="nationSelect">客户</label>
        <input type="text" @focus="showVirtualList" @blur="hideVirtualList" v-model="$store.state.customer_select">
        <div class="virtual-list-container">
          <recycle-scroller class="virtual-list" v-if="isVirtualListVisible" :items="$store.state.customer_list_filter"
            :item-size="20" :key-field="'id'" :prerender="1000" @item-mousedown="chooseCustomer">
            <template #default="{ item }">
              <div class="list-item" @mousedown="chooseCustomer(item.data)" @mouseup="allowHide" :key="item.id">
                <!-- 这里是你的列表项内容 -->
                {{ item.data }}
              </div>
            </template>
          </recycle-scroller>
        </div>
      </div>

      <div class="headeritem" @click="sendQueryRegion"><button>查询Region</button></div>
      <div class="headeritem" @click="sendQueryCustomer"><button>查询Customer</button></div>
      <div class="headeritem" @click="tableToExcel"><button>下载查询结果</button></div>

    </div>
    <div class="display" v-if="isDisplay">

      <div class="displayHeader" v-if="isChange">
        <div>regionKey</div>
        <div>name</div>
        <div>comment</div>
      </div>
      <recycle-scroller class="virtual-list-display" v-if="isChange" :items="$store.state.display_list" :item-size="20"
        :key-field="'regionKey'" :prerender="1000">

        <template #default="{ item }">

          <div class="list-item">
            <!-- 这里是你的列表项内容 -->
            <div>{{ item.regionKey }}</div>
            <div>{{ item.name }}</div>
            <div>{{ item.comment }}</div>
          </div>
        </template>
      </recycle-scroller>




      <div class="displayHeader" v-if="!isChange">
        <div>cusKey</div>
        <div>name</div>
        <div>address</div>
        <div>nationKey</div>
        <div>phone</div>
        <div>acctBal</div>
        <div>mktSegment</div>
        <div>comment</div>
      </div>
      <recycle-scroller class="virtual-list-display" v-if="!isChange" :items="$store.state.display_list" :item-size="20"
        :key-field="'id'" :prerender="5000" :buffer="2000">
        <template #default="{ item }">
          <div class="list-item" :key="item.id">
            <div>{{ item.cusKey }}</div>
            <div>{{ item.name }}</div>
            <div>{{ item.address }}</div>
            <div>{{ item.nationKey }}</div>
            <div>{{ item.phone }}</div>
            <div>{{ item.acctBal }}</div>
            <div>{{ item.mktSegment }}</div>
            <div class="comment">{{ item.comment }}</div>
          </div>
        </template>
      </recycle-scroller>

    </div>
  </div>
</template>

<script>
import axios from 'axios';

import { RecycleScroller } from 'vue-virtual-scroller'
export default {
  name: 'queryService',
  components: {
    RecycleScroller
  },
  data() {
    return {
      isVirtualListVisible: false, // 控制虚拟列表是否可见 
      mouseIsDown: false,
      isChange: true,
      isDisplay: false
    };
  },

  computed: {
    querySearch() {
      return this.$store.state.customer_select
    }
  },
  watch: {
    querySearch() {
      console.log(1)
      this.throttledfilterCustomerList()
    }
  },

  created() {
    this.throttledfilterCustomerList = this.throttle(this.filterCustomerList, 100);
  },


  methods: {
    throttle(func, delay) {
      let lastCall = 0;
      return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
          return;
        }
        lastCall = now;
        return func.apply(this, args);
      };
    },

    filterCustomerList() {
      this.$store.state.customer_list_filter = this.$store.state.customer_list.filter(item => item.data.includes(this.$store.state.customer_select))
    },

    chooseCustomer(item) {
      this.$store.state.customer_select = item
    },
    preventHide() {
      // 阻止隐藏列表  
      this.mouseIsDown = false;
    },
    allowHide() {
      this.mouseIsDown = true;
      this.isVirtualListVisible = false;
    },
    showVirtualList() {
      this.isVirtualListVisible = true;
    },
    hideVirtualList() {
      if (this.mouseIsDown) {
        this.isVirtualListVisible = false;
      }
    },
    sendQueryRegion() {
      this.isDisplay = true;
      this.isChange = true;
      axios({
        method: 'POST',
        url: 'http://10.129.152.215:8080/businessQuery/selectRegionAll',
        headers: {
          'Content-Type': 'application/json',
          'token': 'zxc'
        },
        params: {
          nationName: this.$store.state.nation_select,
          customerName: this.$store.state.customer_select
        }
      }).then(response => {
        this.$store.state.display_list = []
        this.$store.state.display_list = [...response.data.data.data]
      })
    },
    sendQueryCustomer() {
      this.isDisplay = true;
      this.isChange = false;
      axios({
        method: 'POST',
        url: 'http://10.129.152.215:8080/businessQuery/selectCusAll',
        headers: {
          'Content-Type': 'application/json',
          'token': 'zxc'
        },
        params: {
          nationName: this.$store.state.nation_select,
          customerName: this.$store.state.customer_select
        }
      }).then(response => {
        let idCount = 0
        this.$store.state.display_list = []
        response.data.data.data.forEach(element => {
          element.id = idCount
          idCount++
          this.$store.state.display_list.push(element)
          console.log(element)
        });

      })
    },
    tableToExcel() {
      if (this.isChange && this.$store.state.display_list.length) {
        let str = `regionKey,name,comment\n`;
        for (let i = 0; i < this.$store.state.display_list.length; i++) {
          for (const key in this.$store.state.display_list[i]) {
            str += `${this.$store.state.display_list[i][key] + '\t'},`;
          }
          str += '\n';
        }
        // encodeURIComponent解决中文乱码
        const uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
        // 通过创建a标签实现
        const link = document.createElement("a");
        link.href = uri;
        // 对下载的文件命名
        link.download = "region.csv";
        link.click();
      } else if (!this.isChange && this.$store.state.display_list.length) {
        let str = 'cusKey,name,address,nationKey,phone,acctBal,mktSegment,comment,id\n';
        for (let i = 0; i < this.$store.state.display_list.length; i++) {
          let row = '';
          for (const key in this.$store.state.display_list[i]) {
            // 假设我们要处理的值是字符串，并且可能包含特殊字符  
            let value = this.$store.state.display_list[i][key].toString();
            // 使用引号包裹值，并替换内部的引号  
            value = `"${value.replace(/"/g, '""')}"`;
            row += value + ',';
          }
          // 移除最后一个逗号  
          row = row.slice(0, -1);
          // 添加行到 CSV 字符串  
          str += row + '\n';
        }

        // 创建一个 Blob 对象，然后创建一个指向该 Blob 的 URL  
        const blob = new Blob([str], { type: 'text/csv;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        // 创建一个 a 标签并设置其属性  
        const link = document.createElement("a");
        link.href = url;
        // 对文件名进行编码以防止乱码  
        link.download = encodeURI('customer.csv'); // 这里通常不需要 encodeURI，但保持一致性  
        link.click();

        // 释放 URL 对象  
        URL.revokeObjectURL(url);
      }
    }
  },
}
</script>


<style scoped>
div {
  text-align: center;
}

.virtual-list-container {
  height: 200px;
  /* 设置虚拟列表容器的高度 */
  width: 220px;
  overflow: auto;
  position: fixed;
  z-index: 1000;
  /* 允许滚动 */

}

.virtual-list-container::-webkit-scrollbar {
  display: none;
}

.virtual-list {
  /* 这里不需要设置高度，因为vue-virtual-scroller会处理 */
  height: 220px;

}

.virtual-list::-webkit-scrollbar {
  display: none;
}

.virtual-list-display::-webkit-scrollbar {
  display: none;
}

.virtual-list-display {
  height: 420px;
  width: 100%;
}

.virtual-list-display div:nth-child(2n) {
  background-color: #406da0;
}

.virtual-list-display div:nth-child(2n+1) {
  background-color: #b4c8ce;
}


.list-item {
  height: 20px;
  width: 100%;
  /* 列表项的高度应该和item-size一致 */
  line-height: 20px;
  border: 1px solid #eee;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-around;
}

.list-item div {
  flex: 1;
  text-align: 1;
  max-width: 200px;
  margin: 0 5px;
  overflow: hidden;
}

.list-item:hover {
  background-color: blue;
  color: white;
}

.container {
  /* 相对于body元素的absolute属性 */
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: 700px;
  background-color: skyblue;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin-top: 20px;
  background: url('setting.jpg') no-repeat;
}

.header {

  width: 75%;
  margin-top: 10px;
  display: flex;
  justify-content: space-around
}

label {
  margin-right: 10px;
  color: #e4e4e4
}

;

input {
  outline: none;
  border: none;
}

button {
  width: 100px;
  color: gray
}

.headeritem {
  height: 100px;
}

.display {
  width: 100%;
  height: 420px;
  background-color: white;
  margin-bottom: 5px;
}


.displayHeader {
  display: flex;
  justify-content: space-around;
  height: 20px;
  line-height: 20px;
  width: 100%;
  color: #e4e4e4;
  margin-bottom: 2px;
  background-color: #0a569c;
}

.displayHeader div {
  flex: 1;
  text-align: center;
}
</style>