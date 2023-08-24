function funcaoPadrao(callback) {
    console.log('funcao Padrão');
    callback();
}

function dizOi (callback) {
    console.log('ola Gulp');
    dizTchau();
    callback();
}

function dizTchau () {
    console.log('diz tchau');
}

exports.default = funcaoPadrao;
exports.tarefaDizOi = dizOi;