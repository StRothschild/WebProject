<template>
<article>
    <p>{{messages}}</p>
    <button @click='getPicture'>获取图片</button>
</article>
</template>

<script>
    // 导入 Axios 
    import axios from 'axios';  
    export default {
        data: function() {
            return {
                messages: 'Welcome Home!'
            }
        },
        methods: {
            getPicture: function() {
                // 使用 Axios 发送请求
                axios.get('/resources/h5.gif')
                    .then(function (response) {
                        console.log(response);
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
            }
        }
    }
</script>

<style>
    p {
        color: green;
    }
</style>