function openSelect(){
var inp = document.getElementById("selection");
var node= document.createElement("div");
node.style="background-color: #A3FFF4; width:180px"
    node.appendChild(document.createTextNode("Patient is busy from:"))
    node.appendChild(document.createElement("br"))
    node.append("\n6:30 - 8:00  -  Surgery")
    node.appendChild(document.createElement("br"))
    node.appendChild(document.createTextNode("8:00 - 14:00  -  Rest Period"))
    node.appendChild(document.createElement("br"))
    node.appendChild(document.createTextNode("14:00 - 15:00  -  Post-Surgery Checkup"))
    node.appendChild(document.createElement("br"))
    node.appendChild(document.createTextNode("17:00 - 22:00  -  Rest Period"))
var node2=document.createElement("div");
node2.style="background-color:#A3FFF4; width:600px;position:absolute;left:200px; top:500px";
    node2.appendChild(document.createTextNode("Start: "));
    var node4 = document.createElement("input");
    node4.type="time"
    node4.min="15:00"
    node4.max="16:00"
    node2.appendChild(node4)
    node2.appendChild(document.createTextNode("     End: "));
    var node5 = document.createElement("input");
    node5.type="time"
    node5.min="16:00"
    node5.max="17:00"
    node2.appendChild(node5)
    var node3 = document.createElement("a")
    node3.target="_blank"
    node3.style="position:relative;top:0px;left:75px"
    node3.class="fcc-btn"
    node3.href="HomePageSecret.html"
    node3.appendChild(document.createTextNode("Submit"));
    node2.appendChild(node3);
    node.appendChild(node2);

    inp.appendChild(node)
}