# CUSTOM ALERT
Custom Plug and Play Pop-up Alert for Javascript (No StyleSheet, No HTML)
#Installation
Include **modalize.js** in your project
# Interface
```javascript
modalize(textContent,bgColor, textColor, font)
```
#Example
HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<button id = "click1">Click1</button>
<button id = "click2">Click2</button>
<button id = "click3">Click3</button>
<button id = "click4">Click4</button>
<button id = "click5">Click5</button>
</body>
<script src="../lib/modalize.js"></script>
<script src="test.js">
document.getElementById('click1').addEventListener('click',() =>{modalize('Hello World','#e2da7d','#6b77d6', 'small Arial')});
document.getElementById('click2').addEventListener('click',() =>{modalize('Hello WorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorldWorld','#e2da7d','#6b77d6', 'small Arial')});
document.getElementById('click3').addEventListener('click',() =>{modalize('Hello World','#e2794b','#76d64e')});
document.getElementById('click4').addEventListener('click',() =>{modalize('Hello World','#e2da7d')});
document.getElementById('click5').addEventListener('click',() =>{modalize('Hello World')});
</script>
</html>