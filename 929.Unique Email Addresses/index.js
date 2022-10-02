const numUniqueEmails = function (emails) {
  let local = "";
  let domain = "";
  let result = [];

  for (let i = 0; i < emails.length; i++) {
    let index = emails[i].indexOf("@");
    local = emails[i].slice(0, index);
    domain = emails[i].slice(index + 1, emails[i].length);

    if (local.indexOf("+") !== -1) {
      local = local.slice(0, local.indexOf("+"));
    }

    if (local.indexOf(".")) {
      let localArr = local.split(".");
      local = localArr.join("");
    }

    result.push(local + "@" + domain);
  }
  return [...new Set(result)].length;
};
