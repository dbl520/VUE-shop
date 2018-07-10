    <template>
        <div class="mifenka">
        <!-- 引入头部公用模板 -->
        <v-header :title='newTitle'></v-header>
    <!-- 引入公共模板结束 -->
            <div class="cons">
                这是米粉卡页面
            </div>
        </div>
    </template>
  <script>
// 引入共用头部组件
import header from "../components/headerOne.vue";
export default {
  components: {
    "v-header": header
  },
  data() {
    return {
      newTitle:"米粉卡"
    };
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
  <style scoped>

</style>


