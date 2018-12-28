function MedioAmbiente() {
    estrategias.forEach(function (element) {
        var item = $('<div class="col item ' + element.position + '" style="background:' + element.bgColor + '"></div>');
        var content = $('<h4 class="item__title">' + element.title + '</h4><p class="item__text">' + element.text + '</p><img src=' + element.srcImage + ' alt="' + element.title + '" class="item__img">');
        item.append(content);
        $('#estrategias-carousel').append(item);
    });
}

function CadenaValor() {
    proveedores.forEach(function (element) {
        var item = $('<div class="col item center ' + element.position + '" style="background:' + element.bgColor + '"></div>');
        var content = $('<div class="item__img" style="border: 4px solid ' + element.bgColor + ';"><img src=' + element.srcImage + ' alt="' + element.title + '"></div><h4 class="item__title">' + element.title + '</h4><p class="item__text">' + element.text + '</p>');
        item.append(content);
        $('#proveedores-carousel').append(item);
    });
}

function Reconocimientos() {
    reconocimientos.forEach(function (element) {
        var item = $('<div class="col item center ' + element.position + '"></div>');
        var content = $('<img src=' + element.srcImage + ' alt="' + element.title + '" class="item__img"><h4 class="item__title">' + element.title + '</h4><p class="item__text">' + element.text + '</p>');
        item.append(content);
        $('#reconocimientos-carousel').append(item);
    });
}