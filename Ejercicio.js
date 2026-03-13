import java.util.ArrayList;
import java.util.Scanner;

public class SistemaRegistroPedido {

    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        
        // Declaración de las listas para cumplir con el requisito
        ArrayList<String> productos = new ArrayList<>();
        ArrayList<Double> precios = new ArrayList<>();

        System.out.println("--- REGISTRO DE PEDIDO ---");

        System.out.print("Nombre del cliente: ");
        String cliente = teclado.nextLine();

        // Registro del primer producto
        System.out.print("Producto 1: ");
        productos.add(teclado.nextLine());
        System.out.print("Precio 1: Q");
        precios.add(teclado.nextDouble());
        teclado.nextLine(); // Limpieza de buffer

        // Registro del segundo producto
        System.out.print("Producto 2: ");
        productos.add(teclado.nextLine());
        System.out.print("Precio 2: Q");
        precios.add(teclado.nextDouble());

        // Cálculos
        double total = precios.get(0) + precios.get(1);

        // Uso de if/else para determinar un mensaje según el total
        String mensaje;
        if (total > 50) {
            mensaje = "¡Gracias por su gran compra!";
        } else {
            mensaje = "¡Gracias por su visita!";
        }

        // Resumen Final
        System.out.println("\n==========================");
        System.out.println("RESUMEN PARA: " + cliente);
        System.out.println("1. " + productos.get(0) + " - Q" + precios.get(0));
        System.out.println("2. " + productos.get(1) + " - Q" + precios.get(1));
        System.out.println("--------------------------");
        System.out.println("TOTAL A PAGAR: Q" + total);
        System.out.println(mensaje);
        System.out.println("==========================");

        teclado.close();
    }
}
