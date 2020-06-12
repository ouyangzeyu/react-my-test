/**
 * @feature craco的配置文件，文件名可以在package.json中通过cracoConfig属性自定义
 */
// module.exports = function ({ env }) {
//     return {

//     }
// }

const CracoLessPlugin = require("craco-less");

module.exports = {
    plugins: [{ plugin: CracoLessPlugin }]
}
