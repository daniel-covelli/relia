import { useState } from 'react';

interface Validation<T> {
  required?: {
    value: boolean;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
  custom?: {
    isValid: (value: string) => boolean;
    message: string;
  };
  match?: {
    field: keyof T;
    message: string;
  };
}

type ErrorRecord<T> = Partial<Record<keyof T, string>>;

type Validations<T extends object> = Partial<Record<keyof T, Validation<T>>>;

export const useForm = <T extends Record<keyof T, string> = {}>(options?: {
  validations?: Validations<T>;
  initialValues?: Partial<T>;
  onSubmit?: (data?: Record<keyof T, string>) => void;
}) => {
  const [data, setData] = useState<T>((options?.initialValues || {}) as T);
  const [errors, setErrors] = useState<ErrorRecord<T>>({});

  const handleChange =
    <S>(key: keyof T, sanitizeFn?: (value: string) => S) =>
    (v: string) => {
      const value = sanitizeFn ? sanitizeFn(v) : v;
      setData({
        ...data,
        [key]: value,
      });
    };

  const handleSubmit = async () => {
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors: ErrorRecord<T> = {};
      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.message;
        }

        const pattern = validation?.pattern;
        if (pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.message;
        }

        const custom = validation?.custom;
        if (custom?.isValid && !custom.isValid(value || '')) {
          valid = false;
          newErrors[key] = custom.message;
        }

        const match = validation?.match;
        if (match?.field && data[match?.field as keyof T] !== value) {
          valid = false;
          newErrors[key] = match.message;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit(data);
    }
  };

  return {
    data,
    setData,
    handleChange,
    handleSubmit,
    errors,
    setErrors,
  };
};
