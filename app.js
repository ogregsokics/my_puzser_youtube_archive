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

    const str1 = obj1.getName.toLowerCase();
    const parsed1 = str1.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const str2 = obj2.getName.toLowerCase();
    const parsed2 = str2.normalize('NFD').replace(/[\u0300-\u036f]/g, '');


    if (parsed1 < parsed2) {
        return -1;
    }
    if (parsed1 > parsed2) {
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



/*function getJson(playlist) {

    list.innerHTML = "";
    fetch(`https://eu-central-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/rest-reviews-jowjb/service/puzser_drive_links/incoming_webhook/search?parent_folder=${playlist}`)
        .then(response => response.json())
        .then(response => {

            response.elements.sort(compare);

            response.elements.forEach(function(book) {


                let row = document.createElement('tr');

                row.innerHTML = `

                    <td>${book.getName}</td>
                    <td class="text-center">${book.parent_folder}</td>
                    <td class="text-center">${book.getMimeType}</td>
                    <td class="text-center"><a href="${book.getPreviewURL}" target="_blank" class="button">LEJÁTSZÁS</a></td>
                    <td class="text-center"><a href="${book.getDownloadUrl}" target="_blank" class="button">LETÖLTÉS</a></td>
    
                `;


                list.appendChild(row);

            });

        })
}*/





function filterTasks() {


    let text = filter1.value.toLowerCase();

    list.innerHTML = "";


    fetch("recent_links.json")
        .then(response => response.json())
        .then(data => {

            data.forEach(function(book) {




                if (book.getName.toLowerCase().indexOf(text) != -1) {

                  

                    let row = document.createElement('tr');


                    row.innerHTML = `

                    <td>${book.getName}</td>
                    <td class="text-center">${book.parent_folder}</td>
                    <td class="text-center">${book.getMimeType}</td>
                    <td class="text-center"><a href="${book.getPreviewURL}" target="_blank" class="button">LEJÁTSZÁS</a></td>
                    <td class="text-center"><a href="${book.getDownloadUrl}" target="_blank" class="button">LETÖLTÉS</a></td>

                `;


                    list.appendChild(row);


                }






            })

           

        })





}



function getJson(playlist) {


   

    list.innerHTML = "";


    fetch("recent_links.json")
        .then(response => response.json())
        .then(data => {

            data.forEach(function(book) {




               if (book.parent_folder == playlist) {

                  

                    let row = document.createElement('tr');


                    row.innerHTML = `

                    <td>${book.getName}</td>
                    <td class="text-center">${book.parent_folder}</td>
                    <td class="text-center">${book.getMimeType}</td>
                    <td class="text-center"><a href="${book.getPreviewURL}" target="_blank" class="button">LEJÁTSZÁS</a></td>
                    <td class="text-center"><a href="${book.getDownloadUrl}" target="_blank" class="button">LETÖLTÉS</a></td>

                `;


                    list.appendChild(row);


                }






            })

           

        })





}





// search in mongodb getname text 

/*function filterTasks() {


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
                    <td class="text-center">${book.parent_folder}</td>
                    <td class="text-center">${book.getMimeType}</td>
                    <td class="text-center"><a href="${book.getPreviewURL}" target="_blank" class="button">LEJÁTSZÁS</a></td>
                    <td class="text-center"><a href="${book.getDownloadUrl}" target="_blank" class="button">LETÖLTÉS</a></td>

                `;


                list.appendChild(row);

            });



        })
}*/
