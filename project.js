function load() {
    var mydata = JSON.parse(data);
    alert(mydata.length);

    var div = document.getElementById('data');

    for(var i = 0;i < mydata.length; i++)
    {
        div.innerHTML = div.innerHTML + "<p class='inner' id="+i+">"+ mydata[i].name +"</p>" + "<br>";
    }
}