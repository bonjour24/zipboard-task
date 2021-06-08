import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";
import { postCollection } from "/imports/api/links";

const insertPost = (postText, user) => {
  postCollection.insert({
    text: postText,
    userId: user._id,
    author: user.username,
    createdAt: new Date(),
  });
};
const userName = "abhay";
const pass = "12345";

Meteor.startup(() => {
  console.log("Hey");
  if (!Accounts.findUserByUsername(userName)) {
    Accounts.createUser({
      username: userName,
      password: pass,
    });
  }
  // If the Links collection is empty, add some data.
});
