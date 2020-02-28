import { fetch } from './fetch'

export function getTestData() {
    return fetch({
        url: '/test',   // vue.config.js mockでjsonを読み込ませる時に urlを一致にする必要がある
        method: 'get'
    })
}