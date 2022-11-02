<template>
  <view class="content">

  </view>
</template>

<script setup>
  import { HttpTest } from "../../services/utils"
  import { onLoad } from '@dcloudio/uni-app'

  onLoad(async () => {
    await HttpTest()
  })
</script>

<style>

</style>
