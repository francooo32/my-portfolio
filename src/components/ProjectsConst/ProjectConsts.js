import vittoProjImg1 from "../../assets/img/vittoriFront1.png";
import vittoProjImg2 from "../../assets/img/vittoriFront2.png";
import vittoProjImg3 from "../../assets/img/vittoriFront3.png";
import workImg1 from "../../assets/img/IconoDiseñoProgram.png";
import workImg2 from "../../assets/img/IconoDiseñoBranding.png";
import workImg3 from "../../assets/img/IconoDiseñoAnimacion.png";

export const VITTORI_PROJECTS = [
    {
      title: "Identidad",
      description: "Distinguimos la web del resto con una" + "\n"
                    + " mezcla de colores e imagenes novedosa.",
      imgUrl: vittoProjImg1,
    },
    {
      title: "Cotizador",
      description: "Cree un paso a paso para la cotización inteligente" + "\n" 
                      + "  del vehículo orientado a agilizar y facilitar el proceso.",
      imgUrl: vittoProjImg2,
    },
    {
      title: "Catálogo",
      description: "Mostramos la amplia variedad de vehículos que posee el cliente.",
      imgUrl: vittoProjImg3,
    }
  ];

export const VITTORI_COLORS = [
    {
      title: "#0E0E0E",
      description: "Oscuro fuerte, para señalar exclusividad",
      color: '#0E0E0E',
    },
    {
      title: "#5F021F",
      description: "Bordeaux rojo, para marcar fuerza y poder",
      color: '#5F021F',
    },
    {
      title: "#C8C8C8",
      description: "Blanco suave, en linear, para transmitir orden y confianza",
      color: '#C8C8C8',
    }
  ];

export const VITTORI_WORKS = [
    {
      title: "Desarrollo de código",
      description: "Cree una base para almacenar los vehículos y una web única que busca separarse"
      + " del resto existente en el mercado; el cliente hoy disfruta de su propia arquitectura escalable.",
      videoUrl: workImg1,
    },
    {
      title: "Branding",
      description: "Trabaje en equipo con una UX/UI quien se encargó de encontrar los diseños mas eficientes y visualmente atractivos para destacar la página.",
      videoUrl: workImg2,
    },
    {
      title: "Complejidad escalable",
      description: "Desarrollo arquitectura, no simplemente webs, lo que permite que crezca de forma infinita",
      videoUrl: workImg3,
    },
  ];