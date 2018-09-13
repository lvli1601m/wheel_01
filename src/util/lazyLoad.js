export default (el) => {
    // 距离底部的距离
    let offset = 10;
    // 获取所需懒加载的元素
    let lazy = Array.from(document.querySelectorAll('img'));
    // 1.判断元素是否出现在视口中
    let view = (ele) => {
            let react = ele.getBoundingClientRect();
            if (react.top > 0 && react.top < window.innerHeight + offset && react.left >= 0 && react.right >= 0) {
                return true;
            }
            return false
        }
        // 判断是否加载过
    let isDeal = (ele) => {
        return ele.src == ele.dataset.src;
    }
    let load = () => {
        lazy.forEach((item) => {
            if (view(item) && !isDeal(item)) {
                item.src = item.dataset.src;
            }
        })
    }
    load();
    document.querySelector(el).addEventListener('scroll', load)
}
// ，延迟内存占用
//2，增加类的灵活性
//3， 都是可重建的资源 可以置空 再次创建
// 不必将创建对象的代码全部写在viewDidLoad方法中，代码的可读性更强
//每个控件的getter方法中分别负责各自的实例化处理，代码彼此之间的独立性强，松耦合