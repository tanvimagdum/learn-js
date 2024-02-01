window.onload = function() {
  document.getElementById('addTableBtn').addEventListener('click', addTable);
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function(colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createButtonNode(btnTxt, e, l) {
  let btnNode = document.createElement("button");
  let buttonNodeTxt = createTxtNode(btnTxt);
  btnNode.appendChild(buttonNodeTxt);
  btnNode.addEventListener(e, l);
  return btnNode;
}

function addTable() {
  const tableNode = document.createElement("table");
  for(let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2 = createTDNode(createButtonNode("Edit text", "click", function() {
      edit(col1);
    }));
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}

function edit(node) {
  let newnode = document.createElement("input");
  newnode.type = 'text';
  newnode.placeholder = 'Enter Cell (x,y) ...';
  node.replaceChild(newnode, node.childNodes[0]);
}