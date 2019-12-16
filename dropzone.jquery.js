; (function ($) {
  $(document).ready(function () {

    var dropzone = $("#dropzone")

    function upload(files) {

      var formData = new FormData();

      for (const file of files) {
        formData.append("thumbnail[]", file);
      }

      // Using Fetch Api You can upload the files
      fetch("upload.php", { method: "post", body: formData }).catch(console.error);

      // Using Ajax api you can also upload the files
      $.ajax({
        url: "upload.php",
        type: "post",
        processData: false,
        contentType: false,
        data: formData,
        success: function (res) {
          console.log(res);
        },
        error: function (err) {
          console.log(err)
        }
      });

    }


    dropzone.on("dragover", function (e) {
      e.preventDefault();
      $(this).addClass("dragover");
      return false;
    })

    dropzone.on("drop", function (e) {
      e.preventDefault();
      $(this).removeClass("dragover");
      upload(e.originalEvent.dataTransfer.files);
      return false;
    })


    dropzone.on("dragleave", function (e) {
      e.preventDefault();
      $(this).removeClass("dragover");
      return false;
    })

  })
}(jQuery))