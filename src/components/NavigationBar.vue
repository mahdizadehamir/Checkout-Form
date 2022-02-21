<template>
    <nav dir="rtl" class="bg-white dark:bg-gray-900 shadow-lg m-5 rounded-2xl">
        <div class="max-w-5xl mx-auto px-4">
            <div class="flex justify-between">
                <div class="flex space-x-7 dark:text-gray-300">
                    <img
                        src="../../assets/images/logo/favpng_safe-room-house-amiran-hotel.png"
                        alt=""
                        class="w-32 h- text-white"
                    />
                </div>
                <!-- Primary Navbar items -->
                <div class="hidden md:flex items-center space-x-5">
                    <a
                        href=""
                        class="
                            py-4
                            px-2
                            text-green-500
                            border-b-4 border-green-500
                            text-2xl
                            font-titr
                            ml-5
                        "
                        ><svg
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                            ></path></svg
                    ></a>
                    <router-link
                        class="
                            py-4
                            px-2
                            dark:text-gray-300
                            text-gray-500
                            font-titr
                            text-2xl
                            dark:hover:text-green-500
                            hover:text-green-500
                            transition
                            duration-300
                            ml-5
                        "
                        :to="{ name: 'Basket' }"
                        > 
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-basket"
                            width="30"
                            height="30"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path
                                stroke="none"
                                d="M0 0h24v24H0z"
                                fill="none"
                            ></path>
                            <polyline points="7 10 12 4 17 10"></polyline>
                            <path
                                d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"
                            ></path>
                            <circle cx="12" cy="15" r="2"></circle></svg
                    ></router-link>


                    <button
                        id="theme-toggle"
                        type="button"
                        class="
                            text-gray-500
                            dark:text-gray-400
                            hover:bg-gray-100
                            dark:hover:bg-gray-700
                            focus:outline-none focus:ring-4 focus:ring-gray-200
                            dark:focus:ring-gray-700
                            rounded-lg
                            text-sm
                            p-2.5
                        "
                    >
                        <svg
                            id="theme-toggle-dark-icon"
                            class="hidden w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                            ></path>
                        </svg>
                        <svg
                            id="theme-toggle-light-icon"
                            class="hidden w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </button>
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
        enableDarkMode2() {
            document
                .getElementById('switchTheme')
                .addEventListener('click', function () {
                    let htmlClasses = document.querySelector('html').classList
                    if (localStorage.theme == 'dark') {
                        htmlClasses.remove('dark')
                        localStorage.removeItem('theme')
                    } else {
                        htmlClasses.add('dark')
                        localStorage.theme = 'dark'
                    }
                })
        },
    },
    mounted() {
        var themeToggleDarkIcon = document.getElementById(
            'theme-toggle-dark-icon'
        )
        var themeToggleLightIcon = document.getElementById(
            'theme-toggle-light-icon'
        )

        // Change the icons inside the button based on previous settings
        if (
            localStorage.getItem('color-theme') === 'dark' ||
            (!('color-theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            themeToggleLightIcon.classList.remove('hidden')
        } else {
            themeToggleDarkIcon.classList.remove('hidden')
        }

        var themeToggleBtn = document.getElementById('theme-toggle')

        themeToggleBtn.addEventListener('click', function () {
            // toggle icons inside button
            themeToggleDarkIcon.classList.toggle('hidden')
            themeToggleLightIcon.classList.toggle('hidden')

            // if set via local storage previously
            if (localStorage.getItem('color-theme')) {
                if (localStorage.getItem('color-theme') === 'light') {
                    document.documentElement.classList.add('dark')
                    localStorage.setItem('color-theme', 'dark')
                } else {
                    document.documentElement.classList.remove('dark')
                    localStorage.setItem('color-theme', 'light')
                }

                // if NOT set via local storage previously
            } else {
                if (document.documentElement.classList.contains('dark')) {
                    document.documentElement.classList.remove('dark')
                    localStorage.setItem('color-theme', 'light')
                } else {
                    document.documentElement.classList.add('dark')
                    localStorage.setItem('color-theme', 'dark')
                }
            }
        })
    },
}
</script>

<style></style>
