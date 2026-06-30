//今日の日付を取得
const today= new Date();
//年を取得
const year= today.getFullYear();
//月を取得
const month = today.getmonth()+1;//月は０から始まるため＋１
//日を取得
const date = birthday.getDate();

console.log(year+"年"+month+月"+date+"日");
