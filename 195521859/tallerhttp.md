
# Taller Http Glosario

**1) Request**: Es un mensaje del protocolo http que indica una peticion, el cual puede ser un verbo o un nombre que defina la opercaion que el cliente quiera realizar.

**2) Response**: Es otro mensaje del protocolo http que indica una respuesta del servidor a la ultima peticion del cliente. 

**3) Status Code**: Es un codigo de estado http que define de forma abreviada la respuesta del servidor http.

**4) Metodos de peticion http**

**-GET**: El método GET  solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.

**-POST**: El método POST se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.

**-HEAD**: El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.

**-OPTIONS**: El método OPTIONS es utilizado para describir las opciones de comunicación para el recurso de destino.

**-PUT**: El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.

**-DELETE**: El método DELETE borra un recurso en específico.




**5) Header**: Las cabeceras HTTP permiten al cliente y al servidor enviar información adicional junto a una petición o respuesta.

**6) Headers**

**Accept**: Informa al servidor sobre los diferentes tipos de datos que pueden enviarse de vuelta. Es de tipo MIME.

**Accept-Charse**: Informa al servidor sobre el set de caracteres que el cliente puede entender.

**Accept-Encoding**: Informa al servidor sobre el algoritmo de codificación, habitualmente un algoritmo de compresión, que puede utilizarse sobre el recurso que se envíe de vuelta en la respuesta.

**Cache-Control**:Especifica directivas para los mecanismos de almacenamiento en caché, tanto para peticiones como para respuestas.

**Connection**: Controla si la conexión a la red se mantiene activa después de que la transacción en curso haya finalizado.

**Cookie**: Contiene HTTP cookies penviadas previamente por el servidor con la cabecera Set-Cookie .

**Set-Cookie**: Envia cookies desde el servidor al usuario.

**Host**: Especifica el nombre de dominio del servidor (para alojamiento virtual), y (opcionalmente) el número de puerto TCP en el que está escuchando el servidor.

**Origin**: Indica el punto de origen de una petición de recogida.

**Referer**: Indica la dirección de la página web previa desde la cual un link nos ha redirigido a la actual.

**User-Agent**: Contiene un string característico que será examinado por el protocolo de red para identificar el tipo de aplicación, sistema operativo, proveedor de software o versión del software del agente de software que realiza la petición.

**Content-Encoding**: Utilizado para indicar el algoritmo de compresión.

**Content-Length**: Indica el tamaño del cuerpo del recurso, expresado en números decimales de octetos, que ha sido enviado al recipiente.

**Content-Type**: Indica el tipo de medio del recurso .

**location**: Indica la URL a la que debe redirigir una página determinada.

**upgrade**:  Es un Estándar de Internet Propuesto, establece reglas para la actualización o cambios a un protocolo diferente en el cliente, servidor, o protocolo de conexiones actuales.



