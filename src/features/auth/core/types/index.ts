import { z } from "zod";

import { loginFormSchema } from "@/features/auth/core/validations";

export type TLoginFormData = z.infer<ReturnType<typeof loginFormSchema>>;
