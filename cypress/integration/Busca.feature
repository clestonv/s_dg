#language: pt
Funcionalidade: Busca no DuckDuckGo

    Como usuário, desejo usar o DuckDuckGo 
    Para achar noticias sobre BitCoin

Cenario: Buscar digitando e usando ENTER
    Dado eu acesso DuckDuckGo
    E devo buscar "Biticoin" e usar "ENTER"
    Entao devo ter mais de "10" resultados

Cenario: Buscar digitando e usando LUPA
    Dado eu acesso DuckDuckGo
    E devo buscar "Biticoin" e usar "LUPA"
    Entao devo ter mais de "10" resultados

Cenario: Buscar digitando e usando FORMULARIO
    Dado eu acesso DuckDuckGo
    E devo buscar "Biticoin News" e usar "FORMULARIO"
    Entao devo ter mais de "10" resultados
