export const reqFiltered = (req, res, next) => {
    if(!req.query.age){
        res.send("Please Enter Your Age..");
    } else if (req.query.age < 18){
        res.send("You are Adult... You can't Access this page ):");
    } else{
        next()
    }
}