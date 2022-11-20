var containers = document.getElementsByClassName('container'); 

var items = document.getElementsByClassName('item');

console.log(containers);
console.log(items);

function handleSubmit() {
    alert("Form submitted");
}

function showContents(){
    console.log("showContents");
    document.getElementById("header").hidden = true;

   
}

function addClassToItems(className) {
    for (var i = 0; i < items.length; i++) {
        items[i].classList.add(className);
    }
}

const flexBoxOptions = {
    display: 'flex',
    flexDirection: ['row', 'row-reverse', 'column', 'column-reverse'],
    justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    alignItems: ['flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    flexSelf: ['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
    Order : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
    flexGrow: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    flexShrink: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    flexBasis: ['auto', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    flexWrap: ['nowrap', 'wrap', 'wrap-reverse'],
    alignContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']
}

const flexBox = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexSelf: 'auto',
    Order : '0',
    flexGrow: '0',
    flexShrink: '1',
    flexBasis: 'auto',
    flexWrap: 'nowrap',
    alignContent: 'stretch'
}

function reset() {
    const items = document.getElementsByClassName('item');
    for (var i = 0; i < items.length; i++) {
        console.log(items[i]);
        items[i].style.display = flexBox.display;
        items[i].style.flexDirection = flexBox.flexDirection;
        items[i].style.justifyContent = flexBox.justifyContent;
        items[i].style.alignItems = flexBox.alignItems;
        items[i].style.flexSelf = flexBox.flexSelf;
        items[i].style.Order = flexBox.Order;
        items[i].style.flexGrow = flexBox.flexGrow;
        items[i].style.flexShrink = flexBox.flexShrink;
        items[i].style.flexBasis = flexBox.flexBasis;
        items[i].style.flexWrap = flexBox.flexWrap;
        items[i].style.alignContent = flexBox.alignContent;
    }

}


changeFlexDirection = () => {
    var parent = document.getElementById("parent");
    parent.style.flexDirection = document.getElementById("flex-direction").value;
}

changeJustifyContent = () => {
    var parent = document.getElementById("parent");
    parent.style.justifyContent = document.getElementById("justify-content").value;
}