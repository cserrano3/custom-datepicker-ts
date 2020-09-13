import ONE_DAY from './oneDay';

const TODAY_TIMESTAMP = Date.now() - (Date.now() % ONE_DAY) + (new Date().getTimezoneOffset() * 1000 * 60);

export default TODAY_TIMESTAMP;
