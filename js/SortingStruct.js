'use strict'
    
class SortingStruct { 
  
    //take @folders Object and @currentProp string: current property sorting by.
    constructor(folders, currentProp='folder'){ 
        let self;
      
        this._defaultItems = folders.items; //keeping folders.items immutable 
        this._arrToSort = folders.items.slice();  //this is array to sort or shuffle
        this._currentProp = currentProp; 
        
        this._logIsOn = true; 
         
        //binding to make this work inside functions
        this._compareTwoObjects = this._compareTwoObjects.bind(this);
        this._displayItem = this._displayItem.bind(this);
        
        this.bindKeyEvents = this.bindKeyEvents.bind(this);
        this.sortByProperty = this.sortByProperty.bind(this);
        this.processItems = this.processItems.bind(this);
      
        document.addEventListener("keydown", this.bindKeyEvents, false);  
    } 
    
    //compare func for sort  concrete items by property name
    //using propNama == folder in closure
   _compareTwoObjects(a, b)  { 
         //0 if a.propName == b.propName   
         let res = 0;  
         //propName (folder) go first, other props last
         if (a.type === this._currentProp) { res = -1 } 
         if (a.type !== this._currentProp) { res =  1 }  
         return res;
   }      
     
    bindKeyEvents(e) {
        
            switch(e.keyCode) {
                //add needed properties    
                case 68: {
                    this._logIsOn ? console.log('D Default items key was clicked') : 1; 
                    this.displayItemsInObj(this._defaultItems);
                    break;
                }
                case 82: {
                    this.processItems(this._arrToSort, null,  this._arrToSort.randomize);
                    //why to pass this._defaultItems in arguments? 
                    //because not sure if this._defaultItems will be work Correctly inside deep recursion
                    this._logIsOn ? console.log('\n R  Shuffle key was clicked') : 1; 
                    this.displayItemsInObj(this._arrToSort); 
                    break;
                }
                case 83: { 
                    this.sortByProperty(this._arrToSort); 
                    this._logIsOn ? console.log('\n S Sorting key was clicked. \n Sort items by ' + this._currentProp + ' first') : 1; 
                    this.displayItemsInObj(this._arrToSort);
                    break;
                }
               case 67: { 
                    console.clear();
                    break;
                }
                default: return;  
            }
            e.preventDefault();              
    }  
    
    //@items array recieve folders.items prop
    //method make sorting by propertyName  
    //change items via reference    
    sortByProperty(items, parentObj=null){  
        let  sortedItems = items.sort(this._compareTwoObjects); 
        //add nested items
        if (parentObj)
            parentObj.items = sortedItems; 
        //process other nested objects
        items.forEach((item, index) => {
           if (item.hasOwnProperty('items')) {  //go reсursion deeper                
                this.sortByProperty(item.items, item)
            }             
        });
        return items;
    }
    
     //display item properties on console    
    _displayItem(item, depth) {
        let depthOutput = '';
        for (let i = 0; i < depth; i++)
            depthOutput += '_';
        console.log(depthOutput + '['+ item.type + ']' , item.name);
    }   
    
     //@items array recieve folders.items prop
     //display items recursively  
     displayItemsInObj(items, parentObj=null, depth=0){   
        //process other nested objects  
        items.forEach((item, index) => {  
            this._displayItem(item, depth);
            if (item.hasOwnProperty('items')) {  //go reсursion deeper  
               ++depth;
               this.displayItemsInObj(item.items, item, depth)               
            }
        }); 
      
    }     
    //@items array recieve folders.items prop
    //Go through object items in recursion
    //apply callback function at each item array   
    //@Todo: merge processItems with sortyByProperty in the future   
     processItems(items, parentObj, callback, params = []){   
        if (typeof callback == 'function' )
            callback.apply(items, params);
        else 
            return;  
        //add nested items
        if (parentObj)
            parentObj.items = items; 
        //process other nested objects
        items.forEach((item, index) => {
           if (item.hasOwnProperty('items')) {             
                this.processItems(item.items, item, callback, params)
            }             
        }); 
        
     }
    
    
    //Getters and setters
    //get copy of @items array (in current sorting state)
    get items() {
        return this._arrToSort.slice(); 
    }
    set items(arr) {
        if (Array.isArray(arr))
         this._arrToSort = arr; 
    }
    get logToConsole() {
        return this._logIsOn; 
    }
    set logToConsole(switcher) {
        if (typeof(variable) === "boolean")
            this._logIsOn =  switcher;
    }
    get currentProperty() {
        return this._currentProp; 
    }
    set currentProperty(currentProp) {
        if (typeof(variable) === "string")
            this._currentProp =  currentProp;
    }
}
 