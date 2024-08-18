export default async function Home(req,res){
    try {
        res.write("Hello world")
        res.end()
    } catch (error) {
         console.log(error);
            
    }
}
