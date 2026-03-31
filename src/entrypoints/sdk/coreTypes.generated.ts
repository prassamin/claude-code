import * as z from "zod";
import * as schemas from "./coreSchemas.js";

export type ModelUsage = z.infer<typeof schemas.ModelUsageSchema>;
export type OutputFormatType = z.infer<typeof schemas.OutputFormatTypeSchema>;
export type BaseOutputFormat = z.infer<typeof schemas.BaseOutputFormatSchema>;
export type JsonSchemaOutputFormat = z.infer<
  typeof schemas.JsonSchemaOutputFormatSchema
>;
export type OutputFormat = z.infer<typeof schemas.OutputFormatSchema>;
export type ApiKeySource = z.infer<typeof schemas.ApiKeySourceSchema>;
export type ConfigScope = z.infer<typeof schemas.ConfigScopeSchema>;
export type SdkBeta = z.infer<typeof schemas.SdkBetaSchema>;
export type ThinkingAdaptive = z.infer<typeof schemas.ThinkingAdaptiveSchema>;
export type ThinkingEnabled = z.infer<typeof schemas.ThinkingEnabledSchema>;
export type ThinkingDisabled = z.infer<typeof schemas.ThinkingDisabledSchema>;
export type ThinkingConfig = z.infer<typeof schemas.ThinkingConfigSchema>;
export type McpStdioServerConfig = z.infer<
  typeof schemas.McpStdioServerConfigSchema
>;
export type McpSSEServerConfig = z.infer<
  typeof schemas.McpSSEServerConfigSchema
>;
export type McpHttpServerConfig = z.infer<
  typeof schemas.McpHttpServerConfigSchema
>;
export type McpSdkServerConfig = z.infer<
  typeof schemas.McpSdkServerConfigSchema
>;
export type McpServerConfigForProcessTransport = z.infer<
  typeof schemas.McpServerConfigForProcessTransportSchema
>;
export type McpClaudeAIProxyServerConfig = z.infer<
  typeof schemas.McpClaudeAIProxyServerConfigSchema
>;
export type McpServerStatusConfig = z.infer<
  typeof schemas.McpServerStatusConfigSchema
>;
export type McpServerStatus = z.infer<typeof schemas.McpServerStatusSchema>;
export type McpSetServersResult = z.infer<
  typeof schemas.McpSetServersResultSchema
>;
export type PermissionUpdateDestination = z.infer<
  typeof schemas.PermissionUpdateDestinationSchema
>;
export type PermissionBehavior = z.infer<
  typeof schemas.PermissionBehaviorSchema
>;
export type PermissionRuleValue = z.infer<
  typeof schemas.PermissionRuleValueSchema
>;
export type PermissionUpdate = z.infer<typeof schemas.PermissionUpdateSchema>;
export type PermissionDecisionClassification = z.infer<
  typeof schemas.PermissionDecisionClassificationSchema
>;
export type PermissionResult = z.infer<typeof schemas.PermissionResultSchema>;
export type PermissionMode = z.infer<typeof schemas.PermissionModeSchema>;
export type HookEvent = z.infer<typeof schemas.HookEventSchema>;
export type BaseHookInput = z.infer<typeof schemas.BaseHookInputSchema>;
export type PreToolUseHookInput = z.infer<
  typeof schemas.PreToolUseHookInputSchema
>;
export type PermissionRequestHookInput = z.infer<
  typeof schemas.PermissionRequestHookInputSchema
>;
export type PostToolUseHookInput = z.infer<
  typeof schemas.PostToolUseHookInputSchema
>;
export type PostToolUseFailureHookInput = z.infer<
  typeof schemas.PostToolUseFailureHookInputSchema
>;
export type PermissionDeniedHookInput = z.infer<
  typeof schemas.PermissionDeniedHookInputSchema
>;
export type NotificationHookInput = z.infer<
  typeof schemas.NotificationHookInputSchema
>;
export type UserPromptSubmitHookInput = z.infer<
  typeof schemas.UserPromptSubmitHookInputSchema
>;
export type SessionStartHookInput = z.infer<
  typeof schemas.SessionStartHookInputSchema
>;
export type SetupHookInput = z.infer<typeof schemas.SetupHookInputSchema>;
export type StopHookInput = z.infer<typeof schemas.StopHookInputSchema>;
export type StopFailureHookInput = z.infer<
  typeof schemas.StopFailureHookInputSchema
>;
export type SubagentStartHookInput = z.infer<
  typeof schemas.SubagentStartHookInputSchema
>;
export type SubagentStopHookInput = z.infer<
  typeof schemas.SubagentStopHookInputSchema
>;
export type PreCompactHookInput = z.infer<
  typeof schemas.PreCompactHookInputSchema
>;
export type PostCompactHookInput = z.infer<
  typeof schemas.PostCompactHookInputSchema
