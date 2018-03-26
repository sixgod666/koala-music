import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export default function getSingerList() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'
    const param = Object.assign({}, options, commonParams, {
        channel: 'singer',
        page: 'list',
        key: 'all_all_all',
        pagesize: 100,
        pagenum: 1,
        hostUin: 0,
        needNewCode: 0,
        platform: 'yqq'
    })
    return jsonp({
        url,
        param,
        name: options.param
    })
}
