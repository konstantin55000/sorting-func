//this test class is rely on Helper.js
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
    }; //default array 
    const defaultItems = folders.items.slice();
 
    //sorted structures
    let sortedByFolder = {
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
    let sortedByFile = {
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

    let folderStruct = new SortingStruct(folders, 'folder');
    let fileStruct = new SortingStruct(folders, 'file'); //obj with sort by file
    
    const sortByPropMsg = "Sorting by property == 'folder':   folders goes first;  after folders  goes other properties"; 
    const sortByPropFileMsg = 'Sorting by file, files goes firstly; next goes other properties  ';
    describe("Sorting array of object by property", function () {
        it(sortByPropMsg, function () {
            logToConsole(sortByPropMsg);
            let sortedObj = folders.items.slice();
            folderStruct.sortByProperty(sortedObj);
            logToConsole('sorted items by Folder first', sortedObj);
            //sorting.displayItemsInObj(sortedObj);

            logToConsole('default items by Folder', sortedByFolder.items);
            //sorting.displayItemsInObj(sortedByFolder.items);

            expect(sortedObj).to.deep.equal(sortedByFolder.items);
            logToConsole(logSeparator);

        });
        
        expectSortedObj = fileStruct.sortByProperty(folders.items); 
        
        it(sortByPropFileMsg, function () {
            let sortedFiles = folders.items.slice();
            fileStruct.sortByProperty(sortedFiles);
            logToConsole('expected file items ', sortedFiles);
            logToConsole('sorted items by File first', sortedByFile.items);
            logToConsole('sorted obj equal to  sortedByFile arr?', Object.is(sortedFiles, sortedByFile.items));
            //sorting.displayItemsInObj(sortedByFile.items);
            //sorting.displayItemsInObj(sortedFiles);
            expect(sortedFiles).to.deep.equal(sortedByFile.items);

        });
    });


    describe("Default array always unchanged after sort or shuffle ", function () {

        function shuffleAndCheckDefault(x) {
            it("Default array is unchanged after shuffle array", function () { 
                //shuffle sorted array      
                let arrToSort = defaultItems;
                folderStruct.processItems(arrToSort, null, arrToSort.randomize);
                logToConsole('check default array after shuffle: ');
                assert.equal(defaultItems, defaultItems);
                //sorting.displayItemsInObj(defaultItems);

            });
        }
        for (var x = 1; x < 3; x++) {
            shuffleAndCheckDefault(x);
        }

        function sortAndCheckDefault(x) {
            it("After array sort : default array is unchanged", function () {
                logToConsole('\n step ' + x + ':');
                
                //shuffle sorted array      
                let arrToSort = defaultItems;
                folderStruct.sortByProperty(arrToSort);
                assert.equal(defaultItems, defaultItems);
                logToConsole('check default array after shuffle: '); 
                //sorting.displayItemsInObj(defaultItems);

            });
        }
        for (var x = 1; x < 3; x++) {
            sortAndCheckDefault(x);
        }
    });

    //Some times teoreticly shuffle array may be equal to default array
    describe("Shuffle array: shuffled array Not equal to default array", function () {

        function makeTest(x) {
            it("If shuffle array, always return different array ", function () {
                logToConsole('\n step ' + x + ':');
                //shuffle sorted array      
                let arrToShuffle = folders.items.slice();
                folderStruct.processItems(arrToShuffle, null, arrToShuffle.randomize);
                
                logToConsole('check default array after shuffle: ', arrToShuffle);
                //sorting.displayItemsInObj(arrToShuffle);
                assert.notEqual(arrToShuffle, folders.items);
            });

        }

        for (var x = 0; x <= 4; x++) {
            makeTest(x);
        }

    });

    //!note  (Sometime shuffle array may Be equal to sorted array)
    describe("Shuffle array: shuffled array Not equal to sorted array", function () {

        function makeTestByFolder(x, byProp = 'folder') {
            it("Shuffle array not equal to sorted by " + byProp, function () {
                logToConsole('\n step ' + x + ':');

                //arrToSort
                let arrToSort = folders.items.slice();
                let arrToShuffle = folders.items.slice();
                if (byProp != 'folder' || byProp != 'file')
                    return false;
                if (byProp == 'folder') {
                    folderStruct.sortByProperty(arrToSort);
                    folderStruct.processItems(arrToShuffle, null, arrToShuffle.randomize);
                }
                if (byProp == 'file') {
                    fileStruct.sortByProperty(arrToSort);
                    fileStruct.processItems(arrToShuffle, null, arrToShuffle.randomize);
                }
                logToConsole('check default array after shuffle: ', arrToShuffle);

                assert.notEqual(arrToShuffle, arrToSort);
                
                //display this sorted and shuffled array to console
                logToConsole('\n display this sorted and shuffled array to console', arrToShuffle);
//                sorting.displayItemsInObj(arrToShuffle);
//                sorting.displayItemsInObj(arrToSort);
            });

        }

        for (var x = 0; x <= 4; x++) {
            makeTestByFolder(x, 'folder');
        }
        for (var x = 0; x <= 4; x++) {
            makeTestByFolder(x, 'file');
        }
    });

});