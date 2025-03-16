
let seleccionar = document.querySelector('select');
seleccionar.addEventListener('change', elegir);

function elegir() {
    let eleccion = seleccionar.value;

    if (eleccion == 0) {
        descripcion.innerHTML = '';
    }
    if (eleccion == 1) {
        descripcion.innerHTML = 'Suiza es un país ubicado en el corazón de Europa, conocido por sus impresionantes paisajes alpinos, su precisión relojera y su estabilidad política. Con una economía fuerte y un alto nivel de vida, es famosa por su sistema bancario, su chocolate y su queso. Suiza no forma parte de la Unión Europea, pero mantiene estrechas relaciones con sus vecinos. Además, es sede de importantes organizaciones internacionales, como la ONU y la Cruz Roja. Suiza cuenta con cuatro idiomas oficiales: alemán, francés, italiano y romanche, reflejando su diversidad cultural.';
    }else if (eleccion == 2) {
        descripcion.innerHTML = 'Nueva Zelanda es un país insular en el suroeste del océano Pacífico, conocido por sus impresionantes paisajes naturales, su cultura maorí y su alta calidad de vida. Está compuesto por dos islas principales, la Isla Norte y la Isla Sur, además de muchas islas más pequeñas. Su biodiversidad única, con especies como el kiwi (ave emblemática), se debe a su aislamiento geográfico. Su economía se basa en la agricultura, el turismo y la tecnología. Además, es reconocida por ser un país pionero en derechos sociales y sostenibilidad ambiental.';
    }else if (eleccion == 3) {
        descripcion.innerHTML = 'Islandia es un país insular en el Atlántico Norte, conocido por sus paisajes volcánicos, géiseres, glaciares y aguas termales. Su capital, Reikiavik, es la ciudad más septentrional del mundo. Con una población pequeña pero una alta calidad de vida, Islandia se destaca por su energía renovable, ya que aprovecha su abundante geotermia. Su cultura está influenciada por sus raíces vikingas y su idioma, el islandés, ha cambiado poco en siglos. También es famosa por sus auroras boreales y por ser uno de los países más seguros y felices del mundo.';
    }else if (eleccion == 4) {
        descripcion.innerHTML = 'Noruega es un país escandinavo conocido por sus impresionantes fiordos, su naturaleza salvaje y su alto nivel de vida. Con una economía fuerte basada en el petróleo, la pesca y las energías renovables, es uno de los países más desarrollados del mundo. Su capital, Oslo, combina modernidad con una rica herencia vikinga. Noruega es famosa por su compromiso con la sostenibilidad y su calidad democrática. Además, en invierno es un destino ideal para admirar la aurora boreal y practicar deportes como el esquí. No forma parte de la Unión Europea, pero mantiene estrechos lazos con ella.';
    }
}