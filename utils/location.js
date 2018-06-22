const axios = require('axios')

module.exports = async () => {
    const result = await axios({
        method: 'get',
        url: 'http://ip-api.com/json',
    })

    const { city, regionName } = result.data
    return `${city}, ${regionName}`
}