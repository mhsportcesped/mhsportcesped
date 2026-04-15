import { Shield, Award, Users, Heart, Factory, Building2, LayoutGrid, Eye, SearchCheck, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  { icon: Shield, title: "Integridad", desc: "Actuamos con honestidad y transparencia en todas nuestras interacciones." },
  { icon: Award, title: "Innovación", desc: "Fomentamos la creatividad y la búsqueda de nuevas ideas." },
  { icon: Users, title: "Respeto", desc: "Valoramos a cada individuo y promovemos la inclusión." },
  { icon: Heart, title: "Compromiso", desc: "Nos dedicamos con pasión a alcanzar nuestros objetivos." },
];

const About = () => (
  <main className="py-12 md:py-20">
    <div className="container max-w-5xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-black italic tracking-tighter text-primary">NUESTRA EMPRESA</h1>
        <p className="mt-4 text-xl text-muted-foreground uppercase tracking-widest font-bold">MH SPORT CÉSPED ARTIFICIAL Y JARDINES S.L.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
          <p>
            <strong className="text-foreground">Metal Hellin S.L</strong> es una empresa con sede en Hellín (Albacete) fundada en el año 2003 de ámbito familiar, dedicada a la herrería, estructuras metálicas y forja artística.
          </p>
          <p>
            Debido a la alta demanda de material deportivo se amplió el grupo creando una nueva empresa <strong className="text-foreground">MH SPORT EQUIPAMIENTO DEPORTIVO S.L</strong> dedicada a la fabricación e instalación tanto de equipamiento deportivo como zonas de recreo infantiles.
          </p>
          <p>
            Junto a la nueva empresa, se creó también <strong className="text-foreground">MH SPORT CÉSPED ARTIFICIAL Y JARDINES S.L</strong> dedicada a la venta e instalación de césped artificial en todo tipo de superficie.
          </p>
          <p>
            Contamos con varios equipos dedicados a cada sección. Nuestros instaladores son capaces de realizar trabajos en cualquier superficie con las mejores garantías de calidad, avalados por nuestra larga experiencia y múltiples instalaciones realizadas.
          </p>
        </div>
        <div className="bg-primary/5 p-8 rounded-3xl border border-primary/10">
          <h2 className="text-2xl font-bold mb-6 italic underline decoration-primary underline-offset-8">Ofrecemos y brindamos:</h2>
          <ul className="space-y-4">
            <li className="flex items-center gap-3 font-medium"><CheckCircle className="text-primary h-5 w-5" /> Variedad de césped para interior y exterior</li>
            <li className="flex items-center gap-3 font-medium"><CheckCircle className="text-primary h-5 w-5" /> Accesorios y equipos de instalación</li>
            <li className="flex items-center gap-3 font-medium"><CheckCircle className="text-primary h-5 w-5" /> Servicio de instalaciones profesional</li>
            <li className="flex items-center gap-3 font-medium"><CheckCircle className="text-primary h-5 w-5" /> Asesoramiento personalizado</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        <div className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <Factory className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-3 italic">NUESTRO ALMACÉN</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Espacio fundamental donde gestionamos productos y mercancías. Aseguramos un inventario adecuado para satisfacer la demanda de inmediato, clave para el funcionamiento fluido de la empresa.
          </p>
        </div>
        <div className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <LayoutGrid className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-3 italic">NUESTRA ÁREA DE TRABAJO</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Espacio organizado donde nuestros empleados realizan sus tareas de manera eficiente. La organización de nuestro taller nos permite una puesta en marcha impecable.
          </p>
        </div>
        <div className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <Building2 className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-3 italic">NUESTRAS OFICINAS</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Departamentos de administración y técnico, encargados de dar servicio al cliente y gestionar de la manera más óptima todos los trabajos realizados.
          </p>
        </div>
        <div className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <Eye className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-3 italic">NUESTRA EXPOSICIÓN</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Presentación de nuestra variedad de productos con propósitos informativos. Incluye elementos visuales y muestras para enseñar la calidad de manera clara.
          </p>
        </div>
        <div className="bg-card border border-border p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow md:col-span-2">
          <SearchCheck className="h-10 w-10 text-primary mb-4" />
          <h3 className="text-xl font-bold mb-3 italic">CALIDAD Y SEGUIMIENTO</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Realizamos un seguimiento de todo el material desde la recepción hasta la instalación, con controles desde nuestro laboratorio hasta el lugar de puesta en marcha.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 bg-muted/30 p-8 md:p-16 rounded-[3rem]">
        <div>
          <h2 className="text-3xl font-black italic mb-6 text-primary">Nuestra Visión</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ser líderes en la innovación y sostenibilidad dentro de nuestra industria, creando soluciones que no solo satisfagan las necesidades de nuestros clientes, sino que también contribuyan al bienestar del planeta.
          </p>
        </div>
        <div>
          <h2 className="text-3xl font-black italic mb-6 text-primary">Nuestra Misión</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ofrecer productos de alta calidad que mejoren la vida de nuestros clientes, promoviendo la sostenibilidad y la innovación. Nos comprometemos a un ambiente de trabajo inclusivo y un servicio excepcional para construir relaciones duraderas.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-center mb-12 italic underline decoration-primary underline-offset-8">Nuestros Valores</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((v) => (
          <div key={v.title} className="text-center p-6 bg-card border border-border rounded-2xl shadow-sm">
            <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
              <v.icon className="h-7 w-7" />
            </div>
            <h3 className="font-bold text-lg mb-2 italic">{v.title}</h3>
            <p className="text-sm text-muted-foreground">{v.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-20 flex justify-center">
        <Button variant="ghost" asChild className="gap-2 font-bold rounded-xl h-12">
          <Link to="/"><ArrowLeft className="h-4 w-4" /> Volver al Inicio</Link>
        </Button>
      </div>
    </div>
  </main>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default About;
