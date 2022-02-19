<template>
    <div class="lg:p-2 md:container md:mx-auto">
        <router-view :key="$route.path" />
    </div>
</template>

<style>
@import url(//fonts.googleapis.com/earlyaccess/notonaskharabicui.css);
.container {
    font-family: 'Noto Naskh Arabic UI', serif;
}
</style>
