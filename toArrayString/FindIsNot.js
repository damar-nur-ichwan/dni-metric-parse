function FindIsNot(metric_name,value,keyword){
    if(Array.isArray(keyword) != true){keyword = [keyword]}
    let array = metric_name
    keyword.map(key => {
      array = array.map(name => {
        if(name.includes(key)){
          return name
        } else {
          return 'undefined'
        }
      })
    })
    let MetricName = [],Value = []
    array.map((arr,index) => {
      if(arr === 'undefined'){
        MetricName.push(metric_name[index])
        Value.push(value[index])
      }
    })
    return {MetricName,Value}
  }
  module.exports = FindIsNot