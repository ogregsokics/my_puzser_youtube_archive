let filter1 = document.querySelector('#filter1');
let filter2 = document.querySelector('#filter2');
let list = document.getElementById('book-list');
let row = document.createElement('tr');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // DOM Load event

    // Filter tasks event
    filter1.addEventListener('keyup', filterTasks);
    filter2.addEventListener('keyup', filterTasks);
}



document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getpics);




function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}





// Get local json data
function getJson() {


    fetch('videos.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {

            list.innerHTML = '';
            // console.log(data);
            // let output = '';
            data.forEach(function(book) {



                //const list = document.getElementById('book-list');
                // Create tr element
                let row = document.createElement('tr');




                // Insert cols
                row.innerHTML = `
      <td>${book.sorszam}</td>
      <td>${book.getName}</td>
      <td>${book.getMimeType}</td>
      <td>${bytesToSize(book.getSize)}</td>
      
      <td><a href="${book.getUrl}" target="_blank" class="btn btn-primary btn-block mb-2">view_in_browser</a></td>
      <td><a href="${book.getDownloadUrl}" target="_blank" class="btn btn-primary btn-block mb-2">DOWNLOAD</a></td>
  
    `;

                list.appendChild(row);



                //  output += `<li>${post.title}</li>`;




            });
            //  document.getElementById('output').innerHTML = output;








        })
        .catch(function(err) {
            console.log(err);
        });
}




// Get local json data
function getpics() {


    fetch('pics.json')
        .then(function(res) {
            return res.json();
        })
        .then(function(data) {

            list.innerHTML = '';
            //console.log(data);
            // let output = '';
            data.forEach(function(book) {



                //const list = document.getElementById('book-list');
                // Create tr element
                let row = document.createElement('tr');




                // Insert cols
                row.innerHTML = `
      <td>${book.name}</td>
      
      
      
      <td><a href="https://tj3hx8tlwzbfakvcigtytg-on.drv.tw/images_desc/thumbnails_descr/${encodeURIComponent(book.name)}" target="_blank" class="btn btn-primary btn-block mb-2">DOWNLOAD</a></td>
  
    `;

                list.appendChild(row);



                //  output += `<li>${post.title}</li>`;




            });
            //  document.getElementById('output').innerHTML = output;








        })
        .catch(function(err) {
            console.log(err);
        });
}















function filterTasks(e) {



    let text = e.target.value.toLowerCase();

    //console.log(e.target.id);

    if (e.target.id == "filter1") {



        fetch('videos.json')
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {


                //console.log(data);
                list.innerHTML = '';


                data.forEach(function(book) {


                    // if (text == "") {

                    //    getJson();
                    //    } 



                    if (book.getName.toLowerCase().indexOf(text) != -1) {

                        //  console.log(book.name);


                        // Create tr element
                        let row = document.createElement('tr');



                        // Insert cols
                        row.innerHTML = `
      <td>${book.sorszam}</td>
      <td>${book.getName}</td>
      <td>${book.getMimeType}</td>
      <td>${bytesToSize(book.getSize)}</td>
      
      <td><a href="${book.getUrl}" target="_blank" class="btn btn-primary btn-block mb-2">view_in_browser</a></td>
      <td><a href="${book.getDownloadUrl}" target="_blank" class="btn btn-primary btn-block mb-2">DOWNLOAD</a></td>
  
    `;

                        list.appendChild(row);


                    }



                    //  output += `<li>${post.title}</li>`;




                });
                //  document.getElementById('output').innerHTML = output;



            })
            .catch(function(err) {
                console.log(err);
            });




    }


    if (e.target.id == "filter2") {

        fetch('pics.json')
            .then(function(res) {
                return res.json();
            })
            .then(function(data) {

                list.innerHTML = '';
                //console.log(data);
                // let output = '';
                data.forEach(function(book) {

                    if (book.name.toLowerCase().indexOf(text) != -1) {

                        //  console.log(book.name);


                        // Create tr element
                        let row = document.createElement('tr');




                        // Insert cols
                        row.innerHTML = `
      <td>${book.name}</td>
      
     
      
      <td><a href="https://tj3hx8tlwzbfakvcigtytg-on.drv.tw/images_desc/thumbnails_descr/${encodeURIComponent(book.name)}" target="_blank" class="btn btn-primary btn-block mb-2">DOWNLOAD</a></td>
  
    `;

                        list.appendChild(row);

                    }



                    //const list = document.getElementById('book-list');
                    // Create tr element




                    //  output += `<li>${post.title}</li>`;




                });
                //  document.getElementById('output').innerHTML = output;








            })
            .catch(function(err) {
                console.log(err);
            });





    }
}