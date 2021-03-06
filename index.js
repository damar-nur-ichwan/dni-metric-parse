const axios = require('axios');
const parsePrometheusTextFormat = require('parse-prometheus-text-format')


async function ParseExporterMetric(source){
    let res = await axios.get(source)
    return {
        toArrayObject:require('./toArrayObject')(res.data),
        toArrayString:require('./toArrayString')(res.data)
    }
}

module.exports = ParseExporterMetric


//Unit Test
// ParseExporterMetric('http://localhost:9115/metrics')
// .then(res => {return res.toArrayString.FindIs(['black','branch'])})
// .then(res => console.log(res))