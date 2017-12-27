<template>
  <div class="msheetgroup">
      <div class="msheetgroup-title">
          <!--待开发-->
      </div>
      <div class="msheetgroup-container">
          <slot></slot>
      </div>
  </div>
</template>

<script>
  export default{
      name:'MSheetgroup',
      props:{
          title:{
              type:Object
          }
      }
  }
</script>

<style lang="less" scoped>
.msheetgroup{
    .msheetgroup-title{
        padding:5px 0px;
    }
}
</style>