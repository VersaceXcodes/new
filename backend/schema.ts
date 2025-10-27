import { z } from 'zod';

// User Table Schemas
export const userSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string(),
  eco_level: z.number().nullable().default(0),
  created_at: z.coerce.date(),
});

export const createUserInputSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(255),
  eco_level: z.number().nullable().default(0),
});

export const updateUserInputSchema = z.object({
  id: z.string(),
  email: z.string().email().optional(),
  name: z.string().min(1).max(255).optional(),
  eco_level: z.number().nullable().optional(),
});

export const searchUserInputSchema = z.object({
  query: z.string().optional(),
  limit: z.number().int().positive().default(10),
  offset: z.number().int().nonnegative().default(0),
  sort_by: z.enum(['name', 'created_at']).default('created_at'),
  sort_order: z.enum(['asc', 'desc']).default('desc')
});

export type User = z.infer<typeof userSchema>;
export type CreateUserInput = z.infer<typeof createUserInputSchema>;
export type UpdateUserInput = z.infer<typeof updateUserInputSchema>;
export type SearchUserInput = z.infer<typeof searchUserInputSchema>;

// User Goals Table Schemas
export const userGoalSchema = z.object({
  goal_id: z.string(),
  user_id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  milestones: z.any().nullable(),
  completion_status: z.boolean().default(false),
  last_updated: z.coerce.date().nullable(),
});

export const createUserGoalInputSchema = z.object({
  user_id: z.string(),
  title: z.string().min(1).max(255),
  description: z.string().nullable(),
  milestones: z.any().nullable(),
  completion_status: z.boolean().optional(),
});

export const updateUserGoalInputSchema = z.object({
  goal_id: z.string(),
  user_id: z.string().optional(),
  title: z.string().min(1).max(255).optional(),
  description: z.string().nullable().optional(),
  milestones: z.any().nullable().optional(),
  completion_status: z.boolean().optional(),
  last_updated: z.coerce.date().nullable().optional(),
});

export const searchUserGoalInputSchema = z.object({
  query: z.string().optional(),
  limit: z.number().int().positive().default(10),
  offset: z.number().int().nonnegative().default(0),
  sort_by: z.enum(['title', 'last_updated']).default('last_updated'),
  sort_order: z.enum(['asc', 'desc']).default('desc')
});

export type UserGoal = z.infer<typeof userGoalSchema>;
export type CreateUserGoalInput = z.infer<typeof createUserGoalInputSchema>;
export type UpdateUserGoalInput = z.infer<typeof updateUserGoalInputSchema>;
export type SearchUserGoalInput = z.infer<typeof searchUserGoalInputSchema>;

// Eco Activities Table Schemas
export const ecoActivitySchema = z.object({
  activity_id: z.string(),
  user_id: z.string(),
  activity_name: z.string(),
  date_logged: z.coerce.date(),
});

export const createEcoActivityInputSchema = z.object({
  user_id: z.string(),
  activity_name: z.string().min(1).max(255),
  date_logged: z.coerce.date(),
});

export const updateEcoActivityInputSchema = z.object({
  activity_id: z.string(),
  user_id: z.string().optional(),
  activity_name: z.string().min(1).max(255).optional(),
  date_logged: z.coerce.date().optional(),
});

export const searchEcoActivityInputSchema = z.object({
  query: z.string().optional(),
  limit: z.number().int().positive().default(10),
  offset: z.number().int().nonnegative().default(0),
  sort_by: z.enum(['activity_name', 'date_logged']).default('date_logged'),
  sort_order: z.enum(['asc', 'desc']).default('desc')
});

export type EcoActivity = z.infer<typeof ecoActivitySchema>;
export type CreateEcoActivityInput = z.infer<typeof createEcoActivityInputSchema>;
export type UpdateEcoActivityInput = z.infer<typeof updateEcoActivityInputSchema>;
export type SearchEcoActivityInput = z.infer<typeof searchEcoActivityInputSchema>;

// Resources Table Schemas
export const resourceSchema = z.object({
  resource_id: z.string(),
  category: z.string(),
  title: z.string(),
  content: z.string(),
  read_count: z.number().nullable().default(0),
});

export const createResourceInputSchema = z.object({
  category: z.string().min(1).max(255),
  title: z.string().min(1).max(255),
  content: z.string().min(1),
  read_count: z.number().nullable().default(0),
});

export const updateResourceInputSchema = z.object({
  resource_id: z.string(),
  category: z.string().min(1).max(255).optional(),
  title: z.string().min(1).max(255).optional(),
  content: z.string().min(1).optional(),
  read_count: z.number().nullable().optional(),
});

export const searchResourceInputSchema = z.object({
  query: z.string().optional(),
  limit: z.number().int().positive().default(10),
  offset: z.number().int().nonnegative().default(0),
  sort_by: z.enum(['title', 'category']).default('title'),
  sort_order: z.enum(['asc', 'desc']).default('desc')
});

export type Resource = z.infer<typeof resourceSchema>;
export type CreateResourceInput = z.infer<typeof createResourceInputSchema>;
export type UpdateResourceInput = z.infer<typeof updateResourceInputSchema>;
export type SearchResourceInput = z.infer<typeof searchResourceInputSchema>;

