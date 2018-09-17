// TODO 11 convert these "classes" to it's own ES6 classes in separate files
// TODO 12 use all possible ES6 features you can think of
// TODO 13 create separate test files for each class and test the available functions
// TODO 14 think of some new functions/features to implement in these classes: inbox.clearAll(), person.removeInbox(inboxId), inbox.updateMessage(newMessage), inbox.archivedMessages, ...
// TODO 15 create tests for those new functions

var Inbox = function(id, p1, p2) {
    this.id = id;
    this.p1 = p1;
    this.p2 = p2;
    this.messages = [];

    this.send = function(message, sender) {
        this.messages.push(new Message(message, sender, p1.id === sender.id ? p1 : p2, p1.id === sender.id ? p2 : p1));
    };

    this.deleteMessage = function (message) {
        this.messages = this.messages.filter(function(m) {
            return message.id !== m.id;
        })
    }

    this.visualize = function() {
        var result = '';
        for (var i = 0; i < this.messages.length; i++) {
            if (this.messages[i].sender.id === this.p1.id) {
                result += this.messages[i].text;
            } else {
                result += this.messages[i].date + '\n';
                result += '\t\t\t\t' + this.messages[i].text;
            }
            result += '\n\n';
        }
    }
}

var Message = function(text, sender, receiver) {
    this.id = new Date().toString().replace(/\w/g, '');
    this.date = new Date();
    this.text = text;
    this.sender = sender;
    this.receiver = receiver;
}

var Person = function(id, name, nickname) {
    this.id = id;
    this.name = name;
    this.nickname = !!nickname ? '' : nickname;
    this.inboxes = [];

    this.changeName = function(newName) {
        this.name = newName;
    };

    this.changeNickname = function(newNickname) {
        this.nickname = newNickname;
    };

    this.addInbox = function(receiver) {
        this.inboxes.push(new Inbox(this.inboxes.length, this, receiver));
    }

    this.send = function(message, inboxId) {
        var inboxes = this.inboxes.filter(function (i) {
            return i.id === inboxId;
        });
        if (inboxes.length === 1) {
            inboxes[0].send(message, this);
        }
    };
}