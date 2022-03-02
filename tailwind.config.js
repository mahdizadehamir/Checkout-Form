module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        extend: {},
        fontFamily:{
            'titr':['Lalezar','Noto Naskh Arabic UI'],
            'body':['Noto Naskh Arabic UI','Lalezar'],
            'product':['B Yekan','Noto Naskh Arabic UI','Open Sans'],
        }
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('flowbite/plugin')
    ],
    content:[
        "./node_modules/flowbite/**/*.js"
    ]
}
