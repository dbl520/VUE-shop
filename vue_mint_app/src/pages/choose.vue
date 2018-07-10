<template>
  <div class="xuangou">

    <!-- 引入头部公用模板 -->

    <v-header :title="newTitle"></v-header>

    <!-- 引入公共模板结束 -->

    <mt-navbar v-model="selected">

      <mt-tab-item id="tab1">全部</mt-tab-item>

      <mt-tab-item id="tab2">Xplay系列</mt-tab-item>

      <mt-tab-item id="tab3">X系</mt-tab-item>

      <mt-tab-item id="tab4">y系</mt-tab-item>

    </mt-navbar>

    <mt-tab-container v-model="selected">

      <mt-tab-container-item id="tab1" class="tab_phone">

        <!--第一部分-->

        <div class="xli" v-for="(phone,index) in lists" @click="xuangou(phone.id)" v-bind:id="phone.id">

          <div class="xl_img">

            <img v-bind:src="phone.ImageOne">

          </div>

          <p class="xl_p">{{phone.name}}</p>

          <p class="prices">￥ <span class="price">{{phone.Price}}</span></p>

        </div>

      </mt-tab-container-item>

      <mt-tab-container-item id="tab2" class="tab_phone">

        <div class="xli" v-for="(phone,index) in all.tab2"  @click="xuangou(phone.id)" v-bind:id="phone.id">

          <div class="xl_img">

            <img v-bind:src="phone.ImageOne">

          </div>

          <p class="xl_p">{{phone.name}}</p>

        </div>

      </mt-tab-container-item>

      <mt-tab-container-item id="tab3" class="tab_phone">

        <div class="xli" v-for="(phone,index) in all.tab3"  @click="xuangou(phone.id)" v-bind:id="phone.id">

          <div class="xl_img">

            <img v-bind:src="phone.ImageOne">

          </div>

          <p class="xl_p">{{phone.name}}</p>

        </div>


      </mt-tab-container-item>

      <mt-tab-container-item id="tab4" class="tab_phone" >

        <div class="xli"  v-for="(phone,index) in all.tab4"  @click="xuangou(phone.id)" v-bind:id="phone.id">

          <div class="xl_img">

            <img v-bind:src="phone.ImageOne">

          </div>

          <p class="xl_p">{{phone.name}}</p>

        </div>
      </mt-tab-container-item>

    </mt-tab-container>

  </div>
</template>
<script>
    // 引入共用头部组件

    import header from "../components/headerOne.vue";

    export default {
        // 初始化

        components: {
            "v-header": header
        },

        data() {
            return {
                selected: "tab1",
                newTitle:'选购',
                url: "https://www.easy-mock.com/mock/59e95287dd7e1a0a448c1102/example/choose",

                lists: [],
                all: [],
            };
        },

        mounted: function() {
            // 一进来就执行 ,类型小程序onload

            this.getData();
        },

        methods: {
            getData: function() {
                var _this = this;

                _this.$http.get(_this.url).then(
                    response => {
                        console.log(response, '666');

                        // get body data
                        _this.all = response.data;
                        _this.lists = response.data.tab1;
                    },

                    response => {
                        // error callback
                    }
                );
            },

            xuangou: function(id) {
                var _this = this;

                _this.$router.push({
                    path: "details",
                    query: {
                        id: id
                    }
                });
            }
        }
    };
</script>
<style scoped>
.mint-navbar{
  margin-top:1rem
}
    .tab_phone {
        display: flex;
        align-items: center;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 0.2rem;
    }
    
    .xl_img {
        height: 3rem;
    }
    
    .xl_img img {
        width: 100%;
        height: 100%;
    }
    
    .xli {
        width: 3.4rem;
        margin-top: 0.2rem;
        background: #fff;
    }
    
    .xl_p {
        color: #353535;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    
    .mint-tab-container-item {
        width: 95%;
    }
    
    .prices {
        color: #fe498f;
        font-size: 0.1rem;
        text-align: center;
    }
    
    .price {
        font-size: 0.4rem;
    }
</style>