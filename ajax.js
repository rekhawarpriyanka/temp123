
<script>

    function run() {
   
        var xhr = new XMLHttpRequest();
  
        var url = 'https://jsonplaceholder.typicode.com/todos/1';
        xhr.open("GET", url, true);
  
   
        xhr.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(this.responseText);
            }
        }
         
        xhr.send();
    }
    run();
</script>