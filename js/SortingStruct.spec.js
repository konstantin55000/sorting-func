describe("SortingStruct", function () {

         //define variables for testing
         const folders = {
            items: [

                {
                    name: 'homer.png',
                    type: 'file'
                },
                {
                    name: 'abc',
                    type: 'folder'
                },
                {
                    name: 'xyz',
                    type: 'folder',
                    items: [
                        {
                            name: 'xxx',
                            type: 'folder',
                            items: [

                                {
                                    name: 'lisa.png',
                                    type: 'file'
                                },
                                {
                                    name: 'lisa folder',
                                    type: 'folder'
                                },
                                ]
                        }
                        ]
                }

                ]
        };  //default array 
         const defaultItems = folders.items.slice(); 
         let sortedByFolder =  {
            items: [
               
                {
                    name: 'xyz',
                    type: 'folder',
                    items: [
                        {
                            name: 'xxx',
                            type: 'folder',
                            items: [
 
                                {
                                    name: 'lisa folder',
                                    type: 'folder'
                                },
                                {
                                    name: 'lisa.png',
                                    type: 'file'
                                },
                                ]
                        }
                        ]
                },
                {
                    name: 'abc',
                    type: 'folder'
                },
                {
                    name: 'homer.png',
                    type: 'file'
                } 

                ]
           }; 
         let sortedByFile =   {
            items: [

                {
                    name: 'homer.png',
                    type: 'file'
                },
                {
                    name: 'abc',
                    type: 'folder'
                },
                {
                    name: 'xyz',
                    type: 'folder',
                    items: [
                        {
                            name: 'xxx',
                            type: 'folder',
                            items: [ 
                                {
                                    name: 'lisa.png',
                                    type: 'file'
                                },
                                {
                                    name: 'lisa folder',
                                    type: 'folder'
                                },
                                ]
                        }
                        ]
                }

                ] };
       
        let folderStruct = new SortingStruct(folders, 'folder');
        let fileStruct = new SortingStruct(folders, 'file'); //obj with sort by file
    
    describe("Sorting array of object by property", function () { 
        
        
        it("Sorting by property == 'folder':   folders goes first;  after folders  goes other properties ", function () {
            let expectSortedObj =  folderStruct.sortByProperty(folders.items);
            console.log('expected folder items ', expectSortedObj);
            console.log('sorted items by Folder first', sortedByFolder.items);
            console.log('equal?', Object.is(expectSortedObj, sortedByFolder.items ) );
            assert.equal(expectSortedObj, sortedByFolder.items);
        });
        expectSortedObj =  fileStruct.sortByProperty(folders.items); 
        it("Sorting by file, files goes firstly; next goes other properties  ", function () {
           assert.equal(expectSortedObj, sortedByFile.items);
        });
    });


      describe("Check return default array unchanged", function() {
    
        function shuffleAndCheckDefault(x) {
          it("Default array is unchanged after shuffle array", function() {
           
              console.log('\n step '+ x + ':'); 
              //shuffle sorted array      
              let arrToSort = defaultItems;
              folderStruct.processItems(arrToSort, null,  arrToSort.randomize);
              console.log('check default array after shuffle: ');
              assert.equal(defaultItems, defaultItems);
              sorting.displayItemsInObj(defaultItems); 
              
          });
        } 
         for (var x = 1; x < 3; x++) {
            shuffleAndCheckDefault(x);
         }
          
        function sortAndCheckDefault(x) {
          it("After array sort : default array is unchanged" , function() {           
              console.log('\n step '+ x + ':'); 
              //shuffle sorted array      
              let arrToSort = defaultItems; 
              folderStruct.sortByProperty(arrToSort);
              console.log('check default array after shuffle: ');
              assert.equal(defaultItems, defaultItems);
              sorting.displayItemsInObj(defaultItems); 
              
          });
        } 
         for (var x = 1; x < 3; x++) {
            sortAndCheckDefault(x);
         }
      });

    //teoreticaly shuffled array may be == sorted array by any property;
    // so: do not check if shuffled array !== sorted array
    //    describe("Shuffle array:  shuffled array Always !== default array", function() {
    //
    //    function makeTest(x) {
    //      it("If shuffle array, always return different array ", function() {
    //        assert.equal( );
    //      });
    //        
    //      it("Curent array !== default array ", function() {
    //            assert.equal( );
    //       });
    //    }
    //        
    //   for (var x = 0; x <= 5; x += 1) {
    //        makeTest(x);
    //   }
    //
    //  });

});