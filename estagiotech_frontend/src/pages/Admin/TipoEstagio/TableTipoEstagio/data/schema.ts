import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const tipoEstagioSchema = z.object({
  idTipoEstagio: z.number(),
  descricaoTipoEstagio: z.string(),
});

export type tipoEstagioProps = z.infer<typeof tipoEstagioSchema>;