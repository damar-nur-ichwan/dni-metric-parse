function toArrayString(res){
    let metric_name = [], value = []
    res.split('\n').map(data => {
      if(!data.includes("#")){
        let read_metric_name = data.split(" ")[0]
        let read_value = parseFloat(data.split(" ")[1])
        if(read_value >= 0){
          metric_name.push(read_metric_name)
          value.push(read_value)
        }
      }
    })
    return {
        FindAll:()=>{return require('./FindAll')(metric_name,value)},
        FindIs:(keyword)=>{return require('./FindIs')(metric_name,value,keyword)},
        FindIsNot:(keyword)=>{return require('./FindIsNot')(metric_name,value,keyword)}
    }
  }

  module.exports = toArrayString