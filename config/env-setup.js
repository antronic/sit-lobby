const shell = require('shelljs')

const path = require('path')
const fs = require('graceful-fs')
const ora = require('ora')

const params = process.argv.slice(2)[0]

const type = !params === true ? '' : `.${params}`

const envFileName = `env${type}.json`

const envFolder = 'env'
const envStoreLocation = path.join(path.resolve(), envFolder)

const envLocation = path.join(envStoreLocation, envFileName)

const config = require('./.default.env.json')

const spinner = ora('Building...\n')
spinner.start()

// Is env folder exists?
if (!fs.existsSync(path.join(envStoreLocation))) {
  shell.exec(`mkdir -p ${envStoreLocation}`)
}


// Is file env.json exists?
if (!fs.existsSync(path.join(envStoreLocation, 'env.json'))) {
  console.log('> env.json not found!')
  // console.log('> I will use default config')

  // If not it will create
  shell.exec(`touch ${envFolder}/env.json`)
  console.log('> env.json created!')
  console.log('')
  fs.writeFileSync(path.join(envStoreLocation, 'env.json'), JSON.stringify(config, null, 2), 'utf8')
}

// Is file env*.json exists?
if (fs.existsSync(envLocation)) {
  try {
    const envFile = require(envLocation)
    Object.assign(config, envFile)
    shell.rm('-rf', path.join(path.resolve(), 'dist/*'))
  } catch (e) {
    spinner.stop()
    console.log('> Failed to load env.json')
    console.log(e)
    process.exit(1)
  }
} else {
  console.log(`> ${envFileName} not found!`)
}

process.env.ENV_CONFIG = JSON.stringify(config)

spinner.stop()
