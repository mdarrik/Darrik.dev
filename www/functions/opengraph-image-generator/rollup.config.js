import babel from 'rollup-plugin-babel';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import replace from '@rollup/plugin-replace'
import litHtml from 'lit-html'

const config = {
    input: 'src/index.js',
    output: [
        {
            file: `image.js`,
            format: 'iife'
        }
    ],
    plugins: [
        resolve({
            preferBuiltins: true
        }),
        babel({
        }),
        commonjs({
            namedExports: {
                'lit-html': Object.keys(litHtml)
            }
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        globals(),
        builtins()
    ]
}

export default config;