describe("SortingStruct", function () {

       //define variables for testing
      let folders = {
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
        };
    
    
           let sortedByFolder =  {
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
            assert.equal(expectSortedObj, sortedByFolder.items);
        });
        expectSortedObj =  fileStruct.sortByProperty(folders.items); 
        it("Sorting by file, files goes firstly; next goes other properties  ", function () {
           assert.equal(expectSortedObj, sortedByFile.items);
        });
    });


    //  describe("Check return default array unchanged", function() {
    //
    //    function makeTest(x) {
    //      it("Always returns default array unchanged", function() {
    //        assert.equal( );
    //      });
    //    } 
    //
    //  });

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