const { request } = require('./request')
export function goods(type, page) {
    return request({
        url: "/goods",
        method: "post",
        params: {
            type, page
        }
    })
}