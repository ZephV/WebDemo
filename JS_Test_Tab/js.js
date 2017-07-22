/**
 * Created by Zeph on 2017/7/22.
 */
// JS实现选项卡切换
window.onload = function () {
    var oTab = document.getElementById("tab_body");
    var li = document.getElementsByTagName("li");
    var div = oTab.getElementsByTagName("div");
    for (var i = 0; i < li.length; i++) {
        li[i].index = i;
        li[i].onmouseover = function change() {
            for (var j = 0; j < li.length; j++) {
                li[j].className = "";
                div[j].className = "hide";
            }
            this.className = "on";
            div[this.index].className = "";
        }
    }
}