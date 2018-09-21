<template>
    <p>{{messages}}</p>
</template>

<script>
    export default {
        data: function() {
            return {
                messages: 'Welcome Home!'
            }
        }
    }
</script>

<style>
    p {
        color: green;
    }
</style>