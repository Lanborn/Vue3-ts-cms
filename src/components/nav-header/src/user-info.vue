<template>
  <div class="user-info">
    <div class="other-operate">
      <i @click="showDialogClic('qq')" class="icon-qq-line"></i>
      <i @click="showDialogClic('weichat')" class="icon-weichat"></i>
      <i @click="gotoGithub" class="icon-huaban881"></i>
      <i @click="showDialogClic('gonggao')" class="icon-gonggao1"></i>
      <i @click="showDialogClic('runtime')" class="icon-tingchewei"></i>
    </div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          size="medium"
          src="http://blog.lanboc.cn/logo.png"
        ></el-avatar>
        <span style="margin-left: 20px">{{ name }}</span>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item icon="el-icon-circle-close" @click="handleExitClick"
            >退出登录</el-dropdown-item
          >
          <el-dropdown-item @click="gotoGithub">个人主页</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <nav-tips ref="navTipsRef" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store'
import { useRouter } from 'vue-router'

import NavTips from './cpn/NavTips.vue'

import localCache from '@/utils/cache'

export default defineComponent({
  components: {
    NavTips
  },
  setup() {
    const store = useStore()
    const name = computed(() => store.state.login.userInfo.username)

    const router = useRouter()
    const handleExitClick = () => {
      localCache.deleteCache('token')
      router.replace('/login')
    }

    const gotoGithub = () => {
      window.location.href = 'https://github.com/Lanborn/CmsAdminFrontend'
    }

    const navTipsRef = ref<InstanceType<typeof NavTips>>()
    const showDialogClic = (flag: string) => {
      console.log(navTipsRef)

      navTipsRef.value!.isShow = true
      if (flag === 'qq') {
        navTipsRef.value!.showFlag = 1
      } else if (flag === 'weichat') {
        navTipsRef.value!.showFlag = 2
      } else if (flag === 'gonggao') {
        navTipsRef.value!.showFlag = 3
      } else if (flag === 'runtime') {
        navTipsRef.value!.showFlag = 4
      }
    }

    return {
      name,
      navTipsRef,
      gotoGithub,
      handleExitClick,
      showDialogClic
    }
  }
})
</script>

<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
.user-info {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'iconfont';
  .other-operate {
    font-size: 25px;
    margin-right: 10px;
    i {
      margin: 0 12px;
      user-select: none;
      cursor: pointer;
    }
  }
  .user-name {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 15px;
    font-weight: 600;
  }
}
</style>
