import type { Request } from "../../mod.ts";
export const options = {
  methods: ["POST"],
};
export const handler = async (request: Request) => {
  const payload = await request.getPayload();
  request.send(payload);
};
