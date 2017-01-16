window.onload = function(){
    document.getElementById('submit').onclick = AddComment;
    document.getElementById('find').onclick = OpenSearchLine;
    document.getElementById('search').onclick = Search;
};

function AddComment() {
    var text = document.getElementById('comment-text').value;
    var div = document.createElement('div');
    div.className = "comment";

    div.innerHTML = "<img src=\"images/ava.jpg\" class=\"com-avatar\"><div class=\"user-text\"><div class=\"user-name\">Mike Taylor</div><div class=\"user-comment\"></div> " +
    "</div> <div class=\"comment-date\"> <div class=\"date-block\"> <img src=\"images/clock.png\"> <span class=\"date\"></span><span class=\"time\"></span> </div> " +
    "<div class=\"like-block\"><img src=\"images/like.png\"><span class=\"likes\">12</span> </div></div>";


    var date = new Date();
    var month = date.getUTCMonth();
    var day = date.getDay();
    var hours = date.getHours();
    var minutes = date.getMinutes();

    div.childNodes[1].childNodes[1].innerHTML = text;
    var months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct"];
    var ampm = hours >= 12 ? 'pm' : 'am';
    if (hours > 12) hours = hours-12;

    div.childNodes[3].childNodes[1].childNodes[3].innerHTML = months[month] +" " + day.toString()+", ";
    div.childNodes[3].childNodes[1].childNodes[4].innerHTML =hours.toString() +":"+ minutes.toString()+ ampm;

    document.getElementById('comments').appendChild(div);
    document.getElementById('comment-text').value  = '';

    return true;
}
function Search() {
    var searchEl = document.getElementById('search-text').value;
    var commentsEl = document.getElementById('comments');
    var ComList = commentsEl.getElementsByClassName('comment');
    for (var i=0; i<ComList.length; i++) {
        var userComment = ComList[i].childNodes[3].childNodes[3].innerHTML;
        userComment = userComment.toLowerCase();
        searchEl = searchEl.toLowerCase();
        if (userComment.indexOf(searchEl) == -1){
            ComList[i].remove();
            i--;
        }
    }
    document.getElementById('search-box').classList.toggle('display-none');
    document.getElementById('search-text').value = '';
    document.body.scrollTop = 9999;
}
function OpenSearchLine() {
    document.getElementById('search-box').classList.toggle('display-none');
}