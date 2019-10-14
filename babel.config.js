module.exports = {
    presets: [
        '@vue/app',
        "@babel/preset-env",
        "@babel/preset-flow"
    ],
    "plugins": [
        //支持类成员属性
        "@babel/plugin-proposal-class-properties"
    ]
}
  