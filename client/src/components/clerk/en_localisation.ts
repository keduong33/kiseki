import type { LocalizationResource } from "@clerk/types";

export const enUS: LocalizationResource = {
  signUp: {
    start: {
      title: "Sign up to save your results",
      subtitle:
        "Get the pre-release access to the study plan, other diagnostic quizzes, and more",
      actionText: "Have an account?",
      actionLink: "Sign in",
    },
    emailLink: {
      title: "Verify your email",
      subtitle: "to continue to {{applicationName}}",
      formTitle: "Verification link",
      formSubtitle: "Use the verification link sent to your email address",
      resendButton: "Didn't receive a link? Resend",
      verified: {
        title: "Successfully signed up",
      },
      loading: {
        title: "Signing up...",
      },
      verifiedSwitchTab: {
        title: "Successfully verified email",
        subtitle: "Return to the newly opened tab to continue",
        subtitleNewTab: "Return to previous tab to continue",
      },
    },
    emailCode: {
      title: "Verify your email",
      subtitle: "to continue to {{applicationName}}",
      formTitle: "Verification code",
      formSubtitle: "Enter the verification code sent to your email address",
      resendButton: "Didn't receive a code? Resend",
    },
    phoneCode: {
      title: "Verify your phone",
      subtitle: "to continue to {{applicationName}}",
      formTitle: "Verification code",
      formSubtitle: "Enter the verification code sent to your phone number",
      resendButton: "Didn't receive a code? Resend",
    },
    continue: {
      title: "Fill in missing fields",
      subtitle: "to continue to {{applicationName}}",
      actionText: "Have an account?",
      actionLink: "Sign in",
    },
  },
};
