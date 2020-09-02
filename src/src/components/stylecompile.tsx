const cssPagedMedia = (function () {
    var style = document.createElement('style');
    document.head.appendChild(style);
    return function (rule:string) {
        style.innerHTML += '\n'+rule;
    };
}());


const printPortrait = () => {
    cssPagedMedia('@page{ size:portrait; }')
}


const printLandscape = () => {
    cssPagedMedia('@page{ size:landscape; }')
}



export default cssPagedMedia
export { printPortrait, printLandscape }