lista = ["Tomate", "Papa", "Tomate", "Cebolla", "Tomate", "Zanahoria"]
contador = 0
for palabra in lista:
    if palabra == "Tomate":
        contador += 1
print("Tomate aparece", contador, "veces")

print("La lista tiene", len(lista), "elementos")
lista_sin_repetidos = list(set(lista))
print("La lista sin repetidos es:", lista_sin_repetidos)
print("La lista ordenada es:", sorted(lista_sin_repetidos))
