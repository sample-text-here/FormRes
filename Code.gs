function submit(e) {
  e = e.response;
  var res = e.getItemResponses(),
    send =
      '<table style="border-collapse: collapse;padding:0;margin:auto;width:80%;text-align:left;font-size:13px;">' +
      '<tr style="background:#1FBED9;color:white;"><th style="padding:0.5em;text-align:left;">Question</th><th>Answer</th></tr>',
    odd = true;
  for (var i = 0; i < res.length; i++) {
    if (odd) {
      send += '<tr style="margin:0;background:#CCC;">';
    } else {
      send += '<tr style="margin:0;">';
    }
    send +=
      '<td style="padding:0.5em;text-align:left;">' +
      res[i].getItem().getTitle() +
      '</td><td style="padding:0.5em;text-align:left;">' +
      res[i].getResponse() +
      "</td></tr>";
    odd = !odd;
  }
  send += "</table>";
  MailApp.sendEmail({
    to: e.getRespondentEmail(),
    subject: "Hello",
    htmlBody:
      '<div style="margin:auto;width:50%;border:solid black 2px;background:white;text-align:center;box-shadow:0 0 5px #444;box-sizing:border-box;">' +
      '<div style="width:100%;background:#1FBED9;font-size:24px;color:white;padding:1em 0;">Hello<br><span style="font-size:16px">Here\'s your form response</span></div><br>' +
      "<p>You are recieving this email because you responded to a form. Don't panic.</p>" +
      send +
      '<br><span style="color:#888;margin-bottom:1em;font-size:10px;">haha you cant unsubscribe</span></div>',
    name: "not a spambot",
  });
}
