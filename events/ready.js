module.exports = (client) => {

  console.log(`${client.user.username} ready!`.bold.green)
  
  client.user.setActivity("memer-api.js.org | m!help", { type: "PLAYING" });
}