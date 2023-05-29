<template>
    <a-layout has-sider>
        <a-layout-sider
                :style="{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }"
        >
            <Sider></Sider>
        </a-layout-sider>
        <a-layout :style="{ marginLeft: '200px' }">
            <a-layout-header :style="{ background: '#fff', padding: 0 }">
                <a-menu mode="horizontal" v-model:selectedKeys="model">
                    <a-menu-item key="1">
                        <template #icon>
                            <up-circle-outlined/>
                        </template>
                        上传文件
                    </a-menu-item>
                    <a-menu-item key="2" @click="newCreate">
                        <template #icon>
                            <folder-open-outlined/>
                        </template>
                        新建文件夹
                    </a-menu-item>
                </a-menu>
            </a-layout-header>
            <a-layout-content :style="{ margin: '5px 16px 0', overflow: 'initial' }">
                <div>
                    <a-breadcrumb>
                        <a-breadcrumb-item>文件夹</a-breadcrumb-item>
                        <a-breadcrumb-item>
                            <a href="">下一个</a>
                        </a-breadcrumb-item>
                        <a-breadcrumb-item>
                            <a href="">下一个</a>
                        </a-breadcrumb-item>
                        <a-breadcrumb-item>下一个</a-breadcrumb-item>
                    </a-breadcrumb>
                </div>
                <router-view/>
            </a-layout-content>
            <a-layout-footer :style="{ textAlign: 'center' }">
                DengZebin netdisk @2023 by play
            </a-layout-footer>
        </a-layout>
    </a-layout>
</template>
<script setup lang="ts">

    import Sider from '@/components/Sider.vue'
    import { ref,reactive,watch } from 'vue'
    import {
        UpCircleOutlined,
        FolderOpenOutlined,
    } from '@ant-design/icons-vue'
    const model = ref<string[10]>(["0"])

    // 用于实现取消导航栏选中
    watch(model, (newQuestion, oldQuestion) => {
        model.value[0] = "0"
    })
    //取消右键操作
    document.body.oncontextmenu =
        function () {
            return false; //取消浏览器默认操作
        }

    function newCreate(params){
        
    }

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