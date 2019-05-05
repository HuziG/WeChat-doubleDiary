function getNowTime() {
  let now = new Date();
  let time = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
  return time
}

function getNowHour() {
  let timestamp = Date.parse(new Date());
  timestamp = timestamp / 1000;
  let n = timestamp * 1000;
  let date = new Date(n);
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  return h + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s)
}

module.exports = {
  getNowTime: getNowTime,
  getNowHour: getNowHour
}
