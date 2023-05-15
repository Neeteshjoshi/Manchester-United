let profileBtn = document.getElementById("profileBtn");
let profileBox = document.getElementById("profileContainer");
let profileCancel = document.getElementById("profileCancel");
let container = document.getElementById("mainSection");
let logoutBox = document.getElementById("logoutBox");
let logoutBtn = document.getElementById("logoutBtn");
let logoutCancel = document.getElementById("logoutCancel");

function profileClick() {
  profileBox.style.display = "block";
  logoutBox.style.display = "none";
}

function profileCancelFun() {
  profileBox.style.display = "none";
}

function logoutClick() {
  logoutBox.style.display = "block";
  profileBox.style.display = "none";
}

function logoutCancelFun() {
  logoutBox.style.display = "none";
}