>;
export type TeammateIdleHookInput = z.infer<
  typeof schemas.TeammateIdleHookInputSchema
>;
export type TaskCreatedHookInput = z.infer<
  typeof schemas.TaskCreatedHookInputSchema
>;
export type TaskCompletedHookInput = z.infer<
  typeof schemas.TaskCompletedHookInputSchema
>;
export type ElicitationHookInput = z.infer<
  typeof schemas.ElicitationHookInputSchema
>;
export type ElicitationResultHookInput = z.infer<
  typeof schemas.ElicitationResultHookInputSchema
>;
export type ConfigChangeHookInput = z.infer<
  typeof schemas.ConfigChangeHookInputSchema
>;
export type InstructionsLoadedHookInput = z.infer<
  typeof schemas.InstructionsLoadedHookInputSchema
>;
export type WorktreeCreateHookInput = z.infer<
  typeof schemas.WorktreeCreateHookInputSchema
>;
export type WorktreeRemoveHookInput = z.infer<
  typeof schemas.WorktreeRemoveHookInputSchema
>;
export type CwdChangedHookInput = z.infer<
  typeof schemas.CwdChangedHookInputSchema
>;
export type FileChangedHookInput = z.infer<
  typeof schemas.FileChangedHookInputSchema
>;
export type ExitReason = z.infer<typeof schemas.ExitReasonSchema>;
export type SessionEndHookInput = z.infer<
  typeof schemas.SessionEndHookInputSchema
>;
export type HookInput = z.infer<typeof schemas.HookInputSchema>;
export type AsyncHookJSONOutput = z.infer<
  typeof schemas.AsyncHookJSONOutputSchema
>;
export type PreToolUseHookSpecificOutput = z.infer<
  typeof schemas.PreToolUseHookSpecificOutputSchema
>;
export type UserPromptSubmitHookSpecificOutput = z.infer<
  typeof schemas.UserPromptSubmitHookSpecificOutputSchema
>;
export type SessionStartHookSpecificOutput = z.infer<
  typeof schemas.SessionStartHookSpecificOutputSchema
>;
export type SetupHookSpecificOutput = z.infer<
  typeof schemas.SetupHookSpecificOutputSchema
>;
export type SubagentStartHookSpecificOutput = z.infer<
  typeof schemas.SubagentStartHookSpecificOutputSchema
>;
export type PostToolUseHookSpecificOutput = z.infer<
  typeof schemas.PostToolUseHookSpecificOutputSchema
>;
export type PostToolUseFailureHookSpecificOutput = z.infer<
  typeof schemas.PostToolUseFailureHookSpecificOutputSchema
>;
export type PermissionDeniedHookSpecificOutput = z.infer<
  typeof schemas.PermissionDeniedHookSpecificOutputSchema
>;
export type NotificationHookSpecificOutput = z.infer<
  typeof schemas.NotificationHookSpecificOutputSchema
>;
export type PermissionRequestHookSpecificOutput = z.infer<
  typeof schemas.PermissionRequestHookSpecificOutputSchema
>;
export type CwdChangedHookSpecificOutput = z.infer<
  typeof schemas.CwdChangedHookSpecificOutputSchema
>;
export type FileChangedHookSpecificOutput = z.infer<
  typeof schemas.FileChangedHookSpecificOutputSchema
>;
export type SyncHookJSONOutput = z.infer<
  typeof schemas.SyncHookJSONOutputSchema
>;
export type ElicitationHookSpecificOutput = z.infer<
  typeof schemas.ElicitationHookSpecificOutputSchema
>;
export type ElicitationResultHookSpecificOutput = z.infer<
  typeof schemas.ElicitationResultHookSpecificOutputSchema
>;
export type WorktreeCreateHookSpecificOutput = z.infer<
  typeof schemas.WorktreeCreateHookSpecificOutputSchema
>;
export type HookJSONOutput = z.infer<typeof schemas.HookJSONOutputSchema>;
export type PromptRequestOption = z.infer<
  typeof schemas.PromptRequestOptionSchema
>;
export type PromptRequest = z.infer<typeof schemas.PromptRequestSchema>;
export type PromptResponse = z.infer<typeof schemas.PromptResponseSchema>;
export type SlashCommand = z.infer<typeof schemas.SlashCommandSchema>;
export type AgentInfo = z.infer<typeof schemas.AgentInfoSchema>;
export type ModelInfo = z.infer<typeof schemas.ModelInfoSchema>;
export type AccountInfo = z.infer<typeof schemas.AccountInfoSchema>;
export type AgentMcpServerSpec = z.infer<
  typeof schemas.AgentMcpServerSpecSchema
