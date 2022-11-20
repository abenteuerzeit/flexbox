var containers = document.getElementsByClassName('container'); 
var items = document.getElementsByClassName('item');
let COUNTER = 0;


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
    display: 'none',
    flexDirection: '',
    justifyContent: '',
    alignItems: '',
    flexSelf: '',
    Order : '',
    flexGrow: '',
    flexShrink: '',
    flexBasis: '',
    flexWrap: '',
    alignContent: ''
}

function reset(){
    var parent = document.getElementById("parent");
    for (var i = 0; i < parent.children.length; i++) {
        parent.children[i].style = undefined;
    }
    parent.style= undefined;
}


const changeDisplay = () => document.getElementById("parent").style.display = document.getElementById("display").value;
const changeFlexDirection = () => document.getElementById("parent").style.flexDirection = document.getElementById("flex-direction").value;
const changeJustifyContent = () => document.getElementById("parent").style.justifyContent = document.getElementById("justify-content").value;
const changeAlignItems = () => document.getElementById("parent").style.alignItems = document.getElementById("align-items").value;
const changeFlexSelf = () => document.getElementById("parent").style.flexSelf = document.getElementById("flex-self").value;
const changeOrder = () => document.getElementById("parent").style.Order = document.getElementById("order").value;
const changeFlexGrow = () => document.getElementById("parent").style.flexGrow = document.getElementById("flex-grow").value;
const changeFlexShrink = () => document.getElementById("parent").style.flexShrink = document.getElementById("flex-shrink").value;
const changeFlexBasis = () => document.getElementById("parent").style.flexBasis = document.getElementById("flex-basis").value;
const changeFlexWrap = () => document.getElementById("parent").style.flexWrap = document.getElementById("flex-wrap").value;
const changeAlignContent = () => document.getElementById("parent").style.alignContent = document.getElementById("align-content").value;

const addChild = () => {
    const parent = document.getElementById("parent");
    const children = parent.children;
    const childrenCount = children.length;
    const lastChild = children[childrenCount - 1];
    const newChild = lastChild.cloneNode(true);
    newChild.id = `child-${childrenCount + 1}`;
    newChild.innerHTML = `Child ${childrenCount + 1}`;
    newChild.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    parent.appendChild(newChild);
}

const removeCh = () => {
    const parent = document.getElementById("parent");
    const children = parent.children;
    const childrenCount = children.length;
    if (childrenCount > 1) {
        parent.removeChild(children[childrenCount - 1]);
    }
}

const addParent = () => {
    throw new Error("Not implemented");
};

const random = ()  => {
    const parent = document.getElementById("parent");
    const children = parent.children;
    const childrenCount = children.length;
    for (var i = 0; i < childrenCount; i++) {
        var child = children[i];
        child.className = `item-${i}`;
        child.id = `child-${i}`;
        var style = child.style;
        style.display = flexBoxOptions.display;
        style.flexDirection = flexBoxOptions.flexDirection[Math.floor(Math.random() * flexBoxOptions.flexDirection.length)];
        style.justifyContent = flexBoxOptions.justifyContent[Math.floor(Math.random() * flexBoxOptions.justifyContent.length)];
        style.alignItems = flexBoxOptions.alignItems[Math.floor(Math.random() * flexBoxOptions.alignItems.length)];
        style.flexSelf = flexBoxOptions.flexSelf[Math.floor(Math.random() * flexBoxOptions.flexSelf.length)];
        style.Order = flexBoxOptions.Order[Math.floor(Math.random() * flexBoxOptions.Order.length)];
        style.flexGrow = flexBoxOptions.flexGrow[Math.floor(Math.random() * flexBoxOptions.flexGrow.length)];
        style.flexShrink = flexBoxOptions.flexShrink[Math.floor(Math.random() * flexBoxOptions.flexShrink.length)];
        style.flexBasis = flexBoxOptions.flexBasis[Math.floor(Math.random() * flexBoxOptions.flexBasis.length)];
        style.flexWrap = flexBoxOptions.flexWrap[Math.floor(Math.random() * flexBoxOptions.flexWrap.length)];
        style.alignContent = flexBoxOptions.alignContent[Math.floor(Math.random() * flexBoxOptions.alignContent.length)];
        children[i].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
    }
    parent.style.display = flexBoxOptions.display;
    parent.style.flexDirection = flexBoxOptions.flexDirection[Math.floor(Math.random() * flexBoxOptions.flexDirection.length)];
    parent.style.justifyContent = flexBoxOptions.justifyContent[Math.floor(Math.random() * flexBoxOptions.justifyContent.length)];
    parent.style.alignItems = flexBoxOptions.alignItems[Math.floor(Math.random() * flexBoxOptions.alignItems.length)];
    parent.style.flexSelf = flexBoxOptions.flexSelf[Math.floor(Math.random() * flexBoxOptions.flexSelf.length)];
    parent.style.Order = flexBoxOptions.Order[Math.floor(Math.random() * flexBoxOptions.Order.length)];
    parent.style.flexGrow = flexBoxOptions.flexGrow[Math.floor(Math.random() * flexBoxOptions.flexGrow.length)];
    parent.style.flexShrink = flexBoxOptions.flexShrink[Math.floor(Math.random() * flexBoxOptions.flexShrink.length)];
    parent.style.flexBasis = flexBoxOptions.flexBasis[Math.floor(Math.random() * flexBoxOptions.flexBasis.length)];
    parent.style.flexWrap = flexBoxOptions.flexWrap[Math.floor(Math.random() * flexBoxOptions.flexWrap.length)];
    parent.style.alignContent = flexBoxOptions.alignContent[Math.floor(Math.random() * flexBoxOptions.alignContent.length)];
}

const displayChildStyle =() => {
    const parent = document.getElementById("parent");
    const children = parent.children;
    const childrenCount = children.length;
    const stringArray = [];
    for (var i = 0; i < childrenCount; i++) {
        var child = children[i];
        var style = child.style;
        child.id = `child-${i}`;
        child.className = `item-${i}`;
        var tagName = child.tagName;
        const str = `
        =========================
        class: ${child.className}
        tag: ${tagName}
        \n
        ${child.id}\t{ 
        \tdisplay:\t${style.display};
        \tflex-direction:\t${style.flexDirection};
        \tjustify-content:\t${style.justifyContent};
        \talign-items:\t${style.alignItems};
        \tflex-self:\t${style.flexSelf};
        \torder:\t${style.Order};
        \tflex-grow:\t${style.flexGrow};
        \tflex-shrink:\t${style.flexShrink};
        \tflex-basis:\t${style.flexBasis};
        \tflex-wrap:\t${style.flexWrap};
        \talign-content:\t${style.alignContent};
        }`;
        console.log(str);
        stringArray.push(str);
    }
    alert(stringArray.join('\n'));
    return stringArray;
}

const displayParentStyle = () => {
    const parent = document.getElementById("parent");
    const style = parent.style;
    const el = document.getElementById("parent").tagName;
    const str = `
    flex parent CSS properties
    \n
    ${el.toLowerCase()}\t{
    \tdisplay:\t${style.display};
    \tflex-direction:\t${style.flexDirection};
    \tjustify-content:\t${style.justifyContent};
    \talign-items:\t${style.alignItems};
    \tflex-self:\t${style.flexSelf};
    \torder:\t${style.Order};
    \tflex-grow:\t${style.flexGrow};
    \tflex-shrink:\t${style.flexShrink};
    \tflex-basis:\t${style.flexBasis};
    \tflex-wrap:\t${style.flexWrap};
    \talign-content:\t${style.alignContent};
    }`;
    console.log(str);
    alert(str);
    return str;
}

