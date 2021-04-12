// function formatApi(api) {
//   return `http://127.0.0.1:8009${api}`;
// }

// // exports.formatApi = formatApi; // 导出方法1   { formatApi: [Function: formatApi] }   很多方法单独暴露
// module.exports = formatApi; // 直接暴露    [Function: formatApi]    少了一层   单个对象暴露

exports.get = function() {
  console.log("11111111");
};
