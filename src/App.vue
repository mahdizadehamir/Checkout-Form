<template>
    <div class="lg:max-w-7xl lg:mx-auto md:container md:mx-auto">
        <router-view :key="$route.path" />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');
@import url(//fonts.googleapis.com/earlyaccess/notonaskharabicui.css);
.container {
    font-family: 'Noto Naskh Arabic UI', 'Lalezar' ,serif;
}
</style>
