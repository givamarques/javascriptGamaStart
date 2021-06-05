//variavel 'nome' recebe uma string
var nome = 'Givaldo';
//o bloco condicional inicia com o switch e encerra com o break
switch (nome) {
//o 'case' seria o caso de teste (if)
case 'Givaldo':
    console.log('seu nome é Givaldo!');
    break;
//o novo 'case' seria o else ou else if
case 'Giva':
    console.log('Vocẽ não é o Givaldo...');
    break;
//o switch é ideal para se utilizar nos casos em que hajam muitos cases a serem testados
case 'Gilvaldo':
    console.log('Vocẽ não é o Givaldo...');
    break;
}