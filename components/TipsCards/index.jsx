import {Card} from './Card';

const data = [
  {
    icon1: 0,
    subtitle: 'Autenticación en dos pasos',
    paragraf: `Es una herramienta para la seguridad de las cuentas que comparten dispositivos con otras. 
      La encontrarás en el menú vinculado a "Seguridad", y allí encontrarás la opción como "Verificación en dos pasos", 
      o "Autentificación en dos fases", o similares.`,
    icon2: 1,
    subtitle2: 'Alertas de inicio de sesión',
    paragraf2: `Recibirás un mensaje en tu correo de la cuenta que registraste notificando cada ingreso a la cuenta. 
      Si bien no protege el acceso, al menos advertirá de algún ingreso no previsto para actuar rápidamente.`,
  },
  {
    icon1: 2,
    subtitle: 'Cerrar sesión en dispositivos que no utilices',
    paragraf: `Cerrá sesión una vez que dejes de utilizar tus redes en otros dispositivos. Además no guardes el nombre de usuario y contraseña, 
      ya que la función autocompletar recupera información que permitiría el ingreso de terceros a tu cuenta`,
    icon2: 3,
    subtitle2: 'Canales de comunicación oficiales.',
    paragraf2: `Las plataformas utilizan sus canales oficiales para comunicarse y no solicitan información personal por vías externas a la plataforma en momentos aleatorios. 
      Ante cualquier duda podés utilizar los canales oficiales, ya sea por la aplicación o bien en el sitio web.`,
  },
  {
    icon1: 4,
    subtitle: 'Perfiles privados',
    paragraf: `Configurá los perfiles de tus redes de manera privada y utilizá las funcionalidades de las mismas para compartir contenido 
      con un público específico y de manera más consciente.`,
    icon2: 5,
    subtitle2: 'Casos de hackeo',
    paragraf2: `Si tu cuenta fue hackeada: avisá a tus contactos, y a los canales oficiales de la plataforma. 
      En caso de robo de celular, tené a mano el código IMEI del teléfono (es un código de 15 dígitos que viene de fábrica para identificarlo) 
      con el que podés realizar la denuncia y bloquearlo. Este código se puede obtener marcando " *#06# " en tu teléfono.`,
  },
];

export const TipsCards = () => {
  return (
    <div className="tips-cards">
      <div className="container">
        <div className="container-title">
          Protegé tus cuentas en redes sociales
        </div>
        <div className="gradient-cards">
          {data.map((card, i) => (
            <Card key={i} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};
