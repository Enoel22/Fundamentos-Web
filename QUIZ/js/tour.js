//variables de uso
var panorama, viewer, container, infospot;

//obtener la referencia al contenedor dende se mostrara la escena 360
container = document.querySelector('#container_principal');

//cargar la foto 360
panorama = new PANOLENS.ImagePanorama('img/HISTORIACR3.jpg');
panorama2 = new PANOLENS.ImagePanorama("img/HISTORIACR5.jpg"); 

//zona1 intercativa (infospot1)
var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot1.position.set(500 ,40 , 37);
infospot1.addHoverText('Introducción del café', -60);
infospot1.element.innerHTML = '<div style="background-color: rgba(59, 59, 59, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">1720 es la fecha probable de la introducción del café a América, cuando las primeras semillas de la especie Coffea Arábica, variedad Typica llegaron a la isla Martinica, Antillas, que luego fueron sembradas en la Provincia Costa Rica a finales del siglo XVIII.En esa época nuestro país tenía una agricultura de subsistencia. La historia costarricense cambió desde 1808: bajo la égida del gobernador Tomás de Acosta empezó a arraigarse en nuestro suelo el cultivo del café, que ha calado muy hondo en el ser y quehacer costarricense.</div>';
panorama.add(infospot1);

//zona2 intercativa (infospot2)
var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot2.position.set(-501 ,103 , 389);
infospot2.addHoverText('Braulio Evaristo Carrillo' -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(59, 59, 59, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 300px;">Braulio Evaristo Carrillo Colina (Cartago, Provincia de Costa Rica, 20 de marzo de 1800-Sociedad, El Salvador, 15 de mayo de 1844) fue un abogado, comerciante y político costarricense. Fue jefe de Estado de Costa Rica en dos períodos: el primero electo democráticamente entre 1835 y 1837, y el segundo como gobernante de facto entre 1838 y 1842. Responsable de una obra monumental en lo jurídico, político, fiscal, hacendario y económico, sus gobiernos se consideraron fundamentales en la formación del Estado, por lo que es reconocido como "Arquitecto del Estado Costarricense".   <br><br><img src="img/Braulio_Carrillo.jpg" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;"><br><br></br></div>';
panorama.add(infospot2);

//zona3 intercativa (infospot3)
var infospot3 = new PANOLENS.Infospot(50, 'img/play.webp');
infospot3.position.set(236 ,75 , 499);
infospot3.addHoverText('', -60);
infospot3.element.innerHTML = `
    <div class:"" style="">
        <iframe width="720" height="480" src="https://www.youtube.com/embed/uY7PASUrsAY?si=Ru2WfYGUVZo6Ls3H"></iframe>
    </div>`;
panorama.add(infospot3);

//zona4 intercativa (infospot4)
var infospot4 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot4.position.set(-30 ,139 , -500);
infospot4.addHoverText('Historia de José María Castro Madriz', -60);
infospot4.element.innerHTML = `
    <div style="background-color: rgba(59, 59, 59, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 250px;">
        José María Castro Madriz (San José, 1 de septiembre de 1818-San José, 4 de abril de 1892) fue un político, abogado, filósofo y diplomático costarricense, fundador de la República de Costa Rica, quien se desempeñó como el segundo y último jefe del Estado de Costa Rica de 1847 a 1848, así como el primer presidente de la misma de 1848 a 1849y nuevamente de 1866 a 1868.De pensamiento liberal, era un profundo creyente de las virtudes de la ilustración y la libertad de prensa. Fue la primera persona condecorada como benemérito de la patria, en 1847.
        <br><br>
        <img src="img/José_María.jpg" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
        <br><br>
    </div>`;
panorama.add(infospot4);

//zona5 intercativa (infospot5)
var infospot5 = new PANOLENS.Infospot(50, 'img/audio.png');
infospot5.position.set(-500 ,7 , -174);
infospot5.addHoverText('Historia de Juan Rafael Mora Porras' -60);
infospot5.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;"><audio controls><source src="audio/Juan Rafael.mp3" type="audio/mpeg"></audio></div>';
panorama.add(infospot5);

//zona6 intercativa (infospot6)
var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(-501 ,-29 , 153);
infospot6.addHoverText('Historia de José María Castro Madriz', -60);
infospot6.element.innerHTML = `
    <div style="background-color: rgba(59, 59, 59, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 250px;">
        La Anexión del Partido de Nicoya a Costa Rica es un evento histórico que se refiere a la incorporación del territorio del partido de Nicoya al Estado de Costa Rica, ocurrida el 25 de julio de 1824.
        Gran parte de lo que fue este constituye la provincia de Guanacaste. La anexión se dio mediante un plebiscito sucedido en la ciudad de Nicoya, en el cual, en cabildo abierto, los pobladores de los municipios de Nicoya y Santa Cruz votaron por incorporarse a Costa Rica, mientras que la villa de Guanacaste, hoy ciudad de Liberia, declinó la anexión, no obstante, el 18 de marzo de 1829, dicha población pasó a formar parte de Costa Rica por una ley emitida por el Congreso de la República Federal de Centro América.
    </div>`;
panorama.add(infospot6);

//zona7 intercativa (infospot7)
var infospot7 = new PANOLENS.Infospot(40, PANOLENS.DataImage.Info);
infospot7.position.set(-501 ,75 , -15);
infospot7.addHoverText('Historia de José María Castro Madriz', -60);
infospot7.element.innerHTML = `
    <div style="background-color: rgba(59, 59, 59, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 400px;">
        La Campaña Nacional de 1856-1857 fue un conflicto bélico que se desarrolló entre marzo de 1856 y mayo de 1857, el cual enfrentó a la República de Costa Rica, encabezada por su presidente Juan Rafael Mora Porras, contra el ejército filibustero estadounidense al mando de William Walker, como consecuencia de la ocupación filibustera en la vecina Nicaragua desde 1855. Sus episodios más sobresalientes son la batalla de Santa Rosa (20 de marzo de 1856), la batalla de Rivas (11 de abril de 1856), y la Campaña del Tránsito (noviembre de 1856-mayo de 1857). En Costa Rica, se considera a la campaña una importante etapa de la historia costarricense, dado que dio impulso al proceso de construcción del estado-nación en Costa Rica, y representa la consolidación de la independencia y el inicio del proceso de formación de la identidad nacional.
    </div>`;
panorama.add(infospot7);

//zona8 intercativa (infospot8)
var infospot8 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot8.position.set(500 ,-45 , 421);
infospot8.addHoverText('Historia de José María Montealegre', -60);
infospot8.element.innerHTML = `
    <div style="background-color: rgba(59, 59, 59, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 250px;">
        José María Montealegre Fernández (San José, Provincia de Costa Rica, 19 de marzo de 1815 - San José, Estados Unidos, 26 de septiembre de 1887) fue un cirujano y político costarricense, y el 3.° Presidente de la República de Costa Rica. Fue Presidente Provisorio del 14 de agosto de 1859 al 29 de abril de 1860 y Presidente constitucional del 29 de abril de 1860 al 8 de mayo de 1863.
        <br><br>
        <img src="img/José_María2.JPG" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
        <br><br>
    </div>`;
panorama.add(infospot8);

//zona7 intercativa (infospot9)
var infospot9 = new PANOLENS.Infospot(50, 'img/photo.png');
infospot9.position.set(212 ,57 , -500);
infospot9.addHoverText('Mapa', -60);
infospot9.element.innerHTML = `
    <div style="background-color: rgba(59, 59, 59, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 550px;">
        <img src="img/mapa.jpg" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
        <br><br>
    </div>`;
panorama.add(infospot9);

//zona10 intercativa (infospot10)
var infospot10 = new PANOLENS.Infospot(50, 'img/photo2.png');
infospot10.position.set(-219 ,13 , 500);
infospot10.addHoverText('Imprenta', -60);
infospot10.element.innerHTML = `
    <div style="background-color: rgba(59, 59, 59, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 550px;">
        Imprenta
        <br><br>
        <img src="img/imprenta.jpg" alt="Imagen del dispositivo" style="max-width: 100%; height: auto; border-radius: 5px;">
        <br><br>
    </div>`;
panorama.add(infospot10);



 viewer = new PANOLENS.Viewer({
     container: container,
     output: 'fullscreen',
     autoHideInfospot: false
 });
 viewer.add(panorama);