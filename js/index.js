window.onload = function () {
    alert("test");
};
$(document).ready(function () {

    alert("test2");
});

document.addEventListener("deviceready", "OnDeviceReady", false);   

function OnDeviceReady()
{
    alert("test3");
    document.getElementById("test").innerHTML = "hello world";

}