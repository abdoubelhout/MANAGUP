import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2, { message: 'Veuillez saisir votre nom complet (au moins 2 caractères).' })
    .max(100, { message: 'Le nom ne peut pas dépasser 100 caractères.' }),
  company: z
    .string()
    .trim()
    .min(2, { message: "Veuillez renseigner le nom de votre entreprise." })
    .max(100, { message: "Le nom d'entreprise ne peut pas dépasser 100 caractères." }),
  email: z
    .string()
    .trim()
    .toLowerCase()
    .email({ message: 'Veuillez saisir une adresse email professionnelle valide.' })
    .max(255, { message: "L'adresse email est trop longue." }),
  phone: z
    .string()
    .trim()
    .min(8, { message: 'Veuillez saisir un numéro de téléphone ou WhatsApp valide (au moins 8 chiffres).' })
    .max(25, { message: 'Le numéro de téléphone est trop long.' }),
  monthlyOrders: z
    .string()
    .min(1, { message: 'Veuillez sélectionner votre volume de commandes mensuel.' }),
  salesChannel: z
    .string()
    .min(1, { message: 'Veuillez sélectionner votre canal de vente prioritaire.' }),
  mainChallenge: z
    .string()
    .trim()
    .max(1000, { message: 'Votre message ne peut pas dépasser 1000 caractères.' })
    .optional(),
  requestType: z
    .string()
    .optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
