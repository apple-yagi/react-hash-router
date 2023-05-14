// eslint-disable-next-line n/file-extension-in-import
import { defineConfig } from "vitest/config";
import { mergeConfig } from "vite";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "happy-dom",
      setupFiles: "./__tests__/setup.ts",
    },
  })
);
