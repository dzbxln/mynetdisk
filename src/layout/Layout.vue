<template>
    <a-layout has-sider>
        <a-layout-sider
          :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
        >
          <a-menu v-model:selectedKeys="selectedKeys" :style="{height:'150px' ,padding: '0 0 50px 0'}" :theme="light" mode="inline">
            <a-menu-item key="1">
              <folder-open-two-tone />
              <span class="nav-text">主页面</span>
            </a-menu-item>
            <a-menu-item key="2">
              <video-camera-two-tone />
              <span class="nav-text">视频</span>
            </a-menu-item>
            <a-menu-item key="3">
              <picture-two-tone />
              <span class="nav-text">图片</span>
            </a-menu-item>
          </a-menu>
          <a-menu theme="dark" mode="inline">
            <a-sub-menu key="sub2">
                <template #icon></template>
                <template #title>
                  <folder-open-two-tone />
                  文件夹
                </template>
                <a-menu-item key="5">Option 5</a-menu-item>
                <a-menu-item key="6">Option 6</a-menu-item>
                <a-sub-menu key="sub3" title="Submenu">
                  <a-menu-item key="7">Option 7</a-menu-item>
                  <a-menu-item key="8">Option 8</a-menu-item>
                </a-sub-menu>
              </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout :style="{ marginLeft: '200px' }">
          <a-layout-header :style="{ background: '#fff', padding: 0 }">
            <a-menu mode="horizontal" v-model:selectedKeys="model">
                <a-menu-item key="1">
                    <template #icon>
                        <up-circle-outlined />
                    </template>
                    上传文件
                </a-menu-item>
                <a-menu-item key="2" @click="newCreate">
                  <template #icon>
                    <folder-open-outlined />
                  </template>
                  新建文件夹
              </a-menu-item>
            </a-menu>
          </a-layout-header>
          <a-layout-content :style="{ margin: '5px 16px 0', overflow: 'initial' }">
            <div>
                <a-breadcrumb>
                    <a-breadcrumb-item>文件夹</a-breadcrumb-item>
                    <a-breadcrumb-item><a href="">下一个</a></a-breadcrumb-item>
                    <a-breadcrumb-item><a href="">下一个</a></a-breadcrumb-item>
                    <a-breadcrumb-item>下一个</a-breadcrumb-item>
                </a-breadcrumb>
            </div>
            <div :style="{ padding: '20px', background: '#fff',height:'560px' , textAlign: 'center' }">
                <a-list :grid="{ gutter: 16, column: 8 }" :data-source="listData">
                    <template #renderItem="{ item }">
                        <a-list-item>
                            <a-card hoverable style="width: 120px">
                                <template #cover>
                                  <img
                                   :style="{padding: '5px'}"
                                  :width="110"
                                  :higth="110"
                                    :src="item.src" 
                                    fallback="data:image/png;base64,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" />
                                </template>
                                <template #actions>
                                    <a-typography-text strong v-if="item.display" @dblclick="double_click(item)">{{item.text}}</a-typography-text>
                                    <a-input :ref="(el)=>in_ref(el,item.index)" @keyup.enter="Undisplay(item)" @blur="Undisplay(item)" size="small" :bordered="false" v-model:value="item.text" v-if="!item.display"/>
                                </template>
                            </a-card>
                        </a-list-item>
                    </template>
                </a-list>
            </div>
          </a-layout-content>
          <a-layout-footer :style="{ textAlign: 'center' }">
            DengZebin netdisk @2023 by play
          </a-layout-footer>
        </a-layout>
      </a-layout>
</template>
<script setup lang="ts">

      //取消选中并且取消右键操作
        document.body.oncontextmenu =
        function () {
            return false; //取消浏览器默认操作
        };

    import { 
        FolderOpenTwoTone,
        PictureTwoTone,
        VideoCameraTwoTone,
        UpCircleOutlined,
        FolderOpenOutlined,
    } from '@ant-design/icons-vue'
    import { defineComponent,ref,reactive,watch,nextTick } from 'vue'

    // 卡片信息
    interface CardData{
      display:boolean,
      text:string,
      src:string,
      key:string,
      index:int,
    }

    const selectedKeys = ref<string[1]>(["1"])
    // 用来更改卡片文字描述显示
    // const display = ref<boolean>(true) 

    const listData = reactive<CardData[20]>([])
    const model = ref<string[10]>(["0"])
    const refin = ref({})

    for (let i = 0; i < 12; i++) {
        listData.push({
          src:"https://huyi-1312710090.cos.ap-guangzhou.myqcloud.com/image%2F%E6%96%87%E4%BB%B6%E5%A4%B9.jpeg",
          display:true,
          text:"我的资源",
          key:"我的资源",
          index:i
        })
    }

    // ref绑定的函数
    function in_ref(el,key) {
      refin[key] = el
    }

    //双击
    async function double_click(params) {
        params.display = false
        await nextTick(()=>{
          refin[params.index].focus()
        })
    }

    function newCreate(params) {
      const i = listData.length - 1
      listData.push({
          src:"https://huyi-1312710090.cos.ap-guangzhou.myqcloud.com/image%2F%E6%96%87%E4%BB%B6%E5%A4%B9.jpeg",
          display:false,
          text:"",
          key:"",
          index:i
        })
        nextTick(()=>{
          refin[i].focus()
        })
    }

    // 回车
    function Undisplay(params) {
      params.display = true
    }

    // 用于实现取消导航栏选中
    watch(model,(newQuestion, oldQuestion)=>{
        model.value[0] = "0"
    })

</script>
<style>
#components-layout-demo-fixed-sider .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.site-layout .site-layout-background {
  background: #fff;
}

[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>