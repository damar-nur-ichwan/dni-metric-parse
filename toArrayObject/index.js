const parsePrometheusTextFormat = require('parse-prometheus-text-format')

function toArrayObject(data){
    return parsePrometheusTextFormat(data)
}
module.exports = toArrayObject