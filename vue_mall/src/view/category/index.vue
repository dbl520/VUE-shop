<template>
    <div class="category">
        <div class="category-tab">
            <ul>
                <li :class="{'active':item.cateId === activeCategory}" :key="key" v-for="(item,key) in category"
                    @click="selectCategory(item)">
                    <a herf="javascript:;">{{item.cateName}}</a>
                </li>
            </ul>
        </div>
        <div class="category-content">
            <div class="content-wrap">
                <template v-if="activeCategory === 1">
                    <div class="content-promotion">
                        <img src="https://m.360buyimg.com/mobilecms/s528x180_jfs/t3208/247/6270757246/214756/73dcfa1c/58a27dfdN602a0a22.png">
                    </div>
                    <m-categorybox title="专场推荐">
                        <div class="flex">
                            <div class="flex-item-3" :key="key" v-for="(item,key) in 1">
                                <m-goodbox :options="sugestList"></m-goodbox>
                            </div>
                        </div>
                    </m-categorybox>
                    <m-categorybox title="热门分类">
                        <div class="flex">
                            <div class="flex-item-3" :key="key" v-for="(item,key) in 13">
                                <m-goodbox :options="hotSell"></m-goodbox>
                            </div>
                        </div>
                    </m-categorybox>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      category: [
        {
          cateId: 1,
          cateName: "热门推荐"
        },
        {
          cateId: 2,
          cateName: "京东超市"
        },
        {
          cateId: 3,
          cateName: "国际名牌"
        },
        {
          cateId: 4,
          cateName: "奢侈品"
        },
        {
          cateId: 5,
          cateName: "全球购"
        },
        {
          cateId: 6,
          cateName: "女装"
        }
      ],
      activeCategory: 1,
      hotSell: {
        type: "min",
        imgUrl:
          "https://m.360buyimg.com/n12/jfs/t10345/153/8126020/35934/75859fcd/59c3592bN7f7093dd.jpg!q70.jpg",
        belong: "电脑配件"
      },
      sugestList: {
        type: "min",
        imgUrl:
          "https://m.360buyimg.com/mobile/s130x130_jfs/t7225/102/4556996842/23458/346d9b59/59fab9d5N08ea03c3.png",
        belong: "五折嗨购"
      }
    };
  },
  methods: {
    selectCategory(val) {
      this.activeCategory = val.cateId;
    }
  }
};
</script>

<style lang="less" scoped>
.category {
  position: relative;
  height: 100%;
  .category-tab {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    background: #fff;
    border-right: 1px solid #eee;
    ul {
      width: 75px;
      list-style-type: none;
      .active {
        position: relative;
        color: #de181b;
        background: #fbf9fe;
        &::after {
          position: absolute;
          display: block;
          top: 0px;
          right: -1px;
          width: 2px;
          height: 46px;
          content: "";
          background: #fbf9fe;
        }
      }
      li {
        display: block;
        height: 46px;
        border-bottom: 1px solid #eee;
        a {
          display: block;
          height: 46px;
          width: 100%;
          font-size: 12px;
          line-height: 46px;
          text-align: center;
        }
      }
    }
  }
  .category-content {
    position: absolute;
    top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px;
    margin: 0px 10px 0px 85px;
    overflow-y: auto;
    .content-wrap {
      .content-promotion {
        margin-top: 10px;
        height: 95px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>
