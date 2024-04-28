class Config {
    constructor() {
        this.default()
    }

    default() {
        this.BASE_URL = 'https://api.collectapi.com'
    }
}

export default new Config()