// Challenges Table Schemas
export const challengeSchema = z.object({
  challenge_id: z.string(),
  title: z.string(),
  description: z.string().nullable(),
  start_date: z.coerce.date(),
  end_date: z.coerce.date(),
});

export const createChallengeInputSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().nullable(),
  start_date: z.coerce.date(),
  end_date: z.coerce.date(),
});

export const updateChallengeInputSchema = z.object({
  challenge_id: z.string(),
  title: z.string().min(1).max(255).optional(),
  description: z.string().nullable().optional(),
  start_date: z.coerce.date().optional(),
  end_date: z.coerce.date().optional(),
});

export const searchChallengeInputSchema = z.object({
  query: z.string().optional(),
  limit: z.number().int().positive().default(10),
  offset: z.number().int().nonnegative().default(0),
  sort_by: z.enum(['title', 'start_date']).default('start_date'),
  sort_order: z.enum(['asc', 'desc']).default('desc')
});

export type Challenge = z.infer<typeof challengeSchema>;
export type CreateChallengeInput = z.infer<typeof createChallengeInputSchema>;
export type UpdateChallengeInput = z.infer<typeof updateChallengeInputSchema>;
export type SearchChallengeInput = z.infer<typeof searchChallengeInputSchema>;

// User Challenges Table Schemas
export const userChallengeSchema = z.object({
  user_challenge_id: z.string(),
  user_id: z.string(),
  challenge_id: z.string(),
  progress: z.number().nullable().default(0),
});

export const createUserChallengeInputSchema = z.object({
  user_id: z.string(),
  challenge_id: z.string(),
  progress: z.number().nullable().optional(),
});

export const updateUserChallengeInputSchema = z.object({
  user_challenge_id: z.string(),
  user_id: z.string().optional(),
  challenge_id: z.string().optional(),
  progress: z.number().nullable().optional(),
});

export const searchUserChallengeInputSchema = z.object({
  query: z.string().optional(),
  limit: z.number().int().positive().default(10),
  offset: z.number().int().nonnegative().default(0),
  sort_by: z.enum(['progress']).default('progress'),
  sort_order: z.enum(['asc', 'desc']).default('desc')
});

export type UserChallenge = z.infer<typeof userChallengeSchema>;
export type CreateUserChallengeInput = z.infer<typeof createUserChallengeInputSchema>;
export type UpdateUserChallengeInput = z.infer<typeof updateUserChallengeInputSchema>;
export type SearchUserChallengeInput = z.infer<typeof searchUserChallengeInputSchema>;

// Notifications Table Schemas
export const notificationSchema = z.object({
  notification_id: z.string(),
  user_id: z.string(),
  message: z.string(),
  is_read: z.boolean().default(false),
  created_at: z.coerce.date(),
});

export const createNotificationInputSchema = z.object({
  user_id: z.string(),
  message: z.string().min(1),
  is_read: z.boolean().optional(),
});

export const updateNotificationInputSchema = z.object({
  notification_id: z.string(),
  user_id: z.string().optional(),
  message: z.string().min(1).optional(),
  is_read: z.boolean().optional(),
});

export const searchNotificationInputSchema = z.object({
  query: z.string().optional(),
  limit: z.number().int().positive().default(10),
  offset: z.number().int().nonnegative().default(0),
  sort_by: z.enum(['created_at']).default('created_at'),
  sort_order: z.enum(['asc', 'desc']).default('desc')
});

export type Notification = z.infer<typeof notificationSchema>;
export type CreateNotificationInput = z.infer<typeof createNotificationInputSchema>;
export type UpdateNotificationInput = z.infer<typeof updateNotificationInputSchema>;
export type SearchNotificationInput = z.infer<typeof searchNotificationInputSchema>;

// Feedback and Support Table Schemas
export const feedbackAndSupportSchema = z.object({
  feedback_id: z.string(),
  user_id: z.string(),
  subject: z.string(),
  details: z.string(),
  screenshot_urls: z.any().nullable(),
});

export const createFeedbackAndSupportInputSchema = z.object({
  user_id: z.string(),
  subject: z.string().min(1).max(255),
  details: z.string().min(1),
  screenshot_urls: z.any().nullable(),
});

export const updateFeedbackAndSupportInputSchema = z.object({
  feedback_id: z.string(),
  user_id: z.string().optional(),
  subject: z.string().min(1).max(255).optional(),
  details: z.string().min(1).optional(),
  screenshot_urls: z.any().nullable().optional(),
});

export const searchFeedbackAndSupportInputSchema = z.object({
  query: z.string().optional(),
  limit: z.number().int().positive().default(10),
  offset: z.number().int().nonnegative().default(0),
  sort_by: z.enum(['subject']).default('subject'),
  sort_order: z.enum(['asc', 'desc']).default('desc')
});

export type FeedbackAndSupport = z.infer<typeof feedbackAndSupportSchema>;
export type CreateFeedbackAndSupportInput = z.infer<typeof createFeedbackAndSupportInputSchema>;
export type UpdateFeedbackAndSupportInput = z.infer<typeof updateFeedbackAndSupportInputSchema>;
export type SearchFeedbackAndSupportInput = z.infer<typeof searchFeedbackAndSupportInputSchema>;