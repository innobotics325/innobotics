import type { CollectionConfig } from 'payload'

import { anyone } from '../access/anyone'
import { authenticated } from '../access/authenticated'

export const Memberships: CollectionConfig = {
  slug: 'memberships',
  labels: {
    singular: 'Membership Application',
    plural: 'Membership Applications',
  },
  access: {
    create: anyone,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'department', 'year', 'status', 'appliedAt'],
    group: 'Club Management',
    description: 'Review and manage incoming student club membership requests and applications.',
  },
  fields: [
    // --- Management Layer (Sidebar) ---
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      required: true,
      options: [
        { label: 'Pending Review', value: 'pending' },
        { label: 'Under Review', value: 'under_review' },
        { label: 'Interview Scheduled', value: 'interview_scheduled' },
        { label: 'Accepted', value: 'accepted' },
        { label: 'Rejected', value: 'rejected' },
      ],
      admin: {
        position: 'sidebar',
        description: 'Current recruitment status for this application',
      },
    },
    {
      name: 'appliedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
        description: 'Submission timestamp',
      },
      defaultValue: () => new Date().toISOString(),
    },
    {
      name: 'reviewedBy',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
        description: 'Club admin or lead who reviewed this applicant',
      },
    },
    {
      name: 'interviewDate',
      type: 'date',
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
        },
        description: 'Scheduled casual chat / interview date if applicable',
      },
    },
    {
      name: 'reviewNotes',
      type: 'textarea',
      admin: {
        position: 'sidebar',
        description: 'Internal evaluation notes from recruitment team',
      },
    },

    // --- Applicant Information ---
    {
      type: 'tabs',
      tabs: [
        {
          label: 'Personal Information',
          fields: [
            {
              type: 'row',
              fields: [
                {
                  name: 'fullName',
                  type: 'text',
                  required: true,
                  admin: {
                    width: '50%',
                  },
                },
                {
                  name: 'email',
                  type: 'email',
                  required: true,
                  admin: {
                    width: '50%',
                  },
                },
              ],
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'phone',
                  type: 'text',
                  required: true,
                  admin: {
                    width: '33.33%',
                  },
                },
                {
                  name: 'department',
                  type: 'text',
                  required: true,
                  admin: {
                    width: '33.33%',
                    description: 'e.g. MCA, Department of Information Technology',
                  },
                },
                {
                  name: 'year',
                  type: 'text',
                  required: true,
                  admin: {
                    width: '33.33%',
                    description: 'e.g. 2026, 1st (2026-2027)',
                  },
                },
              ],
            },
          ],
        },
        {
          label: 'Interests & Skills',
          fields: [
            {
              name: 'interests',
              type: 'select',
              hasMany: true,
              options: [
                { label: 'Artificial Intelligence', value: 'Artificial Intelligence' },
                { label: 'Cybersecurity', value: 'Cybersecurity' },
                { label: 'Web Development', value: 'Web Development' },
                { label: 'App Development', value: 'App Development' },
                { label: 'Internet of Things', value: 'Internet of Things' },
                { label: 'Robotics', value: 'Robotics' },
                { label: 'Graphic Design', value: 'Graphic Design' },
                { label: 'Research and Innovation', value: 'Research and Innovation' },
                { label: 'Programming', value: 'Programming' },
                { label: 'Photography', value: 'Photography' },
                { label: 'Other', value: 'Other' },
              ],
              admin: {
                description: 'What interests you the most?',
              },
            },
            {
              name: 'skills',
              type: 'text',
              required: true,
              admin: {
                description: 'What skills do you currently have?',
              },
            },
            {
              name: 'teamworkRating',
              type: 'number',
              min: 1,
              max: 5,
              admin: {
                description: 'Teamwork skills self-rating (1 to 5)',
              },
            },
            {
              name: 'hasPreviousClubExperience',
              type: 'checkbox',
              defaultValue: false,
              admin: {
                description: 'Have you been a member of any club or organisation before?',
              },
            },
            {
              name: 'previousClubExperienceDetails',
              type: 'textarea',
              admin: {
                description: 'If yes, mention your role and responsibilities',
                condition: (data) => Boolean(data?.hasPreviousClubExperience),
              },
            },
          ],
        },
        {
          label: 'Club Goals & Commitment',
          fields: [
            {
              name: 'reasonToJoin',
              type: 'textarea',
              required: true,
              admin: {
                description: 'Why do you want to join the Innobotics Club?',
              },
            },
            {
              name: 'learningGoals',
              type: 'textarea',
              admin: {
                description: 'What do you hope to learn from Innobotics Club?',
              },
            },
            {
              type: 'row',
              fields: [
                {
                  name: 'weeklyCommitment',
                  type: 'text',
                  admin: {
                    width: '50%',
                    description: 'How many hours per week can you dedicate to club activities?',
                  },
                },
                {
                  name: 'willingToParticipateInEvents',
                  type: 'checkbox',
                  defaultValue: true,
                  admin: {
                    width: '50%',
                    description:
                      'Are you willing to participate in workshops, competitions, and events organized by the club?',
                  },
                },
              ],
            },
            {
              name: 'contribution',
              type: 'textarea',
              admin: {
                description: "If selected, how would you contribute to the club's growth?",
              },
            },
            {
              name: 'confirmedInformation',
              type: 'checkbox',
              defaultValue: true,
              required: true,
              admin: {
                description:
                  'Confirmed that the information provided is correct and willing to actively participate.',
              },
            },
          ],
        },
      ],
    },
  ],
  timestamps: true,
}
