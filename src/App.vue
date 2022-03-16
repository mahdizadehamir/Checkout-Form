<template>
    <div class="lg:max-w-7xl lg:mx-auto md:container md:mx-auto">
        <router-view :key="$route.path" />
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Lalezar&display=swap');
@import url(//fonts.googleapis.com/earlyaccess/notonaskharabicui.css);
@import url('https://fonts.googleapis.com/css2?family=Lalezar&family=Open+Sans&display=swap');
.container {
    font-family: 'Noto Naskh Arabic UI', 'Lalezar' ,'BTraffic',serif;
}
@font-face {
	font-family: 'BTraffic';
	src: url(../assets/font/BTraffic.eot);
	src: url(./assets/font/BTraffic.eot?#iefix) format("embedded-opentype"), url(./assets/font/BTraffic.woff) format("woff"), url(./assets/font/BTraffic.ttf) format("truetype");
	font-weight: normal;
	font-style: normal
}


</style>
