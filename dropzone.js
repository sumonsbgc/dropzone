(function () {

    var dropzone = document.getElementById('dropzone');

    /* 
    Events are 
    
    1) drag
    2) dragend
    3) dragenter
    4) dragleave
    5) dragover
    6) dragstart

    7) drop    
    */

    // dropzone.ondragover = function () {
    //     this.classList('dragover')

    //     console.log(this)
    //     return false;
    // }



    function upload(files) {
        var formData = new FormData();

        for (const file of files) {
            formData.append("thumbnail[]", file);
        }

        for (const [key, value] of formData) {
            console.log(`${key} => ${value}`);
        }

        fetch("./upload.php", { method: "post", body: formData })
            .then(body => {
                return body.json();
            })
            .then(jsonBody => {
                console.log(JSON.stringify(jsonBody, null, 2));
            })
            .catch(console.error)
    }

    dropzone.addEventListener("drop", function (e) {
        e.preventDefault();
        this.classList.remove('dragover');
        upload(e.dataTransfer.files);
        return false;
    });

    dropzone.addEventListener("dragover", function (e) {
        e.preventDefault();
        this.classList.add('dragover');
        return false;
    });

    dropzone.addEventListener("dragleave", function (e) {
        e.preventDefault();
        this.classList.remove('dragover');
        return false;
    });





}());