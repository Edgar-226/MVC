module.exports = async (app) => {
    app.get('/login', async (req, res) => {
        
        res.send("Hola login")
    });
};