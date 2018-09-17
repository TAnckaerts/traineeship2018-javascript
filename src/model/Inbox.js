class Inbox {

    constructor(id, p1, p2) {
        this.id = id;
        this.p1 = p1;
        this.p2 = p2;
        this.messages = [];
    };

    send(message, sender) {
        this.messages.push(
            new Message(
                message, sender, p1.id === sender.id ? p1 : p2, p1.id === sender.id ? p2 : p1
            ));
    };

    deleteMEssage(message) {
        this.messages = this.messages.filter(m => {
            return message.id !== m.id;
        });
    };

    visualize() {
        let result = '';
        for (let i = 0; i < this.messages.length; i++) {
            if (this.messages[i].sender.id === this.p1.id) {
                result += this.messages[i].text;
            } else {
                result += this.messages[i].date + '\n';
                result += '\t\t\t\t' + this.messages[i].text;
            }
            result += '\n\n';
        }
    };
}