#language: pt
Funcionalidade: Busca no DuckDuckGo

    Como usuário, desejo usar o DuckDuckGo 
    Para achar noticias sobre BitCoin

Esquema do Cenario: Buscar digitando e usando <operacao>
    Dado eu acesso DuckDuckGo
    E devo buscar "<palavra>" e usar "<operacao>"
    Entao devo ter mais de "<quantidade>" resultados

    Exemplos: 
    | operacao        | palavra     | quantidade |
    | ENTER           | BitCoin     | 10         |
    | LUPA            | BitCoin     | 10         |
    | FORMULARIO      | BitCoin new | 10         |