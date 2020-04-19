import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import replace from '@rollup/plugin-replace'

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
        commonjs(),
        replace({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        globals(),
        builtins()
    ]
}

export default config;