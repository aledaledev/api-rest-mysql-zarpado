import app from "./app.js";

const main = () => {
    app.listen(app.get('port'), () => {
        console.log(`server running on port ${app.get('port')}`);
    })
}
main()