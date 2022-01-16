let filter1 = document.querySelector('#filter1');

let list = document.getElementById('book-list');
let row = document.createElement('tr');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
    // DOM Load event

    // Filter tasks event
    filter1.addEventListener('keyup', filterTasks);

    document.querySelectorAll(".item").forEach(box =>
        box.addEventListener("click", (e) => getJson(e.target.name)));

}






/*function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
}
*/



function getJson(playlist) {

    list.innerHTML = "";
    fetch(`https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/rest-reviews-jowjb/service/puzser_drive_links/incoming_webhook/search?parent_folder=${playlist}`)
        .then(response => response.json())
        .then(response => {

            console.log(response);


            response.elements.forEach(function(book) {



                //const list = document.getElementById('book-list');
                // Create tr element
                let row = document.createElement('tr');




                // Insert cols
                row.innerHTML = `

<td>${book.getName}</td>
<td>${book.parent_folder}</td>
<td>${book.getMimeType}</td>
<td><a href="${book.getPreviewURL}" target="_blank" class="btn btn-primary btn-block mb-2">view_in_browser</a></td>
<td><a href="${book.getDownloadUrl}" target="_blank" class="btn btn-primary btn-block mb-2">DOWNLOAD</a></td>
      

      `;


                list.appendChild(row);

            });



        })
}






function filterTasks(e) {



    let text = e.target.value.toLowerCase();



    list.innerHTML = "";
    fetch(`https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/rest-reviews-jowjb/service/puzser_drive_links/incoming_webhook/search?getName=${text}`)
        .then(response => response.json())
        .then(response => {

            console.log(response);


            response.elements.forEach(function(book) {



                //const list = document.getElementById('book-list');
                // Create tr element
                let row = document.createElement('tr');




                // Insert cols
                row.innerHTML = `

<td>${book.getName}</td>
<td>${book.parent_folder}</td>
<td>${book.getMimeType}</td>
<td><a href="${book.getPreviewURL}" target="_blank" class="btn btn-primary btn-block mb-2">view_in_browser</a></td>
<td><a href="${book.getDownloadUrl}" target="_blank" class="btn btn-primary btn-block mb-2">DOWNLOAD</a></td>
      

      `;


                list.appendChild(row);

            });



        })
}
