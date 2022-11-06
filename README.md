# Sistema de Cadastro de Pessoas

Projeto feito durante os encontros remotos, referente a UC9, juntamente com o auxilio do professor Luiz Carlos Machi Lozano, onde se foi desenvolvido um Sistema que registra o cadastro de Pessoas Físicas e jurídicas conforme desafio da UC9.

# Funcionalidades 
Armazenamento de cadastro de Pessoa Físicas, com as seguintes informações:

Nome;<p>
CPF;<p>
Data de nascimento;<p>
Rendimento (calcula o imposto, baseado no valor do rendimento informado);<p>
Endereço (onde terá que indicar se o mesmo é comercial ou não);<p>
Sistema armazena registros em arquivos .txt.
Armazenamento de cadastro de Pessoa Jurídica, com as seguintes informações:


# Tecnologias utilizadas
.NET<p>
C#
# Sistema
Programa se inicia com a seguinte tela de Boas Vindas:

---------------------------------------
- Bem vindo ao Sistema de Cadastro de -
-   Pessoas Físicas e Jurídicas       -   
- -------------------------------------
Após carregamento ira abrir o menu principal

------------------------------------
- Escolha uma das opções a seguir: -
------------------------------------
-       1- Pessoa Física           -
-       2- Pessoa Jurídica         -
-       0- Sair                    -
- ----------------------------------
Após selecionar a opção desejada, irá abrir um submenu, caso a opção seja 0, após carregamento o sistema finaliza e se encerra.

Opção 1 - Menu Pessoa Física:

- Escolha uma das opções a seguir:  -
-------------------------------------
-     1- Cadastrar Pessoa Física    - 
-     2- Mostrar Pessoa Física      -
-     0- Sair                       -
-------------------------------------

Opção 2 - Menu Pessoa Jurídica:

- Escolha uma das opções a seguir:  -
-------------------------------------
-     1- Cadastrar Pessoa Jurídica  - 
-     2- Mostrar Pessoa Jurídica    -
-     0- Sair                       -
-------------------------------------

# Principais erros:
Ao digitar o CNPJ ele terá que ser no seguinte formato: "xxxxxxxx0001xx" ou xx,xxx,xxx/0001-xx;
Endereço Comercial só irá aceitar as seguintes respostas: 'SIM" ou "S", "NÃO" ou "N";
