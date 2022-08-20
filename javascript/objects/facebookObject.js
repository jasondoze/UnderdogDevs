/*
 The `facebookProfile` object should have the `name` (string), 
 `friends` (number), and `messages` (array of strings) property
 Your `facebookProfile` object should have the `postMessage()`, 
 `deleteMessage()`, `addFriend()` and `removeFriend()` method
 Carefully implement the desired functionality of each method, as decribed above

 addition at the end is done using push() method
 addition at a specific index is done using splice() method
 deletion from the beginning is done using pop() method
 deletion from a specific index is done using splice() method
 */

let facebookProfile = {
  name: 'Goober',
  friends: 20,
  messages: ['Hello', 'How are you?', "I'm good"],
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends += 1;
  },
  removeFriend: function () {
    if (facebookProfile.friends > 0) {
      facebookProfile.friends -= 1;
    }
  },
};

facebookProfile.postMessage('I am good');
console.log(facebookProfile.messages);

facebookProfile.deleteMessage(2);
console.log(facebookProfile.messages);

facebookProfile.addFriend(1);
console.log(facebookProfile.friends);

facebookProfile.removeFriend(3);
console.log(facebookProfile.friends);
