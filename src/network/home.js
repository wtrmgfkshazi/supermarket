const { request } = require('./request')
///轮播图的网络请求
export function swiper() {
    return request({
        url: "/rollnav/rollPic",
        methods: 'get'
    })
}

//导航栏的网络请求
export function nav() {
    return request({
        url: "/rollnav/navPic",
        methods: "get"
    })
}


//首页商品的网络请求
export function goods(type, page) {
    return request({
        url: "/goods",
        method: "post",
        params: {
            type, page
        }
    })
}