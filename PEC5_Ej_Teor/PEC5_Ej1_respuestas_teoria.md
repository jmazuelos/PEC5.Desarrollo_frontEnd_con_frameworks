# ¿Cuáles son las principales diferencias entre formularios dirigidos por template y formularios reactivos?

Los formularios dirigidos por template definen la estructura y el comportamiento en la plantilla HTML utilizando directivas como 'ngModel' y requiere menos código, mientras que los formularios reactivos utilizan el paradigma de programación reactiva. En cuanto a la validación, los formularios dirigidos por template la manejan automáticamente a través de directivas y los formularios reactivos lo hace mediante funciones y expresiones regulares en TypeScript, ofreciendo mayor flexibilidad, además, proporciona mayor control sobre el estado del formulario y sus funcionalidades. También, los formularios reactivos tienen capacidad para manejar fácilmente operaciones asíncronas.


# ¿Qué son, para qué sirven y cómo se utilizan las directivas ngModel y ngModelChange?
 - ngModel: es una directiva que establece la vinculación entre el modelo en el componente y el elemento de entrada (input) en la plantilla. Permite que los cambios en el modelo se reflejen automáticamente en la vista y viceversa, facilitando la sincronización entre el estado del formulario y el componente. Se utiliza en elementos de formulario (como input, select o textarea).

 - ngModelChange: es una directiva que permite detectar cambios en el valor del modelo antes de que se actualice la vista. Proporciona una forma de realizar acciones específicas cuando el valor del modelo está a punto de cambiar debido a interacciones en la vista. Se utiliza como un evento en el formulario.

# ¿Qué son, cuáles son y para qué sirven los estados en los formularios dirigidos por templates?
 - Pristine: estado que no ha sido modificado por el usuario. Se utiliza para identificar si un usuario ha interactuado con el formulario. 

 - Dirty: estado que ha sido modificado por el usuario. Indica que el valor del formulario ha cambiado desde su estado original.

 - Untouched: estado que aparece cuando el usuario no ha interactuado táctilmente con el formulario. Puede ser útil para personalizar el comportamiento en formularios según si el usuario ha interactuado o no con el mismo.

 - Touched: estado que aparece cuando el usuario ha interactuado táctilmente con el formulario. Es útil para mostrar mensajes de validación cuando el usuario haya tocado un campo o el formulario.

 - Invalid: estado cuando un valor no cumple con las reglas de validación establecidas. Sirve para identificar y manejar campos que no cumplen con los requisitos de validación. 

 - Valid: estado cuando se cumplen con todas las reglas de validación establecidas. Indica que el campo o el formulario cumple con todas las reglas de validación.

# ¿Qué ventajas aportan los FormGroup en la composición de formularios?
 - Facilitan la organización y comprensión del código.
 - Mejoran la modularidad y mantenimiento del código.
 - Facilitan la implementación de reglas de negocio específicas para cada grupo de controles.
 - Se pueden crear dinámicamente.
 - Proporcionan información sobre el estado del formulario.
 - Permiten la gestión de listas de elementos dinámicas y repetitivas de manera eficiente.
 - Se integran fácilmente con las plantillas HTML y las directivas de Angular, simplificando la creación y mantenimiento de formularios reactivos en la interfaz de usuario.