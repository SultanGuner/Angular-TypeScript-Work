var http = require('http');
var formidable = require('formidable');

var server = http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");//origin izni
    res.setHeader("Access-Control-Allow-Headers", "Origin,Content-Type,Accept,X-Request-With");//header izni
    console.log(req.method);
    //req.method = "GET";
    if (req.method.toLowerCase() == "get") {//get durumda çalışacak
        var data = {
            data: {
                languages: [
                    'İngilizce',
                    'Türkçe',
                    'Almanca',
                    'İspanyolca',
                    'İtalyanca',
                    'Fransızca',
                    'Diğer']
            }
        }
        var responseData = JSON.stringify(data);//gönderilecek data json ediliyor.
        res.end(responseData);
        console.log('Gönderilen : ' + responseData);
        return;
    }
    processForm(req, res);//post durumundda çalışacak
});
//data oluşturma
function processForm(req, res) {
    var form = new formidable.IncomingForm();//formidable denen formu alıyor
    form.parse(req, function (err, fields) {
        fields.id = 1;
        res.writeHead(200, { 'Content-Type': 'text/plain' });//(200 izin gibi)başlığına okey demek
        var data = JSON.stringify({ data: fields });//stringfy olarak dataya fieldları atamak
        res.end(data);//gelen req data ile karşılık veriliyor.
        console.log('gelen Paket:\n');
        console.log(data);
    })
}
//datayı dinleme
var port = 1453;
server.listen(port);
console.log("Server : " + port + " portundan dinlemeye başlamıştır..");