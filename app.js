var Slack = require('slack-node');

webhookUri = "https://hooks.slack.com/services/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";

slack = new Slack();
slack.setWebhook(webhookUri);

slack.webhook({
  channel: "#testapi",
  username: "alert.bot",
  text: "This is posted to #testapi and comes from a bot named alert.bot. url : https://hooks.slack.com/services/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"
}, function(err, response) {
  console.log(response);
});
//
// slack.webhook({
//     icon_emoji: ":ghost:",
//     text: "This is posted to #general and comes from a bot named webhookbot."
// }, function(err, response) {
//     console.log(response);
// });
