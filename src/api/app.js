import Mock from 'mockjs'
const Random = Mock.Random
let names = [];
for(let i=0;i<100;i++){
    names.push(Random.cname())
}
Mock.setup({
    timeout: '200-1000'
})
// 获取学生列表
Mock.mock('/studentAll', function() {
    return Mock.mock({
        "student|1-10": [
            {
                "name|+1": names
            }
        ]
    })
})