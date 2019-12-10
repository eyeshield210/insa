function pair(nombre) {
    if (!(Number.isInteger(nombre))){
        throw new Error("You must enter an integer number");
    }
    if (nombre % 2 == 0){
        return true
    }
    return false;
}
