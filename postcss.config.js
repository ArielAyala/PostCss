module.export = {
     plugins: [
    //     require('autoprefixer')({
    //         grid: true
    //     }),
        require('postcss-cssnext')({
            features: {
                autoprefixer: {
                    grid: true,
                }
            }
        })
    ]
}