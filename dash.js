const update_prof = document.getElementById("update_prof");
update_prof.addEventListener("click", function(){
    const first_name = document.getElementById("first_name").value;
    const last_name = document.getElementById("last_name").value;

    console.log(first_name+" "+last_name);
})