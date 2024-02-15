function beforeSubmit(){
    let outputdate =document.querySelector(".outputdate");
    let inputdate=document.querySelector(".inputdate");
    console.log(inputdate.value);//its in string form --> date(en_IN)
    let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN");
    outputdate.value=formatteddate;
}