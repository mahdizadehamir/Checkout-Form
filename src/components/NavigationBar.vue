<template>
    <nav dir="rtl" class="bg-white dark:bg-gray-900 shadow-lg m-5 rounded-2xl">
        <div class="max-w-5xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-7 border-2 border-gray-500 dark:text-gray-300">
                    فروشگاه اینترنتی امیران
                </div>
                <!-- Primary Navbar items -->
                <div class="hidden md:flex items-center space-x-2">
                    <a
                        href=""
                        class="
                            py-4
                            px-2
                            text-green-500
                            border-b-4 border-green-500
                            font-semibold
                        "
                        >خانه</a
                    >
                    <a
                        href=""
                        class="
                            py-4
                            px-2
                            dark:text-gray-300
                            text-gray-500
                            font-semibold
                            hover:text-green-500
                            transition
                            duration-300
                        "
                        >سبد خرید</a
                    >
                    <a
                        href=""
                        class="
                            dark:text-gray-300
                            py-4
                            px-2
                            text-gray-500
                            font-semibold
                            hover:text-green-500
                            transition
                            duration-300
                        "
                        >درباره من</a
                    >
                    <a
                        href=""
                        class="
                            py-4
                            px-2
                            dark:text-gray-300
                            text-gray-500
                            font-semibold
                            hover:text-green-500
                            transition
                            duration-300
                        "
                        >تماس با ما</a
                    >
                    <a
                        @click="enableDarkMode()"
                        href=""
                        class="
                            dark:text-gray-300
                            py-4
                            px-2
                            text-gray-500
                            font-semibold
                            hover:text-green-500
                            transition
                            duration-300
                        "
                        >dark or light</a
                    >
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    methods: {
        enableDarkMode() {
            if (localStorage.theme === null) {
                localStorage.theme = 'dark'
            } else if (localStorage.theme === 'light') {
                localStorage.theme = 'dark'
            } else {
                localStorage.theme = 'light'
            }
        },
    },
}
</script>

<style></style>
