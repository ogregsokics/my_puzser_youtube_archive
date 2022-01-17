let btn = document.querySelector('#search_btn');
let filter1 = document.querySelector('#filter1');
let list = document.getElementById('book-list');
let row = document.createElement('tr');


loadEventListeners();


function loadEventListeners() {


    filter1.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            filterTasks();
        }
    });

    btn.addEventListener('click', filterTasks);

    document.querySelectorAll(".item").forEach(box =>
        box.addEventListener("click", (e) => getJson(e.target.name)));

}


let compare = (obj1, obj2) => {

    if (obj1.getName < obj2.getName) {
        return -1;
    }
    if (obj1.getName > obj2.getName) {
        return 1;
    }
    return 0;
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

            response.elements.sort(compare);

            response.elements.forEach(function(book) {


                let row = document.createElement('tr');

                row.innerHTML = `

<td>${book.getName}</td>
<td>${book.parent_folder}</td>
<td>${book.getMimeType}</td>
<td><a href="${book.getPreviewURL}" target="_blank" class="button">LEJÁTSZÁS</a></td>
<td><a href="${book.getDownloadUrl}" target="_blank" class="button">LETÖLTÉS</a></td>
      

      `;


                list.appendChild(row);

            });

        })
}



function filterTasks() {


    let text = filter1.value.toLowerCase();

    list.innerHTML = "";
    fetch(`https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/rest-reviews-jowjb/service/puzser_drive_links/incoming_webhook/search?getName=${text}`)
        .then(response => response.json())
        .then(response => {

            console.log(response);

            if (response.elements.length === 0) {


                let row = document.createElement('tr');

                row.innerHTML = `<td>NINCS TALÁLAT</td>`;


                list.appendChild(row);


            }


            response.elements.sort(compare);

            response.elements.forEach(function(book) {


                let row = document.createElement('tr');


                row.innerHTML = `

<td>${book.getName}</td>
<td>${book.parent_folder}</td>
<td>${book.getMimeType}</td>
<td><a href="${book.getPreviewURL}" target="_blank" class="button">LEJÁTSZÁS</a></td>
<td><a href="${book.getDownloadUrl}" target="_blank" class="button">LETÖLTÉS</a></td>
      

      `;


                list.appendChild(row);

            });



        })
}