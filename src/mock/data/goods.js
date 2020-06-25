import Mock from 'mockjs'

const GoodsList = []
let skuArr = [
    {skuName:'华为 HUAWEI P30',brand:'HUAWEI',tag:"手机",unit:'台'},
    {skuName:'优衣库 羽绒服',brand:'UNIQUE',tag:"服装",unit:'件'},
    {skuName:'康师傅 红烧牛肉面',brand:'康师傅',tag:"食品",unit:'桶'},
    {skuName:'松下 电视机',brand:'Panasonic',tag:"电器",unit:'台'},
    {skuName:'水蜜桃',brand:'',tag:"水果",unit:'斤'}
]
for(let i = 0; i < 20; i++) {
    let idx = Mock.Random.integer(0,4)
    GoodsList.push(Mock.mock({
        skuId: Mock.Random.id(3),
        goodsSn: Math.abs(Mock.Random.integer()),
        skuName: skuArr[idx].skuName,
        brief: Mock.Random.cparagraph(),
        brand: skuArr[idx].brand,
        imageUrl: Mock.Random.image('300x250',Mock.Random.color()),
        details: Mock.Random.cparagraph(2),
        'price|0-100': 1,
        'saleCount|0-100': 1,
        'stock|0-100': 1,
        categories: skuArr[idx].tag,
        'isOnSale|1': [true,false],
        'isNew|1': [true,false],
        unit: skuArr[idx].unit
    }))
}

export {GoodsList}