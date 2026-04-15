import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Cookie } from "lucide-react";

const CookiesPolicy = () => (
  <main className="py-20 animate-in fade-in duration-700">
    <div className="container max-w-4xl">
      <div className="flex items-center gap-4 mb-10">
        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Cookie className="h-6 w-6" />
        </div>
        <h1 className="text-4xl font-black italic uppercase tracking-tight">Política de Cookies</h1>
      </div>
      <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
        <p>
          En MH Sport utilizamos cookies propias y de terceros para mejorar su experiencia de navegación y ofrecer contenido de su interés.
        </p>
        <h2 className="text-2xl font-black italic text-foreground uppercase pt-4">¿Qué son las cookies?</h2>
        <p>
          Una cookie es un pequeño archivo de texto que se descarga en su equipo al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo.
        </p>
        <h2 className="text-2xl font-black italic text-foreground uppercase pt-4">Tipos de cookies que utilizamos</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Cookies técnicas:</strong> Necesarias para el funcionamiento de la web.</li>
          <li><strong>Cookies de personalización:</strong> Permiten recordar sus preferencias (idioma, carrito).</li>
          <li><strong>Cookies de análisis:</strong> Nos ayudan a entender cómo usan los usuarios nuestra página de forma anónima.</li>
        </ul>
        <p>
          Usted puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
        </p>
      </div>
      <div className="mt-20 flex justify-center border-t border-primary/10 pt-12">
        <Button variant="ghost" asChild className="gap-2 font-black italic uppercase rounded-xl h-14 px-8 text-muted-foreground hover:text-primary">
            <Link to="/"><ArrowLeft className="h-5 w-5" /> Volver al Inicio</Link>
        </Button>
      </div>
    </div>
  </main>
);

export default CookiesPolicy;
