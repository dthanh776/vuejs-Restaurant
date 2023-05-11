<template>
    <router-view></router-view>
</template>

<script>
export default {
    name: "App",
};
</script>

<style>
body {
    padding: 0;
    margin: 0;
}
.logo {
    width: 100px;
}
.register input,
.add input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button,
.add button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: white;
    cursor: pointer;
    margin-right: auto;
    margin-left: auto;
    display: block;
}

h1 {
    text-align: center;
}
img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
table {
    margin-left: auto;
    margin-right: auto;
}
</style>