>;
export type AgentDefinition = z.infer<typeof schemas.AgentDefinitionSchema>;
export type SettingSource = z.infer<typeof schemas.SettingSourceSchema>;
export type SdkPluginConfig = z.infer<typeof schemas.SdkPluginConfigSchema>;
export type RewindFilesResult = z.infer<typeof schemas.RewindFilesResultSchema>;
export type APIUserMessagePlaceholder = z.infer<
  typeof schemas.APIUserMessagePlaceholder
>;
export type APIAssistantMessagePlaceholder = z.infer<
  typeof schemas.APIAssistantMessagePlaceholder
>;
export type RawMessageStreamEventPlaceholder = z.infer<
  typeof schemas.RawMessageStreamEventPlaceholder
>;
export type UUIDPlaceholder = z.infer<typeof schemas.UUIDPlaceholder>;
export type NonNullableUsagePlaceholder = z.infer<
  typeof schemas.NonNullableUsagePlaceholder
>;
export type SDKAssistantMessageError = z.infer<
  typeof schemas.SDKAssistantMessageErrorSchema
>;
export type SDKStatus = z.infer<typeof schemas.SDKStatusSchema>;
export type SDKUserMessage = z.infer<typeof schemas.SDKUserMessageSchema>;
export type SDKUserMessageReplay = z.infer<
  typeof schemas.SDKUserMessageReplaySchema
>;
export type SDKRateLimitInfo = z.infer<typeof schemas.SDKRateLimitInfoSchema>;
export type SDKAssistantMessage = z.infer<
  typeof schemas.SDKAssistantMessageSchema
>;
export type SDKRateLimitEvent = z.infer<typeof schemas.SDKRateLimitEventSchema>;
export type SDKStreamlinedTextMessage = z.infer<
  typeof schemas.SDKStreamlinedTextMessageSchema
>;
export type SDKStreamlinedToolUseSummaryMessage = z.infer<
  typeof schemas.SDKStreamlinedToolUseSummaryMessageSchema
>;
export type SDKPermissionDenial = z.infer<
  typeof schemas.SDKPermissionDenialSchema
>;
export type SDKResultSuccess = z.infer<typeof schemas.SDKResultSuccessSchema>;
export type SDKResultError = z.infer<typeof schemas.SDKResultErrorSchema>;
export type SDKResultMessage = z.infer<typeof schemas.SDKResultMessageSchema>;
export type SDKSystemMessage = z.infer<typeof schemas.SDKSystemMessageSchema>;
export type SDKPartialAssistantMessage = z.infer<
  typeof schemas.SDKPartialAssistantMessageSchema
>;
export type SDKCompactBoundaryMessage = z.infer<
  typeof schemas.SDKCompactBoundaryMessageSchema
>;
export type SDKStatusMessage = z.infer<typeof schemas.SDKStatusMessageSchema>;
export type SDKPostTurnSummaryMessage = z.infer<
  typeof schemas.SDKPostTurnSummaryMessageSchema
>;
export type SDKAPIRetryMessage = z.infer<
  typeof schemas.SDKAPIRetryMessageSchema
>;
export type SDKLocalCommandOutputMessage = z.infer<
  typeof schemas.SDKLocalCommandOutputMessageSchema
>;
export type SDKHookStartedMessage = z.infer<
  typeof schemas.SDKHookStartedMessageSchema
>;
export type SDKHookProgressMessage = z.infer<
  typeof schemas.SDKHookProgressMessageSchema
>;
export type SDKHookResponseMessage = z.infer<
  typeof schemas.SDKHookResponseMessageSchema
>;
export type SDKToolProgressMessage = z.infer<
  typeof schemas.SDKToolProgressMessageSchema
>;
export type SDKAuthStatusMessage = z.infer<
  typeof schemas.SDKAuthStatusMessageSchema
>;
export type SDKFilesPersistedEvent = z.infer<
  typeof schemas.SDKFilesPersistedEventSchema
>;
export type SDKTaskNotificationMessage = z.infer<
  typeof schemas.SDKTaskNotificationMessageSchema
>;
export type SDKTaskStartedMessage = z.infer<
  typeof schemas.SDKTaskStartedMessageSchema
>;
export type SDKSessionStateChangedMessage = z.infer<
  typeof schemas.SDKSessionStateChangedMessageSchema
>;
export type SDKTaskProgressMessage = z.infer<
  typeof schemas.SDKTaskProgressMessageSchema
>;
export type SDKToolUseSummaryMessage = z.infer<
  typeof schemas.SDKToolUseSummaryMessageSchema
>;
export type SDKElicitationCompleteMessage = z.infer<
  typeof schemas.SDKElicitationCompleteMessageSchema
>;
export type SDKPromptSuggestionMessage = z.infer<
  typeof schemas.SDKPromptSuggestionMessageSchema
>;
export type SDKSessionInfo = z.infer<typeof schemas.SDKSessionInfoSchema>;
export type SDKMessage = z.infer<typeof schemas.SDKMessageSchema>;
export type FastModeState = z.infer<typeof schemas.FastModeStateSchema>;
