const fs = require('fs')
const path = require('path')
const yaml = require('yaml')

const requestResolver = function () {
    const file = fs.readFileSync(path.join(__dirname, '../', 'config', 'gateway.yml'), 'utf-8')
    const config = yaml.parse(file)

    if (typeof config === 'undefined') {
        throw new Error('config not found')
    }

    return config.services
}

module.exports = {
    requestResolver
}
