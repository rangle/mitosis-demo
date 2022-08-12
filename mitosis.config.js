/** @type{import('@builder.io/mitosis').MitosisConfig} */
module.exports = {
  files: "src/**",
  targets: [
    "react",
    // // still unsupported
    // // 'qwik',
    // // 'builder',
    // "vue",
    // "html",
    // // TO-DO: fix error causing svelte output not to work
    // // 'svelte',
    // "solid",
    // "angular",
    // "webcomponent",
  ],
  options: {
    react: {
      format: "lite",
      stylesType: "styled-components",
      stateType: "useState",
      type: "dom",
      prettier: true,
      transpiler: {
        languages: ["ts", "js"],
      },
    },
  },
};
