# Detalle del examen en BackEnd

1.- Desarrollar un servicio que me permita crear un usuario

    1.1.- Columnas del documento
        email:      [ Unico: true, indexado: true ]
        firstName:  [ indexado: true ]
        lastName:   [ ]
        Telephone:  [ Unico: true, soloNumeros: true ]
        Token:      [ Autogenerado_JWT: true, Unico: true, indexado: true ] 
    1.2.- Especificaciones del servicio
        METHOD:     [POST]
        URL:        [...url/api/user/create]
        REQUEST: 
        {
            email: "string",
            firstName: "string",
            lastName: "string",
            telephone: "string"
        }
        RESPONSE: {
            token: "string"
        }

2.- Desarrollar un servicio que me permita realizar una orden de compra

    1.1.- Columnas del documento
        usuario: {
            idUsuario:      [unico: true, indexado: true]
            email:          [indexado: true]
            telephone:      [indexado: true]
        }
        orders: [
            {
                idOrder:            [unico: true, indexado: true]
                orderNumber:        [unico: true, endexado: true]
                createdAt:          []
                items: [{
                    idItem:           [unico: true, indexado: true]
                    itemtName:        []
                    itemtPrice:       []
                    itemtQuantity:    []
                }]
            }
        ]
        createdAt:         []
        updatedAt:          []

    1.2.- Especificaciones del servicio
        METHOD:     [POST]
        URL:        [...url/api/order/create]
        REQUEST: 
        {
            token: "string",
            items: [
                {
                    idItem: "string",
                    quantity: "number"
                }
            ]
        }
        RESPONSE: {
            idOrder: "string"
            orderNumber: "string"
        }

3.- Desarrollar un servicio que me permila listar las ordenes de compras de un usuario.
    <nota>: Solo debo poder enviar el token para listar todas mis ordenes de compra.

    1.- Especificaciones del servicio
        METHOD:     [GET]
        URL:        [...url/api/order/list-for-user]
        REQUEST:
        {
            token: string
        }
        RESPONSE: {
            usuario: {
                idUsuario: "string",
                email: "string",
                telephone: "string"
            },
            orders: [{
                idOrder: "string",
                orderNumber: "string",
                createdAt: "string - [DD/MM/YYYY]",
                quantityItems: "number",
                totalPrice: "number"
            }]
        }

    #Se tendra en consideracion si el metodo del listado esta paginado.