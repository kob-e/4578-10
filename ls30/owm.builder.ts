class OpenweathermapBuilder {

    private queryStringParams: string[];
    private baseApiUrl: string;

    constructor(key: string) {
        this.baseApiUrl = 'http://api.openweathermap.org/data/2.5/weather';
        this.queryStringParams = [];
        this.addParam('key', key);
    }

    private addParam(key, val) {
        this.queryStringParams.push(key + '=' + val.replace(' ', '%20'));
    }
    appendQuery(q: string) {
        this.addParam('q', q);
    }
    appendUnits(units: string) {
        this.queryStringParams.push('units=' + units);
    }

    appendLang(lang: string) {
        this.queryStringParams.push('lang=' + lang);
    }

    appendMode(mode: string) {
        this.queryStringParams.push('mode=' + mode);
    }

    build(): string {
        return this.baseApiUrl + '?' + this.queryStringParams.join('&');

    }
}

const owmb = new OpenweathermapBuilder('gipj4w8tj98tgu49w8gj89w4g');
owmb.appendLang('he-IL');
owmb.appendMode('json');
owmb.appendQuery('jerusaelm, israel');
owmb.appendUnits('metric');

const fullUrl = owmb.build();
console.log(fullUrl);
