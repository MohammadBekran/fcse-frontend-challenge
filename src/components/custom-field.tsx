import { useState } from "react";
import { Control, FieldValues, Path } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface ICustomFieldProps<T extends FieldValues> {
  name: Path<T>;
  label: string;
  placeholder: string;
  type?: "text" | "password";
  control: Control<T>;
}

const CustomField = <T extends FieldValues>({
  name,
  label,
  placeholder,
  type,
  control,
}: ICustomFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword(!showPassword);

  const eyeIconProperties = {
    className: "absolute top-7 right-4 text-2xl cursor-pointer",
    onClick: toggleShowPassword,
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <div className="relative h-[78px] flex flex-col justify-center rounded-xl px-4 border border-light-300 shadow-md">
            <FormLabel className="w-full pt-2 text-light-100 text1">
              {label}
            </FormLabel>
            <FormControl>
              {type && (
                <>
                  <Input
                    placeholder={placeholder}
                    type={
                      type === "text"
                        ? "text"
                        : showPassword
                        ? "text"
                        : "password"
                    }
                    className="p-0 border-none shadow-none body-2 placeholder:text-light-200 outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0"
                    {...field}
                  />
                  {type === "password" &&
                    (showPassword ? (
                      <FaEyeSlash {...eyeIconProperties} />
                    ) : (
                      <FaEye {...eyeIconProperties} />
                    ))}
                </>
              )}
            </FormControl>
          </div>
          <FormMessage className="text-red-500 body-2 ml-2" />
        </FormItem>
      )}
    />
  );
};

export default CustomField;
