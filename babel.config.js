process.env.TAMAGUI_TARGET = "native";

module.exports = function (api) {
  api.cache(true);
  return {
    presets: [["babel-preset-expo", { jsxRuntime: "automatic" }]],
    plugins: [
      [
        "@tamagui/babel-plugin",
        {
          components: ["tamagui"],
          config: "./src/tamagui.config.ts",
          logTimings: true,
          disableExtraction: process.env.NODE_ENV === "development",
        },
      ],
      [
        "transform-inline-environment-variables",
        {
          include: "TAMAGUI_TARGET",
        },
      ],
      "@babel/plugin-proposal-export-namespace-from",
      "react-native-reanimated/plugin",
    ],
  };
};
