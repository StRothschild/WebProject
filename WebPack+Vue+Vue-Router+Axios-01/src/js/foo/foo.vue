<template>
    <p>{{messages}}</p>
</template>

<script>
    export default {
        data: function() {
            return {
                messages: 'Foo Page!'
            }
        }
    }
</script>

<style>
    p {
        color: green;
    }
</style>