import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, FileText } from "lucide-react";

const Terms = () => (
  <main className="py-20 animate-in fade-in duration-700">
    <div className="container max-w-4xl">
      <div className="flex items-center gap-4 mb-10">
        <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <FileText className="h-6 w-6" />
        </div>
        <h1 className="text-4xl font-black italic uppercase tracking-tight">Términos y Condiciones</h1>
      </div>
      <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
        <p>
          Al acceder a este sitio web, usted acepta los siguientes términos y condiciones de uso.
        </p>
        <h2 className="text-2xl font-black italic text-foreground uppercase pt-4">Condiciones de Venta</h2>
        <p>
          Todos los pedidos están sujetos a disponibilidad previa de stock en nuestro almacén de Hellín. Los precios mostrados incluyen el IVA correspondiente.
        </p>
        <h2 className="text-2xl font-black italic text-foreground uppercase pt-4">Envíos y Devoluciones</h2>
        <p>
          Los plazos de entrega son estimativos. En caso de productos personalizados (césped al corte), no se aceptarán devoluciones salvo por defecto de fabricación.
        </p>
        <h2 className="text-2xl font-black italic text-foreground uppercase pt-4">Propiedad Intelectual</h2>
        <p>
          Todo el contenido de esta web es propiedad de MH Sport o sus proveedores y está protegido por las leyes de propiedad industrial e intelectual.
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

export default Terms;
