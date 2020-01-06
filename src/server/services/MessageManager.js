import request from "request";

export default class PollingManager {
    constructor() {
        this.messageHistoryFromServer = [];
        this.currentMessage = null;
        this.currentSequence = null;
    }

    setData(data) {
        if(this.isValidJSON(data)) {
            let messages = JSON.parse(data);
            this.currentSequence = messages.sequence;
            messages.messages.forEach((elem) => {
                if(elem.type === 'ChatMessage') {
                    this.currentMessage = {
                        name: elem.message.name,
                        text: elem.message.text
                    };
                    this.messageHistoryFromServer.push(this.currentMessage);
                }
            });
        }

    }

    isValidJSON(data) {
        if(data !== "Duplicate Message Observer") {
            try {
                JSON.parse(data);
            } catch (e) {
                return false;
            }
            return true;
        }
    }

    getAgentEmail() {
        console.log(this.messageHistoryFromServer);
        let firstMessageText = this.messageHistoryFromServer[0].text;
        return firstMessageText.split('?')[1];
    }
}