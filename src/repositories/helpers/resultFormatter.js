export default class ResultFormatter {
    constructor(data = {}, status = '200') {
        this.status = status;
        this.data = data;
    }
}