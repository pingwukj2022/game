import { resolve } from 'path';
 
export default function(){
    return {
        mode:"production",
        // eslint-disable-next-line no-undef
        entry: resolve(__dirname, 'src/main.jsx'),
        output: {
            // eslint-disable-next-line no-undef
            path: resolve(__dirname, 'dist'),
            filename: `main.jsx`,
            //意思是把我们的输出作为组件，没有这个在react项目中识别不到export导出的组件
            library: {
                name: 'lg-select-modal',
                type: 'umd', // 以库的形式导出入口文件时，输出的类型,这里是通过umd的方式来暴露library,适用于使用方import的方式导入npm包
                umdNamedDefine: true
            }
        },
        module: {
            rules: [
                {
                    test: /\.(css|scss)$/i,
                    use: ["style-loader", "css-loader", "sass-loader"],
                },
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    exclude: /(node_modules|dist|build|example)/
                }
            ],
        }
    }
}