# Votos de Rogrido Branas - 
# GITHUB - rodrigobranas

# TESTE  de UNIDADE - Testar cada parte

1- Given = dado que (o cenario)

2- When  = quando adicionar alguns itens 

3 - Then = faca isso 

# SOLID

# 5 princípios

- flexível, menos rígido, menos frágil, mais fácil de manter e voluir

# 1 - SRP

Single Responsibility Principle

Separar coisas que MUDAM POR MOTIVOS DIFERENTES

Mover responsabilidades

# 2 - OCP

Open/Closed Principle

Devemos estar fechados para modificação e abertos para extensão

# 3 - Liskov Substitution Principle

Se S (Frescos, Conservas) é subclasse de T (Item), em um programa deve ser possível substituir instâncias de T (Item) por instâncias de S (Frescos, Conservas), SEM QUEBRAR O FUNCIONAMENTO DO PROGRAMA

- Pré-condições não podem ser fortalecidas

    Deixando de aceitar ENTRADAS que a superclasse considera válida

- Pós-condições não podem ser enfraquecidas

Aceitando saídas mais AMPLAS

- Invariantes devem se manter consistentes

Se uma subclasse permitir que o estado conceitual da hierarquia de classes fique inválido

# 4 - ISP

Interface Segregation Principle

Cuidado com interfaces MUITO ABRANGENTES, não obrigue subclasses a implementar métodos que elas não precisam
" criamos uma abstracao de TaxItem que as subclasses que vao calcular taxas irao extender"

# 5 - DIP

Dependency Inversion Principle

High-level modules should not depend on low-level modules
Both should depend on abstractions



