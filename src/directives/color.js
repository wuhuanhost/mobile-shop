/**
 * 测试自定义指令
 *<div>
 * @param {*} el
 */
export default function (el, binding) {
  console.log(el)// 标签<div v-lang="color">{{num}}</div>
  console.log(binding)// 输出的是一个对象obj
  el.style = 'color:' + binding.value// binding.value就是color颜色red。
}
