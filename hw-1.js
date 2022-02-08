const folders = [
    {
      id: 5,
      name: 'Klasör 1',
      files: [
        { id: 17, name: 'profil.jpg' },
        { id: 18, name: 'manzara.jpg'},
      ],
    },
    {
      id: 6,
      name: 'Klasör 2',
      files: [
        { id: 21, name: 'foto.png' },
        { id: 22, name: 'dosya.xls' },
      ],
    },
    {
      id: 7,
      name: 'Klasör 3',
      files: [],
    },
  ]




/*
  move(17,6) // dosyayı klasöre taşıyacak
  copy(18,7) // kopyasını oluşturacak
  remove(17) // dosyayı silecek
  removeFolder(6) //klasörü ve altındaki tüm dosyaları silecek
  parentFolderOf(17) // ==> 5
*/

/* Function holds another arrays information and
 if we need information about other arrays, function prodives us. */
const folderIDs = []
const allfiles = []
const filecheck = function () {
    for (var i =0; i < folders.length; i++) {
        folderIDs.push(folders[i].id)
    }
    for (var t=0; t < folderIDs.length; t++) {
        try {
            if (folders[t].files.length > 0) {
                for (var y=0; y < folders[t].files.length; y++) {
                        allfiles.push(folders[t].files[y].id)
        
                }
            }
            else {
                //pass
            }
        }
        catch {
            //pass
        }
        
    }
}
/* Function moves items which we wrotes file ID as moveID to target folder ID which we wrote as targetFolderID. */
const move = function (moveID,targetFolderID){
    if (typeof moveID === 'number') {
        filecheck()
        if (Array.prototype.includes.call(folderIDs,targetFolderID)) {
            
            if (Array.prototype.includes.call(allfiles,moveID)) {
                
               for (var z=0; z < folderIDs.length; z++) {
                   try {
                        for (var w=0; w < folders[z].files.length; w++) {
                            if (folders[z].files[w].id === moveID) {
                                const moveIDlocation = folders[z].files[w]
                                for (var r=0; r < folderIDs.length; r++) {
                                    if (folders[r].id === targetFolderID) {
                                        const targetFolderIndex = r
                                        folders[targetFolderIndex].files.push(moveIDlocation)
                                        folders[z].files.splice(w,1)
                                    }
                                    else {
                                        //pass
                                    }
                                }
                            }
                            else {
                                //pass
                            }
                        }
                    }
                    catch {
                        console.log("files folder not found.")
                    }
               }
            
                
            }
            else {
                console.log("file no exist.")
            }
    
        }
        else {
            console.log("There is no folder as you want.")

        }
    }
    else {
        console.log("input is not a number. try again.")

    }
    console.log("Klasör 1 ==> ",folders[0].files)
    console.log("Klasör 2 ==> ",folders[1].files)
    console.log("Klasör 3 ==> ",folders[2].files)

    
}


/* Function copy files to where we want to move files. First input is which
 file moves and second input is new folder location. */
const copy = function (copyID,targetFolderID) {
    if (typeof copyID === 'number') {
        filecheck()
        if (Array.prototype.includes.call(folderIDs,targetFolderID)) {
            if (Array.prototype.includes.call(allfiles,copyID)) {
               for (var z=0; z < folderIDs.length; z++) {
                   try {
                        for (var w=0; w < folders[z].files.length; w++) {
                            if (folders[z].files[w].id === copyID) {
                                const copyIDlocation = folders[z].files[w]
                                for (var r=0; r < folderIDs.length; r++) {
                                    if (folders[r].id === targetFolderID) {
                                        const targetFolderIndex = r
                                        const countfiles = allfiles.length
                                        const sortfiles = allfiles.sort();
                                        const newconnectnumber = (sortfiles[countfiles-1])+1
                                        const newconnectname = folders[z].files[w].name
                                        const newconnect = [{id: newconnectnumber,name: newconnectname}]
                                        folders[targetFolderIndex].files.push(newconnect[0])
                                        console.log("Klasör 1 ==> ",folders[0].files)
                                        console.log("Klasör 2 ==> ",folders[1].files)
                                        console.log("Klasör 3 ==> ",folders[2].files)
                                    }
                                    else {
                                        //pass
                                    }
                                }
                            }
                            else {
                                //pass
                            }
                        }
                    }
                    catch {
                        console.log("files folder not found.")
                    }
               }
                
            }
            else {
                console.log("file no exist.")
            }
        }
        else {
            console.log("There is no folder as you want.")

        }
    }
    else {
        console.log("input is not a number. try again.")
    }
}

/* Function removes file which we want. Searches all folders,
 if function finds equal ID number to input ID, removes file. */
const remove = function (removeID){
    if (typeof removeID === 'number') {
        filecheck()
        if (Array.prototype.includes.call(allfiles,removeID)) {
            for (var z=0; z < folderIDs.length; z++) {
                try {
                    for (var w=0; w < folders[z].files.length; w++) {
                        if (folders[z].files[w].id === removeID) {
                            folders[z].files.splice(w,1)
                            console.log("Klasör 1 ==> ",folders[0].files)
                            console.log("Klasör 2 ==> ",folders[1].files)
                            console.log("Klasör 3 ==> ",folders[2].files)

                        }
                        else {
                            //pass
                        }
                    }
                }
                catch {
                    console.log("files folder not found.")
                }
            }
        
            
        }
        else {
            console.log("There is no files as you want.")
        }
    
    }
    else {
        console.log("input is not a number. try again.")

    }
    
}

/* If function finds equal folder as your input ID, removes all files under ID. */
const removeFolder = function (removeFolderID) {
    if (typeof removeFolderID === 'number') {
        filecheck()
        if (Array.prototype.includes.call(folderIDs,removeFolderID)) {
            for (var z=0; z < folderIDs.length; z++) {
                try {
                    if (folders[z].id === removeFolderID) {
                        const sil = function(deger) {
                            folders.splice(deger,1)
                        
                        }
                        sil(z)
                        console.log(folders)
                    }
                    else {
                        //pass
                    }
                }
                catch {
                    //pass
                }
            }
        }
        else {
            console.log("There is no files as you want.")
        }
    }
    else {
        console.log("input is not a number. try again.")
    }
}
/* Function returns folder ID. */
const parentFolderOf = function (filesID) {
    if (typeof filesID === 'number') {
        filecheck()
        if (Array.prototype.includes.call(allfiles,filesID)) {
            for (var z=0; z < folderIDs.length; z++) {
                try {
                    for (var w=0; w < folders[z].files.length; w++) {
                        if (folders[z].files[w].id === filesID) {
                            console.log(folders[z].id)
                        }
                        else {
                            //pass
                        }
                    }
                }
                catch {
                    console.log("files folder not found.")
                }
            }
        
            
        }
        else {
            console.log("There is no files as you want.")
        }
    
    }
    else {
        console.log("input is not a number. try again.")

    }
    
}

