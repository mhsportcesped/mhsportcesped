import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShieldCheck } from "lucide-react";

const PrivacyPolicy = () => (
  <main className="py-20 animate-in fade-in duration-700">
    <div className="container max-w-4xl">
      <div className="flex items-center gap-4 mb-10">
        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <ShieldCheck className="h-6 w-6" />
        </div>
        <h1 className="text-4xl font-black italic tracking-tight">Política de Privacidad</h1>
      </div>
      <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
        <p>
          En cumplimiento con el RGPD, MH Sport informa a los usuarios sobre el tratamiento de sus datos personales.
        </p>
        <h2 className="text-2xl font-black italic text-foreground pt-4">Responsable del Tratamiento</h2>
        <p>
          MH SPORT CÉSPED ARTIFICIAL Y JARDINES S.L., con domicilio en Hellín, Albacete, España.
        </p>
        <h2 className="text-2xl font-black italic text-foreground pt-4">Finalidad de los Datos</h2>
        <p>
          Los datos proporcionados a través de nuestros formularios se utilizarán exclusivamente para gestionar sus pedidos, responder consultas y enviar presupuestos personalizados. No cedemos sus datos a terceros sin su consentimiento explícito.
        </p>
        <h2 className="text-2xl font-black italic text-foreground pt-4">Sus Derechos</h2>
        <p>
          Tiene derecho a acceder, rectificar y suprimir sus datos, así como otros derechos explicados en la información adicional que puede solicitar en info@mhsportcesped.es.
        </p>
      </div>
      <div className="mt-20 flex justify-center border-t border-primary/10 pt-12">
        <Button variant="ghost" asChild className="gap-2 font-black italic rounded-xl h-14 px-8 text-muted-foreground hover:text-primary">
            <Link to="/"><ArrowLeft className="h-5 w-5" /> Volver al Inicio</Link>
        </Button>
      </div>
    </div>
  </main>
);

export default PrivacyPolicy;
