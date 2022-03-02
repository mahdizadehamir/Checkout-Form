<template>
    <div class="lg:max-w-7xl lg:mx-auto md:container md:mx-auto">
        <router-view :key="$route.path" />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');
@import url(//fonts.googleapis.com/earlyaccess/notonaskharabicui.css);
@import url(//db.onlinewebfonts.com/c/52ce4de2efeeb8b18dcbd379711224f3?family=B+Yekan);
@import url('https://fonts.googleapis.com/css2?family=Lalezar&family=Open+Sans&display=swap');
.container {
    font-family: 'Noto Naskh Arabic UI', 'Lalezar' ,'B Yekan',serif;
}
</style>
