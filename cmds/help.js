const menus = {
    main: `
        weather [command] <options>

        today ................. show weather for today
        version ............... show package version
        help .................. show help menu for a command`,

    today: `
        weather today <options>
        
        --location, -l ........ the location you choose`,
}

module.exports = (args) => {
    const subCmd = args._[0] === 'help'
        ? args._[1]
        : args._[0]

    console.log(menus[subCmd] || menus.main)
}