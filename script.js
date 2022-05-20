//------------------------------------------------------------------------------------//
//                              DECLARAÇÃO DE VARIÁVEIS                               //
//------------------------------------------------------------------------------------//
let canvas = document.getElementById("snake"); // CHAMA | ENVIA A ID NO HTML. | (obs: observação própria).
let context = canvas.getContext("2d"); // DEFINE A DIMENSÃO DA TELA.
let box = 32; // DEFINE O TAMANHO DOS PIXELS DA TELA.
let snake = []; // CRIA A ARRAY RESPONSÁVEL PELA COBRINHA.
let direction = "right"; // DEFINE A DIREÇÃO INICIAL DA COBRINHA.
//------------------------------------------------------------------------------------//
    snake[0] = { x: 8 * box, y: 8 * box }; // DEFINE O TAMANHO DA COBRINHA.
    let food = { // CRIA A ARRAY RESPONSÁVEL PELA COMIDA.
        x: Math.floor(Math.random() * 15 + 1) * box, 
        y: Math.floor(Math.random() * 15 + 1) * box
    }; 
//------------------------------------------------------------------------------------//
//                               ESTRUTURA DO SCRIPT                                  //
//------------------------------------------------------------------------------------//
    // CRIA O BACKGROUND.
    function criarBG() {
        context.fillStyle = "lightgreen";
        context.fillRect(0, 0, 16 * box, 16 * box);
    }
    // CRIA O QUADRADINHO REFERENTE A COBRINHA.
    function criarCobrinha() {
        for (i = 0; i < snake.length; i++) {
            context.fillStyle = "green";
            context.fillRect(snake[i].x, snake[i].y, box, box);
        }
    }
    // CRIA A COMIDA DA COBRINHA.
    function drawFood() {
        context.fillStyle = "red";
        context.fillRect(food.x, food.y, box, box);        
    }

    // DETECTA AS TECLAS DE SETAS.
    document.addEventListener("keydown", update);
    function update(event) {
        if (event.keyCode == 37 && direction != "right") {direction = "left"};
        if (event.keyCode == 38 && direction != "down") {direction = "up"};
        if (event.keyCode == 39 && direction != "left") {direction = "right"};
        if (event.keyCode == 40 && direction != "up") {direction = "down"};
    }
//------------------------------------------------------------------------------------//
//                                     SAÍDA                                          //
//------------------------------------------------------------------------------------//
    // DEFINE E CHAMA AS OUTRAS FUNÇÕES PRO JOGO FUNCIONAR.
    function iniciarJogo() {
        // DEFINE O LIMITE DA TELA, SE ULTRAPASSAR, VOLTA PELO OUTRO LADO.
        if(snake[0].x > 15 * box && direction == "right") { snake[0].x = 0};
        if(snake[0].x < 0 * box && direction == "left") { snake[0].x = 16 * box};
        if(snake[0].y > 15 * box && direction == "down") { snake[0].y = 0};
        if(snake[0].y < 0 * box && direction == "up") { snake[0].y = 16 * box};

        criarBG();
        criarCobrinha();
        drawFood();
        // PEGA AS POSIÇÕES | TAMANHO DA COBRINHA.
        let snakeX = snake[0].x;
        let snakeY = snake[0].y;

        // DEFINE AS DIREÇÕES DA COBRINHA.
        if (direction == "right") { snakeX += box; };
        if (direction == "left") { snakeX -= box; };
        if (direction == "up") { snakeY -= box; };
        if (direction == "down") { snakeY += box; };

        snake.pop(); // REMOVE UM ELEMENTO DE DENTRO DA ARRAY. | (obs: observação própria).

        let newHead = { x: snakeX, y: snakeY }; // RECRIA A COBRINHA NOVAMENTE. | (obs: observação própria).

        snake.unshift(newHead); // ADICIONA NOVAMENTE UM ELEMENTO DENTRO DA ARRAY. | (obs: observação própria).
    }
//------------------------------------------------------------------------------------//
// CHAMA A FUNÇÃO.
let jogo = setInterval(iniciarJogo, 100);
//------------------------------------------------------------------------------------//