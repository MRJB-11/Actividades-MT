lista = ["Tomate", "Papa", "Tomate", "Cebolla", "Tomate", "Zanahoria"]
contador = 0
for palabra in lista:
    if palabra == "Tomate":
        contador += 1
print("Tomate aparece", contador, "veces")