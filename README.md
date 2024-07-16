# PagoCompartido
Realiza un calculo para conocer el pago de cada apartamento o casa en un determinado servicio compartido.

# Calculo
La distribución del costo compartido se realiza de acuerdo a la siguiente fórmula:

![formula](https://latex.codecogs.com/gif.latex?C_i%20%3D%20%5Cfrac%7BC_T%20%5Ccdot%20H_i%7D%7B%5Csum_%7Bj%3D1%7D%5E%7Bn%7D%20H_j%7D)

Donde:
- C_i es el costo para el apartamento i
- C_T es el costo total del agua
- H_i es el número de habitantes en el apartamento i
- n es el número total de apartamentos
- ∑H_j es la suma total de habitantes en todos los apartamentos

Esta fórmula asegura una distribución justa del costo total del agua basada en el número de habitantes en cada apartamento.

# Ejemplo

Vamos a calcular el costo del agua para un apartamento específico utilizando la fórmula:

Datos del ejemplo:
- Costo total del agua (C_T): $260,000
- Número de habitantes en el apartamento i (H_i): 3
- Número total de apartamentos: 4
- Suma total de habitantes en todos los apartamentos (∑H_j): 19

Pasos para el cálculo:

1. Identificamos los valores en nuestra fórmula:
   - C_T = $260,000
   - H_i = 3
   - ∑H_j = 19

2. Sustituimos estos valores en la fórmula:
   C_i = (260,000 × 3) ÷ 19

3. Realizamos la multiplicación en el numerador:
   C_i = 780,000 ÷ 19

4. Realizamos la división:
   C_i = 41,052.63

5. Redondeamos a dos decimales para obtener un valor en pesos y centavos:
   C_i = $41,052.63

Por lo tanto, el costo del agua para el apartamento i, que tiene 3 habitantes, es de $41,052.63.

Nota: Este cálculo se repite para cada apartamento, cambiando el valor de H_i según el número de habitantes en cada uno. La suma de los costos de todos los apartamentos debe ser igual al costo total del agua ($260,000).
