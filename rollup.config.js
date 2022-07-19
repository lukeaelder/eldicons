import { babel } from '@rollup/plugin-babel';
import filesize from "rollup-plugin-filesize";
import { terser } from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";

const config = {
    input: 'icons-react/index.js',
    output: {
        file: 'dist/index.esm.js',
        format: 'esm'
    },
    external: [/@babel\/runtime/],
    plugins: [
        babel({babelHelpers: 'runtime', plugins: ['@babel/plugin-transform-runtime'], exclude: 'node_modules/**'}),
        external(),
        resolve(),
        commonjs(),
        terser(),
        filesize()
    ]
};

export default config;