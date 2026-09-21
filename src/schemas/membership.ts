import { z } from 'zod'

export const AVAILABLE_INTERESTS = [
  'Artificial Intelligence',
  'Cybersecurity',
  'Web Development',
  'App Development',
  'Internet of Things',
  'Robotics',
  'Graphic Design',
  'Research and Innovation',
  'Programming',
  'Photography',
] as const

export const TEAMWORK_DESCRIPTIONS: Record<number, string> = {
  1: 'Prefer autonomous focus; keen to learn collaborative engineering practices',
  2: 'Comfortable contributing in small pairs or directed tasks',
  3: 'Reliable team contributor; communicates actively across sprints',
  4: 'Strong collaborator; excels in cross-functional technical teams',
  5: 'Empathetic team leader; thrives in steering collective initiatives',
}

export const DEPARTMENT_OPTIONS = [
  { label: 'Master of Computer Applications (MCA)', value: 'MCA' },
  { label: 'Department of Information Technology (IT)', value: 'Information Technology' },
  { label: 'Computer Science & Engineering (CSE)', value: 'Computer Science & Engineering' },
  { label: 'Electronics & Communication Engineering (ECE)', value: 'Electronics & Communication' },
  { label: 'Electrical Engineering (EE)', value: 'Electrical Engineering' },
  { label: 'Mathematics & Computing', value: 'Mathematics & Computing' },
  { label: 'Applied Physics / Electronics', value: 'Applied Physics' },
  { label: 'Other Department', value: 'Other' },
]

export const YEAR_OPTIONS = [
  { label: '1st Year (Batch 2026–2027)', value: '1st (2026-2027)' },
  { label: '2nd Year (Batch 2025–2026)', value: '2nd Year' },
  { label: '3rd Year (Batch 2024–2025)', value: '3rd Year' },
  { label: '4th Year (Batch 2023–2024)', value: '4th Year' },
  { label: 'MCA 1st Year (2026)', value: 'MCA 1st Year' },
  { label: 'MCA 2nd Year', value: 'MCA 2nd Year' },
  { label: 'Post-Graduate / Other', value: 'Other' },
]

export const COMMITMENT_OPTIONS = [
  { label: '2 to 4 hours / week (Recommended)', value: '2-4 hours' },
  { label: '1 to 2 hours / week', value: '1-2 hours' },
  { label: '4 to 6 hours / week', value: '4-6 hours' },
  { label: '6+ hours / week (Intensive builder)', value: '6+ hours' },
  { label: 'Flexible / Based on sprint schedule', value: 'Flexible' },
]

export const membershipSchema = z.object({
  fullName: z.string().trim().min(2, { message: 'Full name must be at least 2 characters.' }),
  email: z.email({ message: 'Please enter a valid email address.' }).trim().toLowerCase(),
  phone: z.string().trim().min(8, { message: 'Please enter a valid phone or WhatsApp number.' }),
  department: z.string().trim().min(1, { message: 'Please select your department.' }),
  year: z.string().trim().min(1, { message: 'Please select your academic year.' }),
  interests: z
    .array(z.string())
    .min(1, { message: 'Please select at least one area of interest.' }),
  skills: z
    .string()
    .trim()
    .min(2, { message: 'Please state your skills or willingness to learn.' }),
  teamworkRating: z.number().min(1).max(5),
  hasPreviousClubExperience: z.boolean(),
  previousClubExperienceDetails: z.string().optional(),
  reasonToJoin: z.string().trim().min(8, { message: 'Please share what inspires you to apply.' }),
  learningGoals: z.string().optional(),
  weeklyCommitment: z
    .string()
    .trim()
    .min(1, { message: 'Please select your expected weekly commitment.' }),
  willingToParticipateInEvents: z.boolean(),
  contribution: z.string().optional(),
  confirmedInformation: z.boolean().refine((val) => val === true, {
    message: 'You must confirm that the provided information is accurate.',
  }),
})

export type MembershipFormValues = z.infer<typeof membershipSchema>
