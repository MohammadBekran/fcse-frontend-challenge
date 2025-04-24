import type { TFunction } from "i18next";
import { z } from "zod";

export const loginFormSchema = (t: TFunction<"translation", undefined>) =>
  z.object({
    email: z
      .string()
      .email(t("auth.emailInvalid"))
      .nonempty("auth.emailRequired"),
    password: z
      .string()
      .min(6, t("auth.passwordMinLength"))
      .nonempty(t("auth.passwordRequired")),
  });
