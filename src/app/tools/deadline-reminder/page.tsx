import type { Metadata } from "next";
import { DeadlineReminderClient } from "@/components/tools/DeadlineReminderClient";

export const metadata: Metadata = {
  title: "Form 5472 Filing Deadline Reminder — Never Miss Your Due Date",
  description:
    "Track your Form 5472 filing deadline for foreign-owned LLCs. See how many days until April 15 or your extension date. Set up a free email reminder.",
  openGraph: {
    title: "Form 5472 Filing Deadline Reminder",
    description:
      "Track your Form 5472 filing deadline and get free email reminders before it's due.",
    url: "https://foreignllctax.com/tools/deadline-reminder",
    type: "website",
  },
  alternates: {
    canonical: "/tools/deadline-reminder",
  },
};

export default function DeadlineReminderPage() {
  return <DeadlineReminderClient />;
}
