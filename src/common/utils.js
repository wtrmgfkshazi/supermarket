let timer = null
export function debounce(func, time = 100) {
    //剩余参数   ...ages
    return function (...args) {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            func.call(this, args);
        }, time);
    };
}