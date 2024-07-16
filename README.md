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
