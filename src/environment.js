const isBrowser = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    if (userAgent.includes('electron')) {
        return false
    }
    return true
}

export {isBrowser}
