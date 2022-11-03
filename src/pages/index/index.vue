<template>
  <view>

  </view>
</template>

<script setup>
  import { HttpTest } from "../../services/utils"
  import { onLoad } from '@dcloudio/uni-app'

  onLoad(async () => {
    const { data } = await HttpTest()
    console.log(data)
  })
</script>

<style>

</style>
