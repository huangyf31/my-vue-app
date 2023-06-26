/**
 * 环境配置文件
 * 一般在企业级项目中有三个环境
 * 开发环境
 * 测试环境
 * 线上环境
 */
//当前的环境
const env = import.meta.env.MODE || 'prod'

const EnvConfig = {
    development: {
        baseApi: '/api',
        mockApi: 'https://www.fastmock.site/mock/117b47ba7ae2fa083c26c490ff39eae5/api',
    },
    test: {
        baseApi: '//test.future.com/api',
        mockApi: 'https://www.fastmock.site/mock/117b47ba7ae2fa083c26c490ff39eae5/api',
    },
    pro: {
        baseApi: '//future.com/api',
        mockApi: 'https://www.fastmock.site/mock/117b47ba7ae2fa083c26c490ff39eae5/api',
    },
}

export default {
    env,
    mock: true,
    ...EnvConfig[env]
}
