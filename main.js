var name_of_the_person_array = [];

function submit()
{
    var display_person_array = [];
    for (var j=1; j<=4; j++)
    {
        var name_of_the_person =document.getElementById("name_of_the_person_"+j).value;
        name_of_the_person_array.push(name_of_the_person);
    }
    var lenght_of_name_of_person_array = name_of_the_person_array.length;

    console.log(name_of_the_person_array.length);

    for (var k=0; k< length_of_name_of_person_array ; k++)
    {
        display_person_array.push("<h4>NAME-" + name_of_the_person_array[k]+"</h4>");
    }

    document.getElementById("display_name_with_commas").innerHTML=display_person_array;

    var remove_commas=display_person_array.join(" ");
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;

    document.getElementById("submit_button").style.display = "none"; 
    document.getElementById("sort_button").style.display = "inline-block";

 
}
function sorting() 
{ 
    name_of_the_person_array.sort(); 
    console.log(name_of_the_person_array); 
    var display_person_array_sorting = []; 
    var lenght_of_name_of_person_array = name_of_the_person_array.length; 
    console.log(lenght_of_name_of_person_array); 
    for (var k = 0; k < lenght_of_name_of_person_array; k++) 
    { 
        display_person_array_sorting.push("NAME- " + name_of_the_person_array[k] + "</h4>"); 
        console.log(display_person_array_sorting); 
    } 
    var remove_commas = display_person_array_sorting.join(" ");
     console.log(remove_commas); 
     document.getElementById("display_name_without_commas").innerHTML = remove_commas; 
    }