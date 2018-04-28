addEventListener("load", function() {

    var div = document.getElementById("content");
    div.innerHTML = "Loading metadata...";

    var on_meta_load = function(meta) {

        // Get authors and max/min date
        var authors = new Set();
        var minTime = (new Date()).getTime();
        var maxTime = 0;
        Object.keys(meta).forEach(function(key) {
            var imageMeta = meta[key];
            authors.add(imageMeta['author']);
            if (meta['time'] > maxTime) {
                maxTime = meta['time'];
            }
            if (meta['time'] < minTime) {
                minTime = meta['time'];
            }

            var imageDiv = document.createElement('div');
            imageDiv.setAttribute('class', 'box');
            var image = document.createElement('img');
            image.setAttribute('src', 'images/' + key);
            image.setAttribute('alt', imageMeta['caption']);
            var date = document.createElement('p');
            date.innerHTML = new Date(imageMeta['time']);
            var author = document.createElement('p');
            author.innerHTML = "Taken by " + imageMeta['author'];
            var caption = document.createElement('p');
            caption.innerHTML = imageMeta['caption'];

            imageDiv.appendChild(image);
            imageDiv.appendChild(date);
            imageDiv.appendChild(author);
            imageDiv.appendChild(caption);

            div.appendChild(imageDiv);
        });
        // div.innerHTML = Array.from(authors);
    };

    var load_json = function() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "meta.json", true);
        xhr.responseType = "json";
        xhr.onload = function() {
            var status = xhr.status;
            if (status === 200) {
                div.innerHTML = "";
                on_meta_load(xhr.response);
            } else {
                div.innerHTML = "Failed to load metadata: "+status;
            }
        };

        xhr.send();
    }

    load_json();

});
