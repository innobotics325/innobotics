'use client'

import * as React from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ArrowRight, Check, CheckCircle2, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/utilities/ui'
import { FadeIn } from '@/components/custom/motion/fade-in'
import {
  AVAILABLE_INTERESTS,
  DEPARTMENT_OPTIONS,
  YEAR_OPTIONS,
  COMMITMENT_OPTIONS,
  TEAMWORK_DESCRIPTIONS,
  membershipSchema,
  type MembershipFormValues,
} from '@/schemas/membership'

export function MembershipForm() {
  const [submittedId, setSubmittedId] = React.useState<string | number | null>(null)

  const form = useForm<MembershipFormValues>({
    resolver: zodResolver(membershipSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      department: '',
      year: '',
      interests: [],
      skills: '',
      teamworkRating: 3,
      hasPreviousClubExperience: false,
      previousClubExperienceDetails: '',
      reasonToJoin: '',
      learningGoals: '',
      weeklyCommitment: '2-4 hours',
      willingToParticipateInEvents: true,
      contribution: '',
      confirmedInformation: true,
    },
  })

  const { isSubmitting, errors } = form.formState
  const watchedInterests = useWatch({
    control: form.control,
    name: 'interests',
  })
  const watchedRating = useWatch({
    control: form.control,
    name: 'teamworkRating',
  })
  const watchedPreviousExp = useWatch({
    control: form.control,
    name: 'hasPreviousClubExperience',
  })

  const toggleInterest = (interest: string) => {
    const current = form.getValues('interests') || []
    if (current.includes(interest)) {
      form.setValue(
        'interests',
        current.filter((i) => i !== interest),
        { shouldValidate: true },
      )
    } else {
      form.setValue('interests', [...current, interest], { shouldValidate: true })
    }
  }

  const onSubmit = async (values: MembershipFormValues) => {
    try {
      const res = await fetch('/api/memberships', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })

      const data = await res.json()

      if (!res.ok) {
        form.setError('root', {
          message: data.error || 'Failed to submit application.',
        })
        return
      }

      setSubmittedId(data.id)
    } catch (err: any) {
      form.setError('root', {
        message: err.message || 'Something went wrong. Please try again.',
      })
    }
  }

  if (submittedId) {
    const values = form.getValues()
    return (
      <FadeIn>
        <div className="border-t border-border/40 pt-12 space-y-10">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8 text-primary" />
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight">
              Application Registered
            </h3>
          </div>

          <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-xl">
            Thank you, <span className="text-foreground font-medium">{values.fullName}</span>. Your
            candidacy has been submitted to the InnoBotics core recruitment team.
          </p>

          <div className="border-t border-b border-border/40 py-8 space-y-4 max-w-lg">
            <div className="flex justify-between items-baseline">
              <span className="text-xs uppercase tracking-widest text-muted-foreground/60">
                Department & Batch
              </span>
              <span className="text-lg font-light text-foreground">
                {values.department} ({values.year})
              </span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-xs uppercase tracking-widest text-muted-foreground/60">
                Evaluation State
              </span>
              <span className="text-xs font-mono tracking-widest uppercase text-primary font-semibold">
                Under Review
              </span>
            </div>
            <div className="flex justify-between items-baseline">
              <span className="text-xs uppercase tracking-widest text-muted-foreground/60">
                Application Ref
              </span>
              <span className="font-mono text-sm text-muted-foreground">#{submittedId}</span>
            </div>
          </div>

          <p className="text-base text-muted-foreground font-light leading-relaxed">
            Our team will reach out via email or phone for Step 02: Casual Chat.
          </p>
        </div>
      </FadeIn>
    )
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-16">
        {/* 01: Personal Credentials */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60">
                    Full Name <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Alan Turing"
                      className="border-0 border-b border-border/40 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent text-xl font-light shadow-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-destructive" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60">
                    Email Address <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="alan@computing.org"
                      className="border-0 border-b border-border/40 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent text-xl font-light shadow-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs text-destructive" />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60">
                      Direct Line / WhatsApp <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="+91 9876543210"
                        className="border-0 border-b border-border/40 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent text-xl font-light shadow-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage className="text-xs text-destructive" />
                  </FormItem>
                )}
              />
            </div>

            {/* Department SELECT */}
            <div className="md:col-span-4">
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60">
                      Department <span className="text-primary">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-0 border-b border-border/40 rounded-none px-0 h-12 focus-visible:ring-0 focus:border-primary transition-colors bg-transparent text-xl font-light shadow-none">
                          <SelectValue placeholder="Select Department" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-popover border border-border/50">
                        {DEPARTMENT_OPTIONS.map((dept) => (
                          <SelectItem key={dept.value} value={dept.value}>
                            {dept.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs text-destructive" />
                  </FormItem>
                )}
              />
            </div>

            {/* Year SELECT */}
            <div className="md:col-span-3">
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem className="space-y-4">
                    <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60">
                      Batch / Year <span className="text-primary">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="border-0 border-b border-border/40 rounded-none px-0 h-12 focus-visible:ring-0 focus:border-primary transition-colors bg-transparent text-xl font-light shadow-none">
                          <SelectValue placeholder="Select Year" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-popover border border-border/50">
                        {YEAR_OPTIONS.map((yr) => (
                          <SelectItem key={yr.value} value={yr.value}>
                            {yr.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage className="text-xs text-destructive" />
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>

        {/* 02: Technical Focus & Skills */}
        <div className="space-y-10 pt-6">
          <FormField
            control={form.control}
            name="interests"
            render={() => (
              <FormItem className="space-y-4">
                <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60 block">
                  Domain Focus & Interests <span className="text-primary">*</span>
                </FormLabel>
                <div className="flex flex-wrap gap-2.5">
                  {AVAILABLE_INTERESTS.map((interest) => {
                    const selected = watchedInterests?.includes(interest)
                    return (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={cn(
                          'px-4 py-2 text-sm font-light tracking-tight transition-all duration-300 flex items-center gap-2 border cursor-pointer',
                          selected
                            ? 'border-primary text-primary bg-primary/5'
                            : 'border-border/40 text-muted-foreground hover:text-foreground hover:border-border/80 bg-transparent',
                        )}
                      >
                        {selected && <Check className="w-3.5 h-3.5 stroke-[2]" />}
                        {interest}
                      </button>
                    )
                  })}
                </div>
                <FormMessage className="text-xs text-destructive" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60">
                  Current Technical Skillset <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="e.g. Python, Microcontrollers, C++, Web Development, or 'None yet, eager to learn!'"
                    className="border-0 border-b border-border/40 rounded-none px-0 h-12 focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent text-xl font-light shadow-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-destructive" />
              </FormItem>
            )}
          />

          {/* Teamwork self-rating */}
          <FormField
            control={form.control}
            name="teamworkRating"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <div className="flex justify-between items-baseline">
                  <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60">
                    Teamwork & Collaboration Index (1 to 5)
                  </FormLabel>
                  <span className="text-sm font-mono text-primary">
                    [{String(watchedRating || 3).padStart(2, '0')}]
                  </span>
                </div>

                <div className="grid grid-cols-5 gap-3 border-b border-border/40 pb-6">
                  {[1, 2, 3, 4, 5].map((lvl) => {
                    const active = watchedRating === lvl
                    return (
                      <button
                        key={lvl}
                        type="button"
                        onClick={() => field.onChange(lvl)}
                        className={cn(
                          'py-3 text-center font-mono text-sm tracking-widest transition-all cursor-pointer border-b-2 -mb-[26px]',
                          active
                            ? 'border-primary text-primary font-medium'
                            : 'border-transparent text-muted-foreground/60 hover:text-foreground',
                        )}
                      >
                        {String(lvl).padStart(2, '0')}
                      </button>
                    )
                  })}
                </div>
                <p className="text-xs font-light text-muted-foreground italic">
                  {TEAMWORK_DESCRIPTIONS[watchedRating || 3]}
                </p>
                <FormMessage className="text-xs text-destructive" />
              </FormItem>
            )}
          />

          {/* Past Club Experience */}
          <FormField
            control={form.control}
            name="hasPreviousClubExperience"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60 block">
                  Prior Membership in Any Club / Organization?
                </FormLabel>
                <div className="flex gap-8">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="hasPreviousClubExperience"
                      checked={field.value === false}
                      onChange={() => {
                        field.onChange(false)
                        form.setValue('previousClubExperienceDetails', '')
                      }}
                      className="w-4 h-4 text-primary accent-primary"
                    />
                    <span className="text-base font-light text-foreground">
                      No prior club membership
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="hasPreviousClubExperience"
                      checked={field.value === true}
                      onChange={() => field.onChange(true)}
                      className="w-4 h-4 text-primary accent-primary"
                    />
                    <span className="text-base font-light text-foreground">
                      Yes, have experience
                    </span>
                  </label>
                </div>

                {watchedPreviousExp === true && (
                  <FormField
                    control={form.control}
                    name="previousClubExperienceDetails"
                    render={({ field: detailsField }) => (
                      <div className="space-y-3 pt-2">
                        <label
                          htmlFor="previousClubExperienceDetails"
                          className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60"
                        >
                          Role & Responsibilities
                        </label>
                        <Textarea
                          id="previousClubExperienceDetails"
                          placeholder="Mention the organization, your role, and key contributions..."
                          className="border-0 border-b border-border/40 rounded-none px-0 min-h-[90px] focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent text-xl font-light resize-none shadow-none"
                          {...detailsField}
                        />
                      </div>
                    )}
                  />
                )}
                <FormMessage className="text-xs text-destructive" />
              </FormItem>
            )}
          />
        </div>

        {/* 03: Goals & Commitment */}
        <div className="space-y-10 pt-6">
          <FormField
            control={form.control}
            name="reasonToJoin"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60">
                  Why do you want to join InnoBotics Club? <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="What drives your curiosity? What do you hope to build or explore with us?"
                    className="border-0 border-b border-border/40 rounded-none px-0 min-h-[110px] focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent text-xl font-light resize-none shadow-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-destructive" />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="learningGoals"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60">
                  Learning Aspirations
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="e.g. Embedded systems, computer vision, web architectures, autonomous robotics..."
                    className="border-0 border-b border-border/40 rounded-none px-0 min-h-[90px] focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent text-xl font-light resize-none shadow-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-destructive" />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Weekly Commitment SELECT */}
            <FormField
              control={form.control}
              name="weeklyCommitment"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60">
                    Weekly Commitment
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    value={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className="border-0 border-b border-border/40 rounded-none px-0 h-12 focus-visible:ring-0 focus:border-primary transition-colors bg-transparent text-xl font-light shadow-none">
                        <SelectValue placeholder="Select commitment" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-popover border border-border/50">
                      {COMMITMENT_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-xs text-destructive" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="willingToParticipateInEvents"
              render={({ field }) => (
                <FormItem className="space-y-4">
                  <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60 block">
                    Workshops & Events Participation
                  </FormLabel>
                  <div className="flex gap-8 pt-3">
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="willingToParticipateInEvents"
                        checked={field.value === true}
                        onChange={() => field.onChange(true)}
                        className="w-4 h-4 text-primary accent-primary"
                      />
                      <span className="text-base font-light text-foreground">Yes, actively</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="willingToParticipateInEvents"
                        checked={field.value === false}
                        onChange={() => field.onChange(false)}
                        className="w-4 h-4 text-primary accent-primary"
                      />
                      <span className="text-base font-light text-foreground">No / Conditional</span>
                    </label>
                  </div>
                  <FormMessage className="text-xs text-destructive" />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="contribution"
            render={({ field }) => (
              <FormItem className="space-y-4">
                <FormLabel className="text-xs uppercase tracking-widest font-semibold text-muted-foreground/60">
                  How would you contribute to the club&apos;s trajectory?
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Sharing project ideas, mentoring peers, helping coordinate hackathons, technical documentation..."
                    className="border-0 border-b border-border/40 rounded-none px-0 min-h-[90px] focus-visible:ring-0 focus-visible:border-primary transition-colors bg-transparent text-xl font-light resize-none shadow-none"
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs text-destructive" />
              </FormItem>
            )}
          />
        </div>

        {/* 04: Verification & Submission */}
        <div className="space-y-10 pt-4">
          <FormField
            control={form.control}
            name="confirmedInformation"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-start gap-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="mt-1"
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-light text-muted-foreground leading-relaxed cursor-pointer font-normal">
                    I confirm that the details provided are accurate and I commit to actively taking
                    part in club activities and project sprints.
                  </FormLabel>
                </div>
                <FormMessage className="text-xs text-destructive mt-2" />
              </FormItem>
            )}
          />

          {errors.root?.message && (
            <p className="text-sm text-destructive font-medium">{errors.root.message}</p>
          )}

          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="h-16 px-12 text-lg font-light rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:scale-105"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-3">
                  <Loader2 className="w-5 h-5 animate-spin" /> Submitting Application...
                </span>
              ) : (
                <span className="flex items-center gap-3">
                  Submit Application <ArrowRight className="w-5 h-5" />
                </span>
              )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
  )
}
