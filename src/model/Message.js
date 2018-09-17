class Message {
    constructor(text, sender, receiver) {
        this.id = new Date().toString().replace(/\w/g, '');
        this.date = new Date();
        this.text = text;
        this.sender = sender;
        this.receiver = receiver;
    };
}