function passwordType(element){
    const input = element.parentNode.children[0]

    if(input.type == "password"){
        input.type = "text"
    }else{
        input.type = "password"
    }
}