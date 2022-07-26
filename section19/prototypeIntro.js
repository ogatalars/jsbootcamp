// // Protótipos são o mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros.
// // O JavaScript é frequentemente descrito como uma linguagem baseada em protótipos — para fornecer herança, os objetos podem ter um objeto de protótipo, que atua como um objeto de modelo do qual herda métodos e propriedades. O objeto de protótipo de um objeto também pode ter um objeto de protótipo, do qual herda métodos e propriedades, e assim por diante. Isso geralmente é chamado de cadeia de protótipos e explica por que objetos diferentes têm propriedades e métodos definidos em outros objetos disponíveis para eles.

// Bem, para ser exato, as propriedades e os métodos são definidos na propriedade prototype nas funções construtoras dos Objetos, não nas próprias instâncias do objeto.

// Em JavaScript, é feito um link entre a instância do objeto e seu protótipo (sua propriedade  __proto__, que é derivada da propriedade prototype no construtor), e as propriedades e os métodos são encontrados percorrendo a cadeia de protótipos.

String.prototype.grumpus = () => {
  alert("Go AWAY");
};

const cat = "BLUE ";
cat.grumpus();
String.prototype.yell = function () {
  console.log(this);
};

"hello".yell(); // "hello" refere to this in the function

Array.prototype.pop = function () {
  return "Sorry, i want that element";
};

const dog = "Izzy";
dog._proto_.pop(); // "Sorry, i want that element"
