<template>
    <nav
        dir="rtl"
        class="
            relative
            container
            lg:w-11/12
            mx-auto
            flex flex-wrap
            items-center
            justify-between
            py-4
            bg-gray-100
            text-gray-400
            hover:text-gray-700
            focus:text-gray-700
            shadow-lg
            my-5
            rounded-2xl
            navbar navbar-expand-lg navbar-light
            dark:bg-gray-900 dark:text-white
        "
    >
        <div
            class="
                container-fluid
                w-full
                flex flex-wrap
                items-center
                justify-between
                px-6
            "
        >
            <button
                class="
                    navbar-toggler
                    text-gray-500
                    border-0
                    hover:shadow-none hover:no-underline
                    py-2
                    px-2.5
                    bg-transparent
                    focus:outline-none
                    focus:ring-0
                    focus:shadow-none
                    focus:no-underline
                "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="bars"
                    class="w-6"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                >
                    <path
                        fill="currentColor"
                        d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    ></path>
                </svg>
            </button>
            <div
                class="collapse navbar-collapse flex-grow items-center"
                id="navbarSupportedContent"
            >
                <a
                    class="
                        flex
                        items-center
                        text-gray-900
                        hover:text-gray-900
                        focus:text-gray-900
                        mt-2
                        lg:mt-0
                        mr-1
                    "
                    href="#"
                >
                    <img
                        src="../../assets/images/logo/favpng_safe-room-house-amiran-hotel.png"
                        style="height: 60px"
                        alt=""
                        loading="lazy"
                    />
                </a>
                <!-- Left links -->
                <ul class="navbar-nav flex flex-col pl-0 list-style-none">
                    <li class="nav-item p-2">
                        <a
                            class="
                                font-titr
                                dark:text-white
                                nav-link
                                text-gray-500
                                hover:text-gray-700
                                focus:text-gray-700
                                p-0
                            "
                            href="#"
                            >داشبورد</a
                        >
                    </li>
                    <li class="nav-item p-2">
                        <a
                            class="
                                font-titr
                                dark:text-white
                                nav-link
                                text-gray-500
                                hover:text-gray-700
                                focus:text-gray-700
                                p-0
                            "
                            href="#"
                            >تیم طراحی</a
                        >
                    </li>
                    <li class="nav-item p-2">
                        <a
                            class="
                                font-titr
                                dark:text-white
                                nav-link
                                text-gray-500
                                hover:text-gray-700
                                focus:text-gray-700
                                p-0
                            "
                            href="#"
                            >پروژه ها</a
                        >
                    </li>
                </ul>
                <!-- Left links -->
            </div>
            <!-- Collapsible wrapper -->

            <!-- Right elements -->
            <div class="flex items-center justify-between relative">
                <a
                    href=""
                    class="
                        inline-block
                        py-4
                        px-2
                        text-green-500
                        border-b-4 border-green-500
                        text-2xl
                        font-titr
                        ml-5
                        self-center
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
                <div class="relative inline-block">
                    <router-link
                        class="
                            inline-block
                            py-4
                            dark:text-gray-300
                            text-gray-500
                            font-titr
                            text-2xl
                            dark:hover:text-green-500
                            hover:text-green-500
                            transition
                            duration-300
                        "
                        :to="{ name: 'Basket' }"
                    >
                        <li
                            class="
                                text-center
                                font-titr
                                block
                                pt-3
                                align-middle
                                dark:text-gray-400
                                text-gray-500
                                dark:hover:text-green-500
                                hover:text-green-500
                                transition
                                duration-300
                            "
                        >
                            <a href="#" role="button" class="relative flex">
                                <svg
                                    class="flex-1 w-8 h-8 fill-current"
                                    viewbox="0 0 24 24"
                                >
                                    <path
                                        d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
                                    />
                                </svg>
                                <span
                                    :class="
                                        bdgNumber !== 0 ? 'display' : 'hidden'
                                    "
                                    class="
                                        font-product
                                        absolute
                                        right-0
                                        top-0
                                        rounded-full
                                        bg-red-600
                                        w-4
                                        h-4
                                        top
                                        right
                                        p-0
                                        m-0
                                        text-white text-sm
                                        leading-tight
                                        text-center
                                    "
                                    >{{ bdgNumber }}
                                </span>
                            </a>
                        </li>
                    </router-link>
                </div>
                <div class="relative inline-block mr-5 pt-1">
                    <button
                        id="theme-toggle"
                        type="button"
                        class="
                            inline-block
                            text-gray-500
                            dark:text-gray-400
                            hover:bg-gray-100
                            dark:hover:bg-gray-700
                            focus:outline-none focus:ring-4 focus:ring-gray-200
                            dark:focus:ring-gray-700
                            rounded-lg
                            text-sm
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
            <!-- Right elements -->
        </div>
    </nav>
</template>

<script>
export default {
    props: ['bdgNumber'],
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
