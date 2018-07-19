'use strict'
 //@Todo: move contents  functions from main scripts to this class 
class SortingStruct { 
  
    constructor(folders, sortByProp){
        document.addEventListener("keydown", this.bindKeyEvents, false);  
        console.log('Constructor: keydown event listener were added.')
        this.tree = folders;
        this.sortByProperty = sortByProp;
    }
    displayFolderTree() {
 
    } 
    bindKeyEvents(e) {
        
            switch(e.keyCode) {
                case 68: console.log('D  Default key clicked');
                break;

                case 82: console.log('R  Random key clicked');
                break;

                case 83: console.log('S Sorting key clicked');
                break;
 
                default: return;  
            }
            e.preventDefault();  
    }
    
}
 