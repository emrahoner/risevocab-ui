const DEFAULT_CONFIG_LOC = '/config.json'
const DEV_CONFIG_LOC = '/config.local.json'

class ConfigService {
    
    private configObject: any
    
    async getDefaultConfig () {
        if (!this.configObject) {
            try {
                const res = await fetch(process.env.NODE_ENV === 'production' ? DEFAULT_CONFIG_LOC : DEV_CONFIG_LOC)
                this.configObject = await res.json()
            } catch (e) {
                const res = await fetch(DEFAULT_CONFIG_LOC)
                this.configObject = await res.json()
            }
        }
        return this.configObject
    }

    getConfig (key: string) {
        return this.configObject[key]
    }
}

export default new ConfigService()