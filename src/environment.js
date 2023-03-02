const isBrowser = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.includes('electron')) {
        return false
    }
    return true
}

// TODO: leave an opening for other environment details we may want to expose
const printEnvironment = () => {
    const mode = `Running in ${isBrowser() ? 'browser' : 'electron'} mode`
    console.log('JSRL game starting.')
    console.log(mode)
}

export {isBrowser, printEnvironment}
