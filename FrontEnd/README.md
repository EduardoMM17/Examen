# Detalle del examen en front

1.- Desarrollar una vista que me permita guardar los siguientes campos:

        email:      [ requerido: true, formatoValido: true ]
        firstName:  [ requerido: true ]
        lastName:   [ requerido: true ]
        Telephone:  [ Requerido: true, soloNumeros: true ]

        consumir el servicio: [POST] (.../url/user/create)

2.- Desarrollar una vista que me permita crear una orden de compra:

    2.1.- Los items deben cargarse en un combo
    2.2.- La cantidad debe ser un caja de texto alado del combo
    2.3.- Debes tener un boton alado de la caja que nos vaya agregando los items
    2.4.- Los cards se van creando mientras vas añadiendo items a la orden
    2.5.- Los cards deben tener los siguientes datos:
        itemName: "string"
        itemPrice: "number"
        itemQuantity: "number"
        itemTotal: "number"
        
    2.4.- Boton generico de crear orden


3.- Desarrollar una vista en formato grilla (tabla) que me permita visualizar los siguientes campos:

        email | telephone | order | create | quantity | total

        #Se tendra en consideracion si el metodo del listado esta paginado.