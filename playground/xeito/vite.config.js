import { defineConfig } from 'vite';
import xeito from '../../packages/vite-plugin-xeito/src/index';
import Inspect from 'vite-plugin-inspect';

export default defineConfig({
  plugins: [xeito(), Inspect()],
